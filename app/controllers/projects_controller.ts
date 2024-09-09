import type { HttpContext } from '@adonisjs/core/http'

export default class ProjectsController {
  async index({ inertia }: HttpContext) {
    return inertia.render('projects/index')
  }

  async create({ inertia }: HttpContext) {
    return inertia.render('projects/create')
  }

  async store({}: HttpContext) {
    // Create a new project
  }

  async show({ inertia }: HttpContext) {
    return inertia.render('projects/show')
  }

  async edit({ inertia }: HttpContext) {
    return inertia.render('projects/edit')
  }

  async update({}: HttpContext) {
    // Update the project
  }

  async destroy({}: HttpContext) {
    // Delete the project
  }
}
