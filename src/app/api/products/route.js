import { NextResponse } from "next/server";
import { cookies } from "next/headers";

// this is the get api function in nextjs
export async function GET(req) {
  // headers
  const requestHeaders = new Headers(req.headers);
  //   console.log(requestHeaders);

  // URL QUERY params
  const { searchParams } = new URL(req.url);
  const getParamsValue = searchParams.get("key"); // here pass the search params key
  //   console.log(getParamsValue);

  // get cookies
  const cookies1 = req.cookies;
  const cookies2 = cookies();
  console.log(cookies2);

  return NextResponse.json({
    success: true,
    message: "get products successfully",
  });
}

// this is the post api function in nextjs
export const POST = async (req) => {
  // request body --> get request body data
  const res = await req.json();
  //   console.log("response data", res);

  return NextResponse.json(
    {
      success: true,
      message: "successfull post request",
    },
    { status: 201 } // this way status code can be changed
  );
};
