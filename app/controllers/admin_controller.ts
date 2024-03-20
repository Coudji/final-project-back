import type { HttpContext } from '@adonisjs/core/http'
import db from '@adonisjs/lucid/services/db'

export default class AdminController {
    async userCount({response}:HttpContext) {
        const userCount = await db.rawQuery('select count(*) as total_users from users')
        return response.ok({
            userCount: userCount.rows[0].total_users
        })
    }

    async adminCount({ response }:HttpContext) {
        const adminCount = await db.rawQuery('select count(*) as total_admins from users where user_type = ?',['admin'])
        return response.ok({
            adminCount: adminCount.rows[0].total_admins
        })
    }

    
}