import { useState } from "react";
import { storyPageLink } from "../../constants";
import EditStoryModal from "./EditStoryModal";

interface Props {
    key: number,
    storyId: number,
    name: string,
    description: string,
    postCount: number,
    lastPost?: Date,
}

export default function StoryBox(props: Props) {
    let storyLink = storyPageLink(props.storyId);
    const [isModalOpen, setIsModalOpen] = useState(false);

    async function onSubmit(name: string, description: string) {
        await fetch(`https://localhost:7009/api/Stories/${props.storyId}`, {
            method: "PUT",
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
        }

    return (
        <div className="border-solid border border-foreground grid grid-rows-6 p-3 h-40">
            <div className="row-span-1 grid grid-cols-12">
                <div className="col-span-11"><h1 className="text-lg line-clamp-1 no-underline hover:underline"><a href={storyLink}>{props.name}</a></h1></div>
                <div className="col-span-1"><p><a className="hover:text-[#707070] dark:hover:[#707070]" href={storyLink}>&#8594;</a></p></div>
            </div>
            <div className="row-span-3">
                <p className="line-clamp-2">{props.description}</p>
            </div>
            <div className="row-span-2 grid grid-cols-12">
                <p className="text-gray-400 text-sm col-span-11">Post Count: {props.postCount}</p>
                <p className="text-gray-400 text-sm col-span-11">Last Post: {props.lastPost?.toDateString() ?? "No posts yet!"}</p>
                <div className="col-span-1">
                    <button className="hover:text-[#707070] dark:hover:[#707070]" 
                        onClick={() => {
                            setIsModalOpen(true);
                        }}
                        >
                        &#9998;
                    </button>

                    <EditStoryModal 
                        isModalOpen={isModalOpen}
                        onClose={() => {
                        setIsModalOpen(false);
                        }}
                        onSubmit={onSubmit}
                        name={props.name}
                        description={props.description}
                    />
                </div>
            </div>
        </div>
    )
}