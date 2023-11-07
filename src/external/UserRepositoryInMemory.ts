import User from '../core/user/model/User';
import UserRepository from '../core/user/service/UserRepository';

export class UserRepositoryInMemory implements UserRepository {
  private readonly users: User[] = []

  async userByEmail(email: string): Promise<User | null> {
    const user = await this.users.find((user) => user.email === email)
    return user || null
  }
  
  async createUser(user: User): Promise<User> {
    const newUser = {...user, id: Math.random()}
    this.users.push(newUser)
    return newUser
  }

}