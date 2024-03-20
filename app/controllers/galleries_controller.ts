import Gallery from '#models/gallery'
import { fileExistValidator, galleryValidator, testVal } from '#validators/gallery_validator'
import { cuid } from '@adonisjs/core/helpers'
import type { HttpContext } from '@adonisjs/core/http'
import app from '@adonisjs/core/services/app'
import db from '@adonisjs/lucid/services/db'

export default class GalleriesController {
    async getFiles({ params, response }: HttpContext) {
        const gallery = await Gallery.query().from('galleries').where('userId',params.id)

        return response.ok(gallery)
    }

    async addFileName({ auth, params, request, response }:HttpContext) {
        await request.validateUsing(galleryValidator)
        const user = await auth.authenticate()
        let payload = request.body()

        if (user.id !== +params.id) return response.status(403).json({message: "↑↑↓↓←←→→AB"})

        const isFirstUpload = await db.rawQuery(
            'select * from galleries where user_id = ? and cover = ?',
            [+params.id,true]
        )

        if (isFirstUpload.rowCount === 0) {
            payload['cover'] = true
        } 
        
        await Gallery.create(payload)

        return response.ok({
            message: 'Your file(s) has been uploaded'
        })
        
    }

    async test({params, request}:HttpContext) {
        const {file} = await request.validateUsing(testVal)
        
        await file.move(app.makePath(`public/gallery/${params.id}/`), {name: `${cuid()}.${file.extname}`})
        
        return request.file('file')
    }

    async updateFile({ params, request, response}: HttpContext) {
        await request.validateUsing(fileExistValidator)
        const file = await Gallery.findByOrFail('fileName', params.name)
        const oldCover = await Gallery.query().where('userId', params.id).andWhere('cover', true).firstOrFail()
        
        oldCover.cover === true ? oldCover.cover = !oldCover.cover : oldCover.cover
        await oldCover.save()

        file.cover = true
        await file.save()
        return response.ok({
            message: `${params.name} has been updated`
        })
        
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