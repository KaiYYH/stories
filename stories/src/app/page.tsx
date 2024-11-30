/* import StoryGrid from "./components/StoryGrid";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-start justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="grid row-start-2 items-center sm:items-start">
        <div className="items-center sm:flex-row">
          <div className="grid grid-cols-2 gap-4"></div>
            <div className="inline-grid"><h1 className="text-5xl">STORIES</h1></div>
            <div className="float-right inline-grid">
              <a
              className="float-right p-3 mb-5 rounded-full border border-solid border-transparent transition-colors bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              href=""
              target="_blank"
              rel="noopener noreferrer"
              >
                + Create Story
              </a>
            </div>
        </div>

        <StoryGrid />
      </main>
    </div>
  );
} */

"use client"

import { useState } from "react";
import { Modal } from "./components/CreateStoryModal";

export default function Home() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  return ( 
    <>

      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors" 
      onClick={() => {
        setIsModalOpen(true);
        }}
      >
        Open Modal
      </button>

      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
      >
        <p>Here is a modal</p>
      </Modal>
    </>
  );
}