import { getAllStories } from "@/lib/stories";

export async function GET() {
  try {
    const stories = getAllStories();
    return Response.json(stories);
  } catch (error) {
    console.error(
      `Failed to fetch all the stories:: ${
        error instanceof Error ? error.message : error
      }`
    );
  }
}
