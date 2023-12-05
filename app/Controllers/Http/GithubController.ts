import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Env from '@ioc:Adonis/Core/Env'
import axios from 'axios'

export default class GithubController {

  public async index({ request, response }: HttpContextContract) {
    const GITHUB_API: string = Env.get(`GITHUB_API`)
    const GITHUB_USER: string = Env.get(`GITHUB_USER`)
    const GITHUB_TOKEN: string = Env.get(`GITHUB_TOKEN`)

    const { limit = 10, username = 'adeniranjohn', page = 0 } = request.qs()

    const data = await axios.get(`${GITHUB_API}?q=user:${username}&page=${page}`, {
      responseType: 'json',
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
      params: {
        per_page: limit,
      },
    })

    return data.data.items.map(
      ({ name, full_name, url, html_url, created_at, updated_at, visibility }) => ({
        name,
        full_name,
        url,
        html_url,
        created_at,
        updated_at,
        visibility,
      })
    )
  }
}
