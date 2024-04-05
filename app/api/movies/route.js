import client from "@/libs/prismadb";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    const body = await req.json();
    const { title, description } = body;
    
    const newMovie = await client.post.create({
      data: {
        title,
        description
      },
    });
    
    return NextResponse.json(newMovie);
  
  } catch (error) {
    return NextResponse.json({ message: "Error Creating Movie", error }, { status: 500 });
  }
};

export const GET = async () => {
  try {
    const movies = await client.post.findMany();

    return NextResponse.json(movies);
  
  } catch (error) {
    return NextResponse.json({ status: 500 }, { message: "Error getting posts", error });
  }
};
