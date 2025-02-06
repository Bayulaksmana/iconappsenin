import executeQuery from "../../../lib/db.js";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const db = await executeQuery();
    const sql = "SELECT * From anggotas";
    const [query] = await db.createConnection(sql);
    await db.end();
    return NextResponse.json({ posts: query });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "database tidak terhubung",} , {status: 500});
  }
}
