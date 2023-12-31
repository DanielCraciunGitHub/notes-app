import { NextResponse } from "next/server"

export async function POST() {
  console.log("test")

  return NextResponse.json({ data: "ok" })
}
