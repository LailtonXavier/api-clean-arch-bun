import User from '../model/User';

export default interface UserRepository {
  userByEmail(email: string): Promise<User | null>
  createUser(user: User): Promise<User>
}