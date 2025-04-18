'use client'
 
import { useSearchParams } from 'next/navigation'
import { useEffect } from "react";
import StoryPost from "./StoryPost";
import { useState } from "react";
import { Post } from "../models/Post";

interface Props {
    name: string,
    description: string,
    storyId: number
}

export default function DisplayStory(props: Props) {
    const [posts, setPosts] = useState<Post[]>([]);
    const [numPosts, setNumPosts] = useState(0);

    /* const searchParams = useSearchParams()
    const storyId = searchParams.get('id') */
    
    useEffect(() => {
        const getPosts = async () => {
            await fetch(`https://localhost:7009/api/Stories/${props.storyId}/Posts`)
            .then((response) => response.json())
            .then(data => {
            setPosts(data);
            })
            .catch(error => console.log(error));
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

    return(
        <div>
            <div>
                <h1><b>{props.name}</b></h1>
                <p>{props.description}</p>
            </div>
            <div className="grid grid-cols-1 gap-4 mt-5">
                {posts && posts.map((item) => (
                    <StoryPost
                        content={item.content}
                        author={item.author}
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
