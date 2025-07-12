import { getAllStories } from "@/lib/stories";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const stories = getAllStories();
    return NextResponse.json(stories);
  } catch (error) {
    console.error(
      `Failed to fetch all the stories:: ${
        error instanceof Error ? error.message : error
      }`
    );
  }
}
