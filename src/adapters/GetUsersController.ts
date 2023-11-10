import Elysia from 'elysia';
import GetUser from '../core/user/service/GetUsers';

export default class GetUsersController {
  constructor(
    readonly server: Elysia,
    readonly useCase: GetUser
  ) {
    server.get('/users', async () => {
      return await useCase.execute()
    })
  }
} 