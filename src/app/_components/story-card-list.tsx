import { StoryCollectionPreview, StoryEntryPreview } from "@/types/stories";
import Link from "next/link";
import React from "react";

interface StoryCardItemProps {
  story: StoryEntryPreview;
}

interface StoryCardListProps {
  stories: StoryCollectionPreview;
}

function StoryCardItem({ story }: StoryCardItemProps) {
  return (
    <li className="story-card-item scale-95 hover:scale-100 duration-200 max-w-2xl space-y-3 ring-3 rounded ring-white px-6 py-4 max-h-[16rem]">
      <article>
        <Link
          href={`/stories/${story.slug}`}
          aria-label={`Read story: ${story.title}`}
        >
          <h3 className="text-2xl font-bold">{story.title}</h3>
          <p className="line-clamp-5">{story.description}</p>
        </Link>
      </article>
    </li>
  );
}

function StoryCardList({ stories }: StoryCardListProps) {
  const entries = Object.values(stories);
  if (entries.length === 0) {
    return <p className="text-gray-400 italic">No stories available.</p>;
  }

  return (
    <ul className="story-card-list space-y-8 md:grid md:grid-cols-[1fr_1fr] md:auto-rows-fr md:gap-8 md:space-y-0">
      {Object.values(stories).map((story) => (
        <StoryCardItem key={`story-card-item-${story.id}`} story={story} />
      ))}
    </ul>
  );
}

export default StoryCardList;
