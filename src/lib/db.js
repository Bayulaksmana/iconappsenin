import mysql from "mysql2/promise"

let connection;
export const createConnetion = async () => {
  if (!connection){
    connection = await mysql.createConnection({
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    database: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
  })
}
return connection;
}