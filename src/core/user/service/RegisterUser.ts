import UseCase from '../../shared/UseCase';
import UserRepository from './UserRepository';

type RequestUserData = {
  name: string
  email: string
  password: string
}

export default class RegisterUser implements UseCase<RequestUserData, void> {
  constructor(private readonly userRepository: UserRepository) {}
  async execute(datas: RequestUserData): Promise<void> {
    const { name, email } = datas

    const hasUser = await this.userRepository.userByEmail(email)
    if (hasUser) {
      throw new Error(`User ${name} already exists`)
    }

    await this.userRepository.createUser(datas)
  }
}
