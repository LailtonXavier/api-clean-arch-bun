import User from '../model/User';

export default interface UserRepository {
  getUser(): Promise<User[]>
  userByEmail(email: string): Promise<User | null>
  userById(id: number): Promise<User | null>
  createUser(user: User): Promise<User>
}