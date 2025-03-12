import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET
export async function GET(request: NextRequest){
    try {
        // get all posts from db
        const posts = await prisma.post.findMany({
            include: { user: true },
        });
        return NextResponse.json({ posts });
    } catch (error) {
        // handle errors
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 })
        }
        return NextResponse.json({ error: "An unknown error occured"}, { status: 500 });
    }
}

// POST
export async function POST(request: NextRequest){
    try {
        // parse json body
        const data = await request.json();
        const { title, content, userId, published, isPrivate } = data;

        // validate required fields
        if (!title || !content || !userId) {
            return NextResponse.json(
                { error: "Missing required fields: title, content, or userId" },
                { status: 400 }
            );
        }

        // create new post
        const post = await prisma.post.create({
            data: {
                title,
                content,
                userId,
                published: published ?? false, // defaults to false
                isPrivate: isPrivate ?? false, // defaults to false
            },
        });

        // return newly created post
        return NextResponse.json({ post });
    } catch (error) {
       // handle errors
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 })
        }
        return NextResponse.json({ error: "An unknown error occured"}, { status: 500 });
    }
}

// PATCH
export async function PATCH(request: NextRequest) {
    try {
        // parse the json
        const body = await request.json();
        const { id, title, content, published, isPrivate } = body;

        // validate that id is provided
        if (!id) {
            return NextResponse.json(
                { error: "Post id is required" },
                { status: 400 }
            );
        }

        // prepare an update object with provided fields
        const updateData: {
            title?: string;
            content?: string;
            published?: boolean;
            isPrivate?: boolean;
        } = {};

        if (title !== undefined) updateData.title = title;
        if (content !== undefined) updateData.content = content;
        if (published !== undefined) updateData.published = published;
        if (isPrivate !== undefined) updateData.isPrivate = isPrivate;

        // update the post in db
        const updatedPost = await prisma.post.update({
            where: { id },
            data: updateData,
        });

        return NextResponse.json({ post: updatedPost });
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 })
        }

        return NextResponse.json({ error: "An unknown error occured"}, { status: 500 })
    }
}

// DELETE
export async function DELETE(request: NextRequest) {
    try {
        // extract the id from the url query param
        const { searchParams } = new URL(request.url);
        const id = searchParams.get("id");

        if (!id) {
            return NextResponse.json({ error: "Post id is required" }, { status: 400 })
        }

        // delete the post from the db
        const deletedPost = await prisma.post.delete({
            where: { id },
        });

        return NextResponse.json({ post: deletedPost });
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 })
        }

        return NextResponse.json({ error: "An unknown error occured"}, { status: 500 })
    }
}