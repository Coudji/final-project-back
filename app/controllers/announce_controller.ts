import Announce from '#models/announce'
import type { HttpContext } from '@adonisjs/core/http'

export default class AnnounceController {
  async getAllAnnounces({ response }: HttpContext) {
    const announces = await Announce.all()
    return response.ok({ announces })
  }

  async getOneAnnounce({ params, response }: HttpContext) {
    const announce = await Announce.findByOrFail('user_id', params.id)
    return response.ok({ announce })
  }

  async createAnnounce({ request, response }: HttpContext) {
    Announce.create(request.body())
    return response.ok('ok')
  }

  async updateAnnounce({ params, request, response }: HttpContext) {
    const announce = await Announce.findByOrFail('user_id', params.id)
    announce.merge(request.body())
    return response.ok('okok')
  }

  async deleteAnnounce({ params, auth, response }: HttpContext) {
    const user = await auth.authenticate()
    const announce = await Announce.findOrFail(params.id)
    if (announce.userId === user.id) {
      await announce.delete()
      return response.ok({
        message: `Announce ${params.id} has been deleted`,
      })
    }
  }
}
