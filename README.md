# TypeScript ApolloGraphQL API

Sample GraphQL API project using TypeScript, MySQL, TypeORM


## Getting Started

Make sure you have the following values populated in `.env` file and make sure you build the project before running the migrations

```
TYPEORM_CONNECTION = mysql
TYPEORM_HOST = localhost
TYPEORM_USERNAME = test
TYPEORM_PASSWORD = test
TYPEORM_DATABASE = test
TYPEORM_PORT = 3306
TYPEORM_SYNCHRONIZE = true
TYPEORM_LOGGING = true
TYPEORM_SYNCHRONIZE = false
TYPEORM_LOGGING = true
TYPEORM_ENTITIES = dist/db/entities/**.js
TYPEORM_MIGRATIONS = dist/db/migrations/**.js
TYPEORM_SUBSCRIBERS = dist/db/subscribers/**.js
TYPEORM_MIGRATIONS_DIR = src/db/migrations
TYPEORM_ENTITIES_DIR = src/db/entities
TYPEORM_SUBSCRIBERS_DIR = src/db/subscribers
```