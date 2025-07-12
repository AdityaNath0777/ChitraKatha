import Image from "next/image";
import StoryCardList from "./_components/story-card-list";
import { storiesService } from "@/lib/services/stories.service";

export default async function Home() {
  let stories;
  try {
    stories = await storiesService.getStoriesPreview();
  } catch (error) {
    console.error(
      `Failed to fetch all the stories:: ${
        error instanceof Error ? error.message : error
      }`
    );

    stories = {};
  }

  return (
    <div className="grid grid-rows[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-12 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] items-center sm:items-start w-full">
        <div className="flex gap-4 mb-4 w-full">
          <h1 className="text-6xl font-extrabold">ChitraKatha</h1>
          <Image
            className="object-contain"
            src={"/monkey_8-bit_og.jpg"}
            alt="chitrakatha logo"
            width={60}
            height={60}
          />
        </div>
        <h2 className="text-4xl font-bold w-full font-mono">
          Panchtantra Fables
        </h2>

        <div className="story-cards-container font-mono w-full">
          <StoryCardList stories={stories} />
        </div>
      </main>

      <footer className="row-start-2 flex gap-[24px] flex-wrap items-center justify-center">
        Made with childhood Nostalagia 😊 by <code>Aditya Mishra</code> while
        listening to banger songs 🎵
      </footer>
    </div>
  );
}
