import DisplayStory from "../components/DisplayStory";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-start justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="grid row-start-2 items-center sm:items-start">
        <div className="items-center sm:flex-row">
          <div className="grid grid-cols-2 gap-4"></div>
            <div className="inline-grid"><h1 className="text-5xl">STORIES</h1></div>
        </div>

        <DisplayStory
            name={"The Adventures of Greg the Shroom"}
            description={"A very interesting tale about the trials and woes of Greg."}
        />
      </main>
    </div>
  );
}
