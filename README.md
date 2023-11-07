
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
  - start from the inside out
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
    - /external/userRepositoryInMemory
  - now, let's register our use cases through controls 
    - index.ts import 

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

