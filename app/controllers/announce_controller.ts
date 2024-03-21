import Announce from '#models/announce'
import type { HttpContext } from '@adonisjs/core/http'
import { createAnnounceValidator, updateAnnounceValidator } from '#validators/announce_validator'

export default class AnnounceController {
  async getAllAnnounces({ response }: HttpContext) {
    const announces = await Announce.all()
        return response.ok(announces)
  }

  async getOneAnnounce({ params, response }: HttpContext) {    
    const announce = await Announce.findByOrFail('user_id', params.id)
    return response.ok({
      message: `Announce for user ${params.id}`,
      announce: announce
    })
  }

  async createAnnounce({ auth, params, request, response }: HttpContext) {
    await request.validateUsing(createAnnounceValidator)
    const user = await auth.authenticate()
    if(user.id !== params.id) return response.status(403).json({message: "Forbidden access"})
    request.body()['userId'] = params.id
    const announce = await Announce.create(request.body())
    announce.save()
    return response.ok({
      message: `Announce for user ${params.id} has been created`
    })
  }

  async updateAnnounce({auth, params, request, response }: HttpContext) {
    await request.validateUsing(updateAnnounceValidator)
    const user = await auth.authenticate()
    if(user.id !== params.id && user.userType !== 'admin') return response.status(403).json({message: "Forbidden access"})

    const announce = await Announce.findByOrFail('user_id', params.id)
    const req = request.body()

    if (announce.title !== req.title) announce.status = 'PENDING'
    announce.merge(req)
    await announce.save()
    return response.ok({
      message: `Announce for user ${params.id} has been updated`
    })
  }

  async deleteAnnounce({ params, auth, response }: HttpContext) {
    const user = await auth.authenticate()
    const announce = await Announce.findByOrFail("userId", params.id)
      if (announce.userId === user.id || user.userType === 'admin') {
        await announce.delete()
        return response.ok({
          message: `Announce for user ${params.id} has been deleted`,
        })
      }
  }

  async adminCheckAnnounce({ auth , params, request, response }: HttpContext) {
    const user = await auth.authenticate()
    if(user.userType !== 'admin') return response.status(403).json({message: "Forbidden access"})
    const announce = await Announce.findByOrFail('user_id', params.id)
    announce.status = request.body().status
    await announce.save()
    return response.ok({
      message: `New announce status set as ${request.body().status}`
    })
  }
}
