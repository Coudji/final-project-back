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
const NeuneusController = () => import ('#controllers/neuneus_controller')
const AuthController = () => import('#controllers/auth_controller')

router.get('/', async () => {
  return {
    hello: 'world',
  }
})



router.group(() => {

  router.group(()=>{
    
    router.post('register', [AuthController, 'register'])
    router.post('login', [AuthController, 'login'])
    router.get('me', async({auth,response}) => {
      const user = await auth.authenticate()
      return response.ok(user)
    }).use(middleware.auth())

    router.get('isadmin', async({auth,response}) => {
      const user = await auth.authenticate()
      if(user.userType==='admin'){
        return response.ok({"isAdmin":true})
      }
      return response.ok({"isAdmin":false})
    }).use(middleware.auth())
  }).prefix('user')
  
  router.resource('neuneu', NeuneusController).use(['index','update'],middleware.auth())
}).prefix('api')
