import type { HttpContext } from '@adonisjs/core/http'
import db from '@adonisjs/lucid/services/db'

export default class AdminController {

    async statsCounter({ response }:HttpContext) {
        const userCount = await db.rawQuery('select count(*) as total_users from users')
        const adminCount = await db.rawQuery('select count(*) as total_admins from users where user_type = ?',['admin'])
        const manCount = await db.query().from('user_profiles').count('*').where('genre','homme')
        const womenCount = await db.query().from('user_profiles').count('*').where('genre','femme')
        return response.ok({
            userCount: userCount.rows[0].total_users,
            adminCount: adminCount.rows[0].total_admins,
            manCount: manCount[0].count,
            womenCount: womenCount[0].count,
        })
    }
}