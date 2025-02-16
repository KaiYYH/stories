import DisplayStory from "../../components/DisplayStory";

export default function Story() {
  return (
    <div className="grid items-start justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="grid items-center sm:items-start">
        <div className="items-center sm:flex-row">
          <DisplayStory
              name={"The Adventures of Greg the Shroom"}
              description={"A very interesting tale about the trials and woes of Greg."}
          />
        </div>
      </main>
    </div>
  );
}
