import StoryViewer from "@/components/story-viewer";
import { storiesService } from "@/lib/services/stories.service";
import React from "react";

async function StoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  let story;

  try {
    story = await storiesService.getStoryBySlug(slug);
  } catch (error) {
    console.error(
      `Failed to fetch story with slug: ${slug} :: ${
        error instanceof Error ? error.message : JSON.stringify(error)
      }`
    );

    story = null;
  }

  if (!story) {
    return <div className="">Story not found</div>;
  }

  return (
    <div className="flex flex-col gap-10 h-screen overflow-hidden font-mono">
      <div className="flex flex-col gap-6 justify-around md:flex-row p-4">
        <h1 className="text-4xl font-bold">{story.title}</h1>
        <StoryViewer story={story} />
      </div>
      <footer className="row-start-2 flex gap-[24px] flex-wrap items-center justify-center">
        Made with childhood Nostalagia 😊 by <code>Aditya Mishra</code> while
        listening to banger songs 🎵
      </footer>
    </div>
  );
}

export default StoryPage;
