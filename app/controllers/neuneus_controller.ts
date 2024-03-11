import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class NeuneusController {
  /**
   * Display a list of resource
   */
  async index({response}: HttpContext) {
    const users = await User.query().preload('userProfile')
    //const users = await User.all()
    return response.ok({
      users
    })
  }

  /**
   * Display form to create a new record
   */
  async create({}: HttpContext) {}

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {}

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {}

  /**
   * Edit individual record
   */
  async edit({ params }: HttpContext) {}

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {

    const user = await User.findOrFail(params.id)
    user.nickname = request.body().nickname
    await user.save()
    return {
      "nickname": user.nickname,
      "updatedAt": user.updatedAt
    }
    
  }

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {}
}