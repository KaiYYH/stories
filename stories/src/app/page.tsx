"use client"

import { useEffect, useState } from "react";
import CreateStoryModal from "./components/CreateStoryModal";
import StoryGrid from "./components/StoryGrid";
import { Story } from "./models/Story";
import Button from "./components/general/Button";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [stories, setStories] = useState<Story[]>([]);
  const [numStory, setNumStory] = useState(0);
  
  useEffect(() => {
      const getStories = async () => {
          await fetch('https://localhost:7009/api/Stories')
          .then((response) => response.json())
          .then(data => {
              setStories(data);
          })
          .catch(error => console.log(error));
      }
      getStories()
  }, [numStory]);

  async function onSubmit(name: string, description: string) {
    await fetch("https://localhost:7009/api/Stories", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            Name: name,
            Description: description,
        }),
    })
    .then(response => response.json())
    .catch(e => {console.log(e)});

    setIsModalOpen(false)
    setNumStory(numStory + 1)
    }

  return (
    <div className="grid items-start justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="grid items-center sm:items-start">
        <div className="items-center sm:flex-row">
          <div className="float-right inline-grid">

            <Button
              text="+ Create Story"
              onClick={() => {
                setIsModalOpen(true);
              }}
            />

            <CreateStoryModal 
              isModalOpen={isModalOpen}
              onClose={() => {
                setIsModalOpen(false);
              } }
              onSubmit={onSubmit} 
              modalTitle={"Create Story"}
            />
          </div>
        </div>
        <StoryGrid stories={stories} />
      </main>
    </div>
  );
}