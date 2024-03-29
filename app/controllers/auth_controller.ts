import User from '#models/user'
import { loginValidator, registerValidator } from '#validators/auth_validator'
import type { HttpContext } from '@adonisjs/core/http'

export default class AuthController {
  async login({ request, response }: HttpContext) {
    const { email, password } = await request.validateUsing(loginValidator)

    const user = await User.verifyCredentials(email, password)
    const token = await User.accessTokens.create(user, ['test'], { name: 'test' })

    return response.ok({
      token: {
        value: token.value!.release(),
        expiration: token.expiresAt,
        isadmin: user.userType === 'admin' ? true : false,
      },
      ...user.serialize(),
    })
  }

  async register({ request, response }: HttpContext) {
    const payload = await request.validateUsing(registerValidator)
    const user = await User.create(payload)

    return response.created(user)
  }
}
