import mysql from "mysql2/promise";

const executeQuery = async (query, data) => {
  try {
    const db = await mysql.createConnection({
      host: process.env.DATABASE_HOST,
      port: process.env.DATABASE_PORT,
      database: process.env.DATABASE_NAME,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
    });
    const [result] = await db.execute(query, data);
    await db.end();
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    return new Error(error);
  }
};

export default executeQuery;
