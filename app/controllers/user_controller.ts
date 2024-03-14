import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class UserController {
  async getAllUsers({ response }: HttpContext) {
    const users = await User.query().preload('userProfile').preload('announce')
    //const users = await User.all()
    return response.ok({
      users,
    })
  }

  async getOneUser({ params, response }: HttpContext) {
    const user = await User.findOrFail(params.id)
    return response.ok({
      user,
    })
  }

  async getOneFullUser({ params, response }: HttpContext) {
    const user = await User.query()
      .where('id', params.id)
      .preload('userProfile')
      .preload('announce')
    return response.ok({
      user,
    })
  }

  async updateOneUser({ params, request }: HttpContext) {
    const user = await User.findOrFail(params.id)
    const reqData = request.body()
    user.merge(reqData)
    await user.save()
    return {
      nickname: user.nickname,
      updatedAt: user.updatedAt,
    }
  }

  async destroy({ params, response }: HttpContext) {
    //const user = await auth.authenticate()
    const user = await User.findOrFail(params.id)
    if (user.id === params.id) {
      await user.delete()
      //await User.query().where('id', params.id).delete()
      return response.ok({
        message: `user ${params.id} has been deleted`,
      })
    }
  }
}
