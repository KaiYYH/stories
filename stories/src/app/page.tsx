"use client"

import { useState } from "react";
import { Modal } from "./components/CreateStoryModal";
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

              {/* BUTTON AND MODAL STARTS */}
              <button className="p-3 mb-5 rounded-full border border-solid border-transparent transition-colors bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5" 
                onClick={() => {
                setIsModalOpen(true);
                }}
              >
                + Create Story
              </button>

              <Modal
                isOpen={isModalOpen}
                onClose={() => {
                  setIsModalOpen(false);
                }}
              >
                <div>
                  <form>
                    <div className="grid grid-cols-[25%_72%] gap-3">
                      <div className=""><label />Name: </div>
                      <div className=""><input type="text" className=" float-right bg-[#ccc] rounded-md w-64 p-1" /></div>
                      <div className=""><label />Description: </div>
                      <div className=""><textarea className="bg-[#ccc] rounded-md w-64 float-right p-1" /></div>
                      <div className=""></div>
                      <div className=""><input type="submit" className="cursor-pointer float-right text-foreground hover:text-[#383838] dark:hover:text-[#7a7a7a] bg-background rounded-md p-2"/></div>
                    </div>
                    
                  </form>
                </div>
              </Modal>
              {/* BUTTON AND MODAL ENDS */}

            </div>
        </div>

        <StoryGrid />
      </main>
    </div>
  );
}