1. yarn init
2. yarn add express cors
3. yarn add dotenv
4. yarn add -D nodemon
5. yarn add sequelize pg pg-hstore
6. yarn add -D sequelize-cli

==========================================================================================================
1. npx sequelize-cli init
2. npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
3. npx sequelize-cli db:migrate