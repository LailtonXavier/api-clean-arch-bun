import { Elysia } from "elysia";
import { UserRepositoryInMemory } from './external/memory/UserRepositoryInMemory';
import RegisterUser from './core/user/service/RegisterUser';
import { RegisterUserController } from './adapters/RegisterUserController';
import UserRepositoryPrismaPg from './external/prisma/UserRepositoryPrismaPg';
import GetUsers from './core/user/service/GetUsers';
import GetUsersController from './adapters/GetUsersController';
import UserById from './core/user/service/UserById';
import UserByIdController from './adapters/UserByIdController';

const app = new Elysia()

// paths register

// Menory
// const userRepositoryInMemory = new UserRepositoryInMemory()
const userRepositoryInMemory = new UserRepositoryPrismaPg()

const registerUser = new RegisterUser(userRepositoryInMemory)
const getUser = new GetUsers(userRepositoryInMemory)
const userById = new UserById(userRepositoryInMemory)

new UserByIdController(app, userById)
new GetUsersController(app, getUser)
new RegisterUserController(app, registerUser)

app.get('/', () => "Hello my friend").listen(3000)
console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
