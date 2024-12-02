import { NextResponse } from "next/server";

export const GET = async (req, context) => {
  // context: {params:{id:"1"}}
  console.log(context);
  return NextResponse.json({
    success: true,
    message: "data get successfully",
  });
};
