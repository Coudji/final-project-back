/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'
const NeuneusController = () => import('#controllers/neuneus_controller')
const AuthController = () => import('#controllers/auth_controller')
const UserController = () => import('#controllers/user_controller')

router
  .group(() => {
    router.post('register', [AuthController, 'register'])
    router.post('login', [AuthController, 'login'])
  })
  .prefix('auth')

router
  .group(() => {
    router
      .get('me', async ({ auth, response }) => {
        const user = await auth.authenticate()
        return response.ok({
          ...user.serialize(),
          ' e': user.userType,
          'isadmin': user.userType === 'admin' ? true : false,
        })
      })
      .use(middleware.auth())

    router
      .get('isadmin', async ({ auth, response }) => {
        const user = await auth.authenticate()
        if (user.userType === 'admin') {
          return response.ok({ isAdmin: true })
        }
        return response.ok({ isAdmin: false })
      })
      .use(middleware.auth())

    router.resource('neuneu', NeuneusController).use(['index', 'update'], middleware.auth())
    //router.resource('user', UserController).use(['index', 'update'], middleware.auth())
    router
      .group(() => {
        router.get(':id', [UserController, 'getOneUser'])
        router.get(':id/full', [UserController, 'getOneFullUser'])
        router.patch(':id', [UserController, 'updateOneUser'])
        router.delete(':id', [UserController, 'destroy'])
      })
      .prefix('user')
      .use(middleware.auth())
  })
  .prefix('api')
