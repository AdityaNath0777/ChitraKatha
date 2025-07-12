import { getStoryBySlug } from "@/lib/stories";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  let slug = "";

  try {
    const awaitedParams = await params;
    slug = awaitedParams.slug;

    const story = getStoryBySlug(slug);
    return NextResponse.json(story);
  } catch (error) {
    console.error(
      `Failed to fetch story by slug: ${slug || "unknown"} :: ${
        error instanceof Error ? error.message : error
      }`
    );
  }
}
