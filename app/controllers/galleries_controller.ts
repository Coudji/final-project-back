import Gallery from '#models/gallery'
import type { HttpContext } from '@adonisjs/core/http'

export default class GalleriesController {
    async getFiles({ params, response }: HttpContext) {
        const gallery = await Gallery.query().from('galleries').where('userId',params.id)

        return response.ok(gallery)
    }

    async addFileName({ auth, params, request, response }:HttpContext) {
        const user = await auth.authenticate()
        
        if (user.id === +params.id){
            await Gallery.create(request.body())

            return response.ok({
                message: 'Your file(s) has been uploaded'
            })
        }
    }

    async updateFile({ params, request }: HttpContext) {
        // await validator exist
        //const file = await Gallery.findByOrFail('fileName', params.name)
        const oldCover = await Gallery.query().where('userId', params.id).andWhere('cover', true).first()
        oldCover.cover = !oldCover?.cover
        
    }

    async removeFileName({ auth, params, response }: HttpContext) {
        const user = await auth.authenticate()

        if (user.id === +params.id || user.userType === 'admin') {
            const row = await Gallery.findByOrFail('fileName', params.name)
            row.delete()

            return response.ok({
                message: 'Your file(s) has been deleted'
            })
        }

    }
}