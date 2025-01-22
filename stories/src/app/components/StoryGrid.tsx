import StoryBox from "./StoryBox";
import React, { useEffect, useState } from "react";

type Story = {
    storyId: number,
    name: string,
    description: string,
    postCount: number,
    lastPost?: Date
}

export default function StoryGrid() {
    const [stories, setStories] = useState<Story[]>([]);

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
    }, []);

    return(
        <div className="grid grid-cols-4 gap-4">
            {stories.map((item) => (
                <StoryBox 
                    key={item.storyId}
                    name={item.name}
                    description={item.description}
                    postCount={item.postCount} 
                    lastPost={item.lastPost ? new Date(item.lastPost) : undefined}                
                />
            ))}
        </div>
    )
}
