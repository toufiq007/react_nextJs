import { NextResponse } from "next/server";

export const GET = async (req) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
    headers: {
      "Context-Type": "application/json",
    },
  });
  const postsData = await response.json();

  return NextResponse.json({
    success: true,
    message: "successfully get posts data",
    data: postsData,
  });
};
