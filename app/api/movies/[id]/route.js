import client from "@/libs/prismadb";
import { NextResponse } from "next/server";

export const GET = async (request, {params}) => {
    try {
        const { id } = params;
        
        const movie = await client.movie.findUnique({
            where: {
                id
            }
        });
        
        if(!movie) {
            return NextResponse.json({ status: 404 }, { message: "Movie Not Found" })
        }

        return NextResponse.json(movie);
    } catch (error) {
        return NextResponse.json({ status: 500 }, { message: "Error Getting Movie", error })
    }
}

export const PATCH = async (request, {params}) => {
    try {
        const body = await request.json();
        const { id } = params;
        const { title, description, release } = body;
        const actors = body.actors;
    
        const updateMovie = await client.movie.update({
            where: {
                id
            },

            data: {
                title,
                description,
                actors,
                release
              }
        });

        if(!updateMovie){
            return NextResponse.json({ status: 404 }, { message: "Movie Not Found" })
        }

        return NextResponse.json(updateMovie);
        
    } catch (error) {
        return NextResponse.json({ status: 500 }, { message: "Error Updating Movie", error })
    }
}

export const DELETE = async (request, {params}) => {
    try {
        const { id } = params;
        
        await client.movie.delete({
            where: {
                id
            }
        });

        return NextResponse.json({ status: 200 }, { message: "Movie Deleted" });
        
    } catch (error) {
        return NextResponse.json({ status: 500 }, { message: "Error Deleting Movie", error })
    }
}