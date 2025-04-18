"use client"

import { useSearchParams } from "next/navigation";
import DisplayStory from "../../components/DisplayStory";
import { useEffect, useState } from "react";
import { Story } from "../../models/Story";

export default function StoryPage() {

  const [story, setStory] = useState<Story>();
  const searchParams = useSearchParams()
  const key = searchParams.get('id')
  
  useEffect(() => {
    const getStory = async () => {
        await fetch(`https://localhost:7009/api/Stories/${key}`)
        .then((response) => response.json())
        .then(data => {
        setStory(data);
        })
        .catch(error => console.log(error));
    }
    getStory();
  }, []);

  return (
    <div className="grid items-start justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="grid items-center sm:items-start">
        <div className="items-center sm:flex-row">
          {story && (
            <DisplayStory 
            name={story!.name}
            description={story?.description}
            storyId={story!.storyId}
            />
          )}
          
        </div>
      </main>
    </div>
  );
}