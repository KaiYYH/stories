'use client'

import { useEffect } from "react";
import StoryPost from "./StoryPost";
import { useState } from "react";
import { Post } from "../models/Post";
import EditStoryModal from "./EditStoryModal";
import { Tooltip } from "flowbite-react";

interface Props {
    name: string,
    description: string,
    storyId: number
}

export default function DisplayStory(props: Props) {
    const [posts, setPosts] = useState<Post[]>([]);
    const [numPosts, setNumPosts] = useState(0);
    
    useEffect(() => {
        const getPosts = async () => {
            // get posts
            let posts = await fetch(`https://localhost:7009/api/Stories/${props.storyId}/Posts`)
            .then((response) => response.json())
            .then(data => {
                return data;
            })
            .catch(error => console.log(error));

            // get authors
            let ids = posts.map((post: Post) => post.userId)
            let authors = await fetch("https://localhost:7009/api/Users/multiget", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ids: ids
                }),
            })
            .then(response => response.json())
            .then(data => {
                return data.users;
            })
            .catch(e => {console.log(e)});

            // map authors to posts
            for (let post of posts) {
                post.authorName = authors[post.userId].username
            }

            setPosts(posts);
        }
        getPosts();
      }, [numPosts]);

    function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = event.currentTarget
        const formElements = form.elements as typeof form.elements & {
            content: {value: string}
            author: {value:string}
        }
        createPost(formElements.content.value, formElements.author.value);
    }

    async function createPost(content: string, author: string) {
        let date = new Date();
        await fetch("https://localhost:7009/api/Posts", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                content: content,
                author: author,
                date: date,
                storyId: props.storyId
            }),
        })
        .then(response => response.json())
        .catch(e => {console.log(e)});

        setNumPosts(numPosts + 1);
    }

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        const setDetails = () => {
            setName(props.name);
            setDescription(props.description)
        }
        setDetails();
    }, [props.name, props.description])

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
        .then(() => {
            setName(name);
            setDescription(description);
        })
        .catch(e => {console.log(e)});
    
        setIsModalOpen(false)
    }

    return(
        <div>
            <div>
                <div>
                    <div className="inline-block"><b>{name} </b></div>
                    <div className="inline-block"><Tooltip content="Edit Story" placement="right">
                        <button className="hover:text-[#707070] dark:hover:[#707070]" 
                            onClick={() => {
                                setIsModalOpen(true);
                            }}
                        >
                            &#9998;
                        </button>
                    </Tooltip></div>

                    <EditStoryModal 
                        isModalOpen={isModalOpen}
                        onClose={() => {
                            setIsModalOpen(false);
                        }}
                        onSubmit={onSubmit}
                        name={name}
                        description={description}
                    /> 
                </div> 
                <p>{description}</p>
            </div>
            <div className="grid grid-cols-1 gap-4 mt-5">
                {posts && posts.map((item) => (
                    <StoryPost
                        content={item.content}
                        author={item.authorName}
                        date={new Date(item.date)}
                        key={item.postId}
                    />
                ))}
                <form className="border p-3" onSubmit={handleSubmit} key={numPosts}>
                    <label className="mr-3">Name: </label>
                    <input type="text" maxLength={30} id="author" required className="bg-inherit rounded-md w-64 p-1 border mb-3" />
                    <textarea className="p-3 w-full bg-inherit border border-solid" name="content" placeholder="Write your post here..."/>
                    <button className="rounded-full border border-solid border-transparent transition-colors bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc] p-2 float-right" type="submit">Post</button>
                </form>
            </div>
        </div>
    )
}
