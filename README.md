# sequelize5-typescript
Backend sample implementation for PostgreSQL.
- [Sequelize (v5)](https://sequelize.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Node.js(Express)](https://expressjs.com/ja/)

## Installation
```
yarn install
```

## Initial Settings
1. Check and edit `config/config.json`.
   <pre>
   "development": {
     "username": "{your username}",
     "password": "{your password}",
     "database": "{your database name}",
     "host": "{your database host or 127.0.0.1}",
     ...
   },
   </pre>
1. Create database.
   ```
   yarn sequelize db:create
   ```
1. Create tables.
   ```
   yarn sequelize db:migrate
   ```

## Quick Start
```
yarn serve
```

## Usage
Request to `http://localhost:3000/{APIs}`.  
Use ex:
[Advanced REST client](https://chrome.google.com/webstore/detail/advanced-rest-client/hgmloofddffdnphfgcellkdfbfbjeloo/details).

## APIs
Check `index.ts`.
