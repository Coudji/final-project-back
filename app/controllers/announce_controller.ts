import Announce from '#models/announce'
import type { HttpContext } from '@adonisjs/core/http'

export default class AnnounceController {
  async getAllAnnounces({ response }: HttpContext) {
    const announces = await Announce.all()
    return response.ok({ announces })
  }

  async getOneAnnounce({ params, response }: HttpContext) {
    const announce = Announce.findOrFail(params.id)
    return response.ok({ announce })
  }

  async createAnnounce({ request, response }: HttpContext) {
    Announce.create(request.body())
    return response.ok('ok')
  }
}
