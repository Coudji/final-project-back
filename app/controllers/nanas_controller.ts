import type { HttpContext } from '@adonisjs/core/http'

export default class NanasController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {}

  /**
   * Handle form submission for the create action
   */
  async store() {}

  /**
   * Show individual record
   */
  async show() {}

  /**
   * Handle form submission for the edit action
   */
  async update() {}

  /**
   * Delete record
   */
  async destroy() {}
}
