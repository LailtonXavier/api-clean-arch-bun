import UseCase from '../../shared/UseCase';
import User from '../model/User';
import UserRepository from './UserRepository';

export default class GetUsers implements UseCase<void, User[]> {
  constructor(readonly repository: UserRepository) {}
  
  execute(): Promise<User[]> {
    const users = this.repository.getUser()
    return users
  }
}