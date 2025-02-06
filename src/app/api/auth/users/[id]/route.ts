"use client"

import { NextRequest, NextResponse } from "next/server";
import executeQuery from "../../../../../lib/db.js";
import { data } from "react-router-dom";

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug; // user id

  try {
    const db = await executeQuery.getConnection();
    const query = "select * from users where id = ?";
    const [rows] = await db.execute(query);

    return NextResponse.json(rows);
  } catch (error) {
    return NextResponse.json(
      {
        error: error,
      },
      { status: 500 }
    );
  }
}
