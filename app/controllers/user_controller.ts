/* import AnnounceFilter from '#models/filters/announce_filter'
import UserFilter from '#models/filters/user_filter' */
import User from '#models/user'
import { patchUserValidator, userCredentialValidator, userExistValidator } from '#validators/user_validator'
import type { HttpContext } from '@adonisjs/core/http'

export default class UserController {
  async getAllUsers({ response }: HttpContext) {
    const users = await User.all()
    return response.ok({
      users,
    })
  }

/*   async filteredUser({request}:HttpContext) {
    return User.filter(request.qs(),UserFilter).exec()
  } */

  async getAllFullUsers({ response }: HttpContext) {
    const users = await User.query().preload('announce').preload('userProfile').preload('gallery')
    return response.ok({
      users,
    })
  }

  async getOneUser({ params, request, response }: HttpContext) {
    await request.validateUsing(userExistValidator)
    const user = await User.findOrFail(params.id)
    return response.ok({
      user,
    })
  }

  async getOneFullUser({ params, request, response }: HttpContext) {
    await request.validateUsing(userExistValidator)
    const user = await User.query()
      .where('id', params.id)
      .preload('userProfile')
      .preload('announce')
      .preload('gallery')
    return response.ok({
      user,
    })
  }

  async updateOneUser({ auth, params, request, response }: HttpContext) {
    await request.validateUsing(userExistValidator)
    await request.validateUsing(patchUserValidator)
    const user = await auth.authenticate()
    if(user.id !== +params.id && user.userType !== 'admin') return response.status(403).json({message: 'Forbidden access'})
    const userToUpdate = await User.findOrFail(params.id)
    const reqBody = request.body()
    userToUpdate.merge(reqBody)
    await userToUpdate.save()
    return response.ok({
      message: `user ${params.id} has been updated`,
    })
  }

  async deleteOneUser({ auth, params, request, response }: HttpContext) {
    await request.validateUsing(userExistValidator)
    const user = await auth.authenticate()

    if (user.id !== +params.id && user.userType !== 'admin') {
      return response.status(403).json({
        message: 'Forbidden access',
      })
    }
    await user.delete()
      return response.ok({
        message: `user ${params.id} has been deleted`,
      })
  }

  async updateCredentials({ auth, params, request, response}: HttpContext) {
    await request.validateUsing(userExistValidator)
    await request.validateUsing(userCredentialValidator)
    const user = await auth.authenticate()
    
    if (user.id !== +params.id && user.userType !== 'admin') {
      return response.status(403).json({
        message: 'Forbidden access',
      })
    }
    
    user.merge(request.body())
    user.save()
    return response.ok({
      message: `User ${params.id} credentials has been updated`
    })
  }
}
