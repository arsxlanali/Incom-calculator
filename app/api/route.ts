import { NextResponse } from "next/server";
// To handle a GET request to /api
export async function POST(request: Request) {
  // Do whatever you want
  return NextResponse.json({ message: "Hello World" }, { status: 200 });
}
