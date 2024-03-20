import type { HttpContext } from '@adonisjs/core/http'
import db from '@adonisjs/lucid/services/db'

export default class AdminController {

    async statsCounter({ response }:HttpContext) {
        const userCount = await db.rawQuery('select count(*) as total_users from users')
        const adminCount = await db.rawQuery('select count(*) as total_admins from users where user_type = ?',['admin'])
        return response.ok({
            adminCount: adminCount.rows[0].total_admins,
            userCount: userCount.rows[0].total_users
        })
    }
}