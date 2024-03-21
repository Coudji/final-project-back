import Gallery from '#models/gallery'
import { fileExistValidator, testVal } from '#validators/gallery_validator'
import { cuid } from '@adonisjs/core/helpers'
import type { HttpContext } from '@adonisjs/core/http'
import app from '@adonisjs/core/services/app'
import db from '@adonisjs/lucid/services/db'
import { normalize, sep } from 'path'
import * as fs from 'fs'

export default class GalleriesController {
    async getUsergallery({ params, response }: HttpContext) {
        const gallery = await Gallery.query().from('galleries').where('userId',params.id)

        return response.ok(gallery)
    }

    async getFile({ params, response}:HttpContext) {
        const filePath = `${params.id}${sep}${params.fileName}`
        
        const normalizedPath = normalize(filePath)
        
        const PATH_TRAVERSAL_REGEX = /(?:^|[\\/])\.\.(?:[\\/]|$)/
        
        if (PATH_TRAVERSAL_REGEX.test(normalizedPath)) {
          return response.badRequest('Malformed path')
        }
      
        const absolutePath = app.makePath('public\\gallery', normalizedPath)
        
        return response.download(absolutePath)
    }

    async uploadInUserGallery({ auth, params, request, response }:HttpContext) {
        const {file} = await request.validateUsing(testVal)
        const user = await auth.authenticate()
        type galleryPayload={
            cover?:boolean
            url?:string
            userId?:number
        }
        let payload:galleryPayload ={}
        if (user.id !== +params.id) return response.status(403).json({message: "↑↑↓↓←←→→AB"})
        
        await file.move(app.makePath(`public/gallery/${params.id}/`), {name: `${cuid()}.${file.extname}`})

        const isFirstUpload = await db.rawQuery(
            'select count(*) from galleries where user_id = ?',
            [+params.id]
        )
            
        if (+isFirstUpload.rows[0].count === 0) {
            payload.cover = true
        }
        payload.userId = user.id
        payload.url = `http://localhost:3333/uploads/gallery/${params.id}/${file.fileName}`
        await Gallery.create(payload)
        
        return request.file('file')
    }

    async updateFile({ auth, params, request, response}: HttpContext) {
        await request.validateUsing(fileExistValidator)
        const user = await auth.authenticate()
        if (user.id !== +params.id && user.userType !== 'admin') return response.status(403).json({message: 'Forbidden access'})
        const file = await Gallery.query().from('galleries').whereLike('file_path',`%${params.name}`).firstOrFail()
        const oldCover = await Gallery.query().where('userId', params.id).andWhere('cover', true).firstOrFail()
        oldCover.cover === true ? oldCover.cover = !oldCover.cover : oldCover.cover
        await oldCover.save()

        file.cover = true
        await file.save()
        return response.ok({
            message: `${params.name} has been updated`
        })
    }

    async removeFile({ auth, params, response }: HttpContext) {
        const user = await auth.authenticate()
        if (user.id !== +params.id && user.userType !== 'admin') return response.status(403).json({message: 'Forbidden access'})
        const row = await Gallery.query().from('galleries').whereLike('file_path',`%${params.name}`).firstOrFail()
        row.delete()
        const file = app.makePath(`public\\gallery\\${params.id}\\${params.name}`)
        
        fs.unlinkSync(file)

        return response.ok({
            message: 'Your file(s) has been deleted'
        })
    }
}