import { NextResponse } from "next/server";
import axios from "axios";

// To handle a GET request to /api
export async function GET(request: Request) {
  try {
    const response = await axios.get(`${process.env.BASE_URL}&start_date=2012-05-01&end_date=2012-05-25&symbols=USD,PKR&base=USD`);
    
    if (response.status !== 200) {
      throw new Error('Network response was not ok');
    }
    
    //const data = response.data; // If you want to work with the response data

    return NextResponse.json({ message: response.data }, { status: 200 });
    // Do something with the fetched data
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: error }, { status: 400 });
  }
}
