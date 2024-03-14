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
const AuthController = () => import('#controllers/auth_controller')
const UserController = () => import('#controllers/user_controller')
const PracticesController = () => import('#controllers/practices_controller')
const AnnounceController = () => import('#controllers/announce_controller')

router
  .group(() => {
    router.post('register', [AuthController, 'register'])
    router.post('login', [AuthController, 'login'])
  })
  .prefix('auth')

router
  .group(() => {
    router
      .group(() => {
        router.get(':id', [UserController, 'getOneUser'])
        router.get(':id/full', [UserController, 'getOneFullUser'])
        router.patch(':id', [UserController, 'updateOneUser'])
        router.delete(':id', [UserController, 'destroy'])
      })
      .prefix('user')
      .use(middleware.auth())

    router.get('practices', [PracticesController, 'getAllPractices']).use(middleware.auth())
    router.get('announces', [AnnounceController, 'getAllAnnounces']).use(middleware.auth())
  })
  .prefix('api')
