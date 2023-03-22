import { NextResponse } from "next/server"
import data from "../../../json/data.json"

export async function GET() {
    return NextResponse.json(data)
}