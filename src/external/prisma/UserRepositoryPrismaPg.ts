import { PrismaClient } from '@prisma/client';
import User from '../../core/user/model/User';
import UserRepository from '../../core/user/service/UserRepository';

export default class UserRepositoryPrismaPg implements UserRepository {
  private prisma: PrismaClient

  constructor() {
    this.prisma = new PrismaClient()
  }

  async userById(id: number): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: {
        id
      }
    })

    return user || null
  }

  async getUser(): Promise<User[]> {
    return await this.prisma.user.findMany()
  }

  async userByEmail(email: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: {
        email
      }
    })  

    return user
  }

  async createUser(user: User): Promise<User> {
    const userCreate = await this.prisma.user.create({ data: user})

    return userCreate
  }
}