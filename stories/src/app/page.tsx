"use client"

import { useState } from "react";
import CreateStoryModal from "./components/CreateStoryModal";
import StoryGrid from "./components/StoryGrid";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-start justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="grid row-start-2 items-center sm:items-start">
        <div className="items-center sm:flex-row">
          <div className="grid grid-cols-2 gap-4"></div>
            <div className="inline-grid"><h1 className="text-5xl">STORIES</h1></div>
            <div className="float-right inline-grid">

              <button className="p-3 mb-5 rounded-full border border-solid border-transparent transition-colors bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5" 
                onClick={() => {
                setIsModalOpen(true);
                }}
              >
                + Create Story
              </button>

              <CreateStoryModal />
            </div>
        </div>
        <StoryGrid />
      </main>
    </div>
  );
}