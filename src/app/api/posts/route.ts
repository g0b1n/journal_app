import { NextResponse } from "next/server"

export async function GET(request: Request) {
    const res = await fetch(''{
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return new Response('GET Post')
}

export async function POST(request: Request){
    return new Response('New Post')
}