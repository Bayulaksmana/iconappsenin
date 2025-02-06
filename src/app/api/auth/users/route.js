import executeQuery from "../../../../lib/db.js";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const db = await executeQuery.getConnection();
    const query = "select * from users";
    const [rows] = await db.execute(query);
    db.release();

    return NextResponse.json(rows);
  } catch (error) {
    return NextResponse.json(
      {
        error: "database not connect",
      },
      { status: 500 }
    );
  }
}
