import type { HttpContext } from '@adonisjs/core/http'

export default class ProjectsController {
  async index({ inertia }: HttpContext) {
    return inertia.render('projects/index', {
      projects: [
        { id: 1, name: 'Project 1' },
        { id: 2, name: 'Project 2' },
        { id: 3, name: 'Project 3' },
      ],
    })
  }

  async post({ inertia, request, response }: HttpContext) {
    debugger
    const project = request.input('project')
    response.redirect().toRoute('projects.index')
  }
}
