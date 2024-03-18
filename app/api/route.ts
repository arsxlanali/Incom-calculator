import { NextResponse } from "next/server";
// To handle a GET request to /api
export async function POST(request: Request) {
  try {
    const response = await fetch('https://api.exchangeratesapi.io/v1/latest?access_key=tJjxZRSJh8puMeLo&base=USD');
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    const data = await response.json();
    console.log(data);
    return NextResponse.json({ message: data }, { status: 200 });
    // Do something with the fetched data
  } catch (error) {
    console.error('There was a problem with your fetch operation:', error);
    return NextResponse.json({ message: error }, { status: 400 });

  }
}
