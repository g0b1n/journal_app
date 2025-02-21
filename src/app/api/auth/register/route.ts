import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
    const { email, phoneNum, username, password } = await request.json()

    // basic validation
    if (!email || !password || !username) {
        return NextResponse.json({ error: "All fields are required"}, { status: 400 })
    }

    // check if the user already exist
    const existingUser = await prisma.user.findUnique({
        where: { email },
    })

    if (existingUser) {
        return NextResponse.json({ error: "User with this email or username already exist"}, { status: 400 })
    }

    // create new user
    try {
        const newUser = await prisma.user.create({
            data: {
                email,
                phoneNum,
                username,
                password, 
            }
        });

        return NextResponse.json({ message: "Registration successfull", user: newUser}, { status: 201 });

    } catch (error) {
        // check if error is an obj and log it 
        // if (error instanceof Error) {
        //     console.error("Error during registration:", error.message, error.stack)
        // } else {
        //     console.error("Unknown error during registration:", error)
        // }
        return NextResponse.json({ error: "Error Registrating User"}, { status: 500 })
    }
}