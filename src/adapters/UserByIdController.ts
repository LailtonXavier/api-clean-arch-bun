import Elysia from 'elysia';
import UserById from '../core/user/service/UserById';

export default class UserByIdController {
  constructor(
    readonly server: Elysia,
    readonly useCase: UserById
  ) {
    server.get('/users/:id', async ({ params }) => {
      return await useCase.execute(+params.id)
    })
  }

}