
To start the development server run:
```bash
  bun run dev
```

## tecnologies
- bun ([https://bun.sh/])
  - curl -fsSL https://bun.sh/install | bash
- elysia
  - bun create elysia name-project
- prisma
  - bun install -d prisma

## map
  - install: 
    - bun 
    - elysia 
    - prisma
  - create paste
    - src/core
    - src/adapters
    - src/external
  - file in main
    - config with this plugin: material icon theme
    - .vscode/settings.json
  -  ------------- start from the inside out -------------
  - code
    - /shared
    - /user
      - /model (entity)
      - /service (use case)
  - create interface
    - /model/User.ts
  - create use case in shared
    - /shared/UseCase.ts
  - create entity
    - /service/RegisterUser.ts
    - /service/UserRepository.ts
      - the methods to use on the user
  - implement the full user method full
    - /shared/UseCase.ts
  - let's implement the field adapters (controllers)
  - create controller
    - /adapters/RegisterUserController
  - create user in memory
    - /external/memory/userRepositoryInMemory
  - now, let's register our use cases through controls 
    - index.ts import 
  - now let's install Prisma
    - bunx prisma init --datasource-provider postgresql
    - (bunx = seria o npm x do bun)
  - /external/prisma/schema.prisma
    - create User
    - generate
      - bunx prisma generate --schema=./src/external/prisma/schema.prisma
    - migrate
      - bunx prisma migrate dev --name init --schema=./src/external/prisma/schema.prisma
    - create RepoUserPrisma
      - /external/prisma/UserRepositoryPrismaPg.ts
  - now let's change the index.js main file
    - const userRepositoryInMemory = new UserRepositoryInMemory() --- t0 --- 'repository prisma'
  - create getUser
    - service ---- implement UseCase
    - service userRepository add method
    - update UserRepositoryMemory
    - update UserRepositoryPrismaPg
    - agora por fim colocar no index.ts main
    - =----
    - create path
      - adapters 
        - GetUsersController
        - Presenter (verde) vc poderia tratar o dado que o front vai ver
          - a instancia do useCase iria estanciar esse presenter que ficaria dentro da pasta PRESENTERS
          - pode chamar o PRESENTER dentro do controller tambem
          - pode utilizar no service getUser tambem na hora de instanciar o caso de uso

## clean architecture
  - Frameworks & drivers
    - [UI - Web - DB - Devices - Interfaces Externas]
      - external
  - Adapters
    - [Controllers - Presenters - Gateways]
      - adapters
  - Aplication business rules
    - [use case]
      - core
  - Domain business rules
    - [Entities]
      - core

