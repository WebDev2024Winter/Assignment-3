import client from "@/libs/prismadb";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    const body = await req.json();
    const { title, description, release } = body;
    const actors = body.actors;
    
    const newMovie = await client.movie.create({
      data: {
        title,
        description,
        actors,
        release
      },
    });
    
    return NextResponse.json(newMovie);
  
  } catch (error) {
    return NextResponse.json({ message: "Error Creating Movie", error }, { status: 500 });
  }
};

export const GET = async () => {
  try {
    const movies = await client.movie.findMany();

    return NextResponse.json(movies);
  
  } catch (error) {
    return NextResponse.json({ status: 500 }, { message: "Error getting posts", error });
  }
};
