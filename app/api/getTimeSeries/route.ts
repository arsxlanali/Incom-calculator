import { NextResponse } from "next/server";
// To handle a GET request to /api
export async function GET(request: Request) {
  try {
    const response = await fetch(`${process.env.BASE_URL}&start_date=2012-05-01&end_date=2012-05-25&symbols=USD,PKR&base=USD`);
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    //const data = await response.json();
    return NextResponse.json({ message: response }, { status: 200 });
    // Do something with the fetched data
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: error }, { status: 400 });

  }
}
