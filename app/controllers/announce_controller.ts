import Announce from '#models/announce'
import type { HttpContext } from '@adonisjs/core/http'
import { announceValidator } from '#validators/announce_validator'

export default class AnnounceController {
  async getAllAnnounces({ response }: HttpContext) {
    try {
        const announces = await Announce.all()
        return response.ok({ 
            announces 
        })
    } catch (error) {
        return response.status(500).json({ 
            error: 'Internal Server Error' 
        })
    }
  }

  async getOneAnnounce({ params, response }: HttpContext) {
    try {
      const announce = await Announce.findByOrFail('user_id', params.id)
      return response.ok({ announce })
    } catch (error) {
      return response.status(500).json({ 
        error: 'Internal Server Error' 
      })
    }
  }

  async createAnnounce({ request, response }: HttpContext) {
    try {
      const validatedData = await announceValidator.validate(request.body())
      Announce.create(validatedData)
      return response.ok('ok')
    } catch (error) {
        return response.status(500).json({ 
          error: 'Internal Server Error' 
      })
    }
  }

  async updateAnnounce({ params, request, response }: HttpContext) {
    try {
      const validatedData = await announceValidator.validate(request.body())
      const announce = await Announce.findByOrFail('user_id', params.id)
      announce.merge(validatedData)
      return response.ok('okok')
    } catch (error) {
        return response.status(500).json({ 
          error: 'Internal Server Error' 
      })
    }
  }

  async deleteAnnounce({ params, auth, response }: HttpContext) {
    try {
      const user = await auth.authenticate()
      const announce = await Announce.findOrFail(params.id)
      if (announce.userId === user.id) {
        await announce.delete()
        return response.ok({
          message: `Announce ${params.id} has been deleted`,
        })}
    } catch (error) {
        return response.status(500).json({ 
          error: 'Internal Server Error' 
      })
    }
  }
}
