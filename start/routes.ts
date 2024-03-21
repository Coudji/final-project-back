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
const AdminController = () => import('#controllers/admin_controller')
const AuthController = () => import('#controllers/auth_controller')
const UserController = () => import('#controllers/user_controller')
const UserProfilesController = () => import('#controllers/user_profiles_controller')
const PracticesController = () => import('#controllers/practices_controller')
const AnnounceController = () => import('#controllers/announce_controller')
const GalleriesController = () => import('#controllers/galleries_controller')

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
        router.get('all', [UserController, 'getAllUsers'])
        router.get('all/full', [UserController, 'getAllFullUsers'])
        router.get(':id', [UserController, 'getOneUser'])
        router.get(':id/full', [UserController, 'getOneFullUser'])
        router.patch(':id', [UserController, 'updateOneUser'])
        router.delete(':id', [UserController, 'deleteOneUser'])
        router.patch(':id/credentials', [UserController, 'updateCredentials'])
        router.get(':id/profile', [UserProfilesController, 'getUserProfile'])
        router.post(':id/profile', [UserProfilesController, 'upsertUserProfile'])
        router.patch(':id/profile', [UserProfilesController, 'upsertUserProfile'])
        router.delete(':id/profile', [UserProfilesController, 'deleteUserProfile'])
        router.get(':id/announce', [AnnounceController, 'getOneAnnounce'])
        router.post(':id/announce', [AnnounceController, 'createAnnounce'])
        router.patch(':id/announce', [AnnounceController, 'updateAnnounce'])
        router.delete(':id/announce', [AnnounceController, 'deleteAnnounce'])
        router.get(':id/gallery', [GalleriesController, 'getUsergallery'])
        router.post(':id/gallery', [GalleriesController, 'uploadInUserGallery'])
        router.patch(':id/gallery/:name', [GalleriesController, 'updateFile'])
        router.delete(':id/gallery/:name', [GalleriesController, 'removeFile'])
      })
      .prefix('user')

      router.group(() => {
        router.patch('announce/:id', [AnnounceController, 'adminCheckAnnounce'])
        router.get('stats', [AdminController, 'statsCounter'])
      })
      .prefix('admin')

    router.get('practices', [PracticesController, 'getAllPractices'])
    router.get('profiles', [UserProfilesController, 'getAllUserProfile'])
    router.get('announces', [AnnounceController, 'getAllAnnounces'])
    
  })
  .prefix('api').use(middleware.auth())

router.group(()=>{
  router.get('gallery/:id/:fileName', [GalleriesController, 'getFile'])
}).prefix('uploads')

router.get('test',[UserController, 'filteredUser'])
