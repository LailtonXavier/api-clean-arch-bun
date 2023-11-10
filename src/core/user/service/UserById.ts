import UseCase from '../../shared/UseCase';
import User from '../model/User';
import UserRepository from './UserRepository';

export default class UserById implements UseCase<number, User | null>{
  constructor( private readonly repository: UserRepository){}

  execute(id: number): Promise<User | null> {
    return this.repository.userById(id)
  }

}