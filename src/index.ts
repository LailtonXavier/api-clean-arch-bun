import { Elysia } from "elysia";
import { UserRepositoryInMemory } from './external/UserRepositoryInMemory';
import RegisterUser from './core/user/service/RegisterUser';
import { RegisterUserController } from './adapters/RegisterUserController';

const app = new Elysia()

// paths register
const userRepositoryInMemory = new UserRepositoryInMemory()
const registerUser = new RegisterUser(userRepositoryInMemory)
new RegisterUserController(app, registerUser)

app.get('/', () => "Hello my friend").listen(3000)
console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
