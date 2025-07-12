import Image from "next/image";

const stories = {
  "monkey-and-crocodile": {
    title: "Monkey and crocodile",
    id: "monkey-and-crocodile",
    description:
      " description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus maxime, neque placeat iste totam minus eum blanditiis nemo, tenetur earum.",
  },
  "clever-cat-and-2-dumb-monkies": {
    title: "Clever Cat and 2 dumb monkies",
    id: "clever-cat-and-2-dumb-monkies",
    description:
      "description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus maxime, neque placeat iste totam minus eum blanditiis nemo, tenetur earum.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus maxime, neque placeat iste totam minus eum blanditiis nemo, tenetur earum.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus maxime, neque placeat iste totam minus eum blanditiis nemo, tenetur earum.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus maxime, neque placeat iste totam minus eum blanditiis nemo, tenetur earum.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus maxime, neque placeat iste totam minus eum blanditiis nemo, tenetur earum.",
  },
  "clever-cat-and-3-dumb-monkies": {
    title: "Clever Cat and 2 dumb monkies",
    id: "clever-cat-and-3-dumb-monkies",
    description:
      "description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus maxime, neque placeat iste totam minus eum blanditiis nemo, tenetur earum.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus maxime, neque placeat iste totam minus eum blanditiis nemo, tenetur earum.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus maxime, neque placeat iste totam minus eum blanditiis nemo, tenetur earum.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus maxime, neque placeat iste totam minus eum blanditiis nemo, tenetur earum.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus maxime, neque placeat iste totam minus eum blanditiis nemo, tenetur earum.",
  },
  "clever-cat-and-4-dumb-monkies": {
    title: "Clever Cat and 2 dumb monkies",
    id: "clever-cat-and-4-dumb-monkies",
    description:
      "description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus maxime, neque placeat iste totam minus eum blanditiis nemo, tenetur earum.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus maxime, neque placeat iste totam minus eum blanditiis nemo, tenetur earum.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus maxime, neque placeat iste totam minus eum blanditiis nemo, tenetur earum.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus maxime, neque placeat iste totam minus eum blanditiis nemo, tenetur earum.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus maxime, neque placeat iste totam minus eum blanditiis nemo, tenetur earum.",
  },
  "clever-cat-and-5-dumb-monkies": {
    title: "Clever Cat and 2 dumb monkies",
    id: "clever-cat-and-5-dumb-monkies",
    description:
      "description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus maxime, neque placeat iste totam minus eum blanditiis nemo, tenetur earum.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus maxime, neque placeat iste totam minus eum blanditiis nemo, tenetur earum.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus maxime, neque placeat iste totam minus eum blanditiis nemo, tenetur earum.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus maxime, neque placeat iste totam minus eum blanditiis nemo, tenetur earum.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus maxime, neque placeat iste totam minus eum blanditiis nemo, tenetur earum.",
  },
  "clever-cat-and-6-dumb-monkies": {
    title: "Clever Cat and 2 dumb monkies",
    id: "clever-cat-and-6-dumb-monkies",
    description:
      "description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus maxime, neque placeat iste totam minus eum blanditiis nemo, tenetur earum.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus maxime, neque placeat iste totam minus eum blanditiis nemo, tenetur earum.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus maxime, neque placeat iste totam minus eum blanditiis nemo, tenetur earum.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus maxime, neque placeat iste totam minus eum blanditiis nemo, tenetur earum.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus maxime, neque placeat iste totam minus eum blanditiis nemo, tenetur earum.",
  },
};

export default function Home() {
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
          <ul className="story-card-list space-y-8 md:grid md:grid-cols-[1fr_1fr] md:auto-rows-fr md:gap-8 md:space-y-0">
            {Object.values(stories).map((story) => (
              <li
                key={story.id}
                className="story-card-item max-w-2xl space-y-3 ring-3 rounded ring-white px-6 py-4 max-h-[16rem]"
              >
                <h3 className="text-2xl font-bold">{story.title}</h3>
                <p className="description-truncate">{story.description}</p>
              </li>
            ))}
          </ul>
          {/* <ul className="story-card-list space-y-8 md:grid md:grid-cols-[1fr_1fr] md:auto-rows-fr md:gap-8 md:space-y-0">
            <li className="story-card-item max-w-2xl space-y-3 ring-3 rounded ring-white px-6 py-4 max-h-[16rem]">
              <h3 className="text-2xl font-bold">Story Title</h3>
              <p>
                description Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Distinctio voluptatibus maxime, neque placeat iste totam
                minus eum blanditiis nemo, tenetur earum.
              </p>
            </li>
            <li className="story-card-item max-w-2xl space-y-3 ring-3 rounded ring-white px-6 py-4 max-h-[16rem]">
              <h3 className="text-2xl font-bold">Story Title</h3>
              <p>
                description Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Distinctio voluptatibus maxime, neque placeat iste totam
                minus eum blanditiis nemo, tenetur earum.
              </p>
            </li>
            <li className="story-card-item max-w-2xl space-y-3 ring-3 rounded ring-white px-6 py-4 max-h-[16rem]">
              <h3 className="text-2xl font-bold">Story Title</h3>
              <p>
                description Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Distinctio voluptatibus maxime, neque placeat iste totam
                minus eum blanditiis nemo, tenetur earum.
              </p>
            </li>
            <li className="story-card-item max-w-2xl space-y-3 ring-3 rounded ring-white px-6 py-4 max-h-[16rem]">
              <h3 className="text-2xl font-bold">Story Title</h3>
              <p className="description-truncate">
                description Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Distinctio voluptatibus maxime, neque placeat iste totam
                minus eum blanditiis nemo, tenetur earum. Lorem ipsum dolor sit
                amet consectetur, adipisicing elit. Nam, illo? Lorem ipsum dolor
                sit amet consectetur, adipisicing elit. Nam, illo? Lorem ipsum
                dolor sit amet consectetur, adipisicing elit. Nam, illo? Lorem
                ipsum dolor sit amet consectetur, adipisicing elit. Nam, illo?
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam,
                illo? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Nam, illo? Lorem ipsum dolor sit amet consectetur, adipisicing
                elit. Nam, illo?
              </p>
            </li>
          </ul> */}
        </div>
      </main>

      <footer className="row-start-2 flex gap-[24px] flex-wrap items-center justify-center">
        Made with childhood Nostalagia 😊 by <code>Aditya Mishra</code> while
        listening to banger songs 🎵
      </footer>
    </div>
  );
}
