import Announce from '#models/announce'
import { HttpContext } from '@adonisjs/core/http'

export default class AnnounceController {
    async createAnnounce({ request, auth, response }: HttpContext) {
        const user = await auth.authenticate()
        const requestData = request.body()
        const announce = new Announce()
        announce.merge({
        ...requestData,
        userId: user.id,
        })
        await announce.save()
        return response.created({
            announce,
        })
    }

    async getOneAnnounce({ params, response }: HttpContext) {
        try {
            const announce = await Announce.findOrFail(params.id)
            return response.ok({ 
                announce 
            })
        } catch (error) {
            return response.notFound({ 
                message: 'Announce not found' 
            })
        }
    }
    
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

    async updateAnnounce({ params, request, response }: HttpContext) {
        const announce = await Announce.findOrFail(params.id)
        const requestData = request.body()
        announce.merge(requestData)
        await announce.save()
        return response.ok({
            announce,
        })
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