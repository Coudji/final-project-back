import UserProfile from '#models/user_profile'
import { userProfileExistValidator, userProfileValidator } from '#validators/user_profile_validator'
import { userExistValidator } from '#validators/user_validator'
import type { HttpContext } from '@adonisjs/core/http'

export default class UserProfilesController {
  async getAllUserProfile({ response }: HttpContext) {
    const profiles = await UserProfile.all()
    return response.ok(profiles)
  }

  async getUserProfile({ params, request, response }: HttpContext) {
    await request.validateUsing(userExistValidator)
    await request.validateUsing(userProfileExistValidator)
    const userProfile = await UserProfile.findByOrFail('userId', params.id)
    return response.ok(userProfile)
  }

  async upsertUserProfile({auth, params, request, response }: HttpContext) {
    await request.validateUsing(userExistValidator)
    await request.validateUsing(userProfileValidator)
    const user = await auth.authenticate()
    if (user.id !== +params.id && user.userType !== 'admin') return response.status(403).json({message: 'Forbidden access'})
    const userProfile = await UserProfile.updateOrCreate({ userId: params.id }, request.body())
    userProfile.save()
    return response.ok({
      message: `User ${params.id} userProfile has been created or modified`,
    })
  }

  async deleteUserProfile({ auth, params, request, response }: HttpContext) {
    await request.validateUsing(userExistValidator)
    await request.validateUsing(userProfileExistValidator)
    const user = await auth.authenticate()

    if (user.id !== +params.id && user.userType !== 'admin') {
      return response.status(403).json({
        message: 'Forbidden access',
      })
    }

    const userProfile = await UserProfile.findByOrFail('user_id', params.id)
    await userProfile.delete()
    return response.ok({
      message: `Profile of user ${params.id} has been deleted`,
    })
  }
}
