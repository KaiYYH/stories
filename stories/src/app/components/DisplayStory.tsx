import StoryPost from "./StoryPost";
import Form from "next/form";

interface Props {
    name: string,
    description: string
}

export default function DisplayStory(props: Props) {
    const posts = [
        {
            content: "Once upon a time there was a mushroom named Greg. Greg's life ambition was to one day cut every single blade of grass on his lawn to the exact same height down to the millimeter. Every day, he practiced his measuring skills and worked out his scissor muscles so he could perfect this craft.",
            author: "Hailey",
            date: new Date("11/19/24")
        },
        {
            content: "Unfortunately for Greg, his neighbor, Persephone, also had exactly one life ambition. Her life ambition was to make Greg sad. So every night, when Greg was asleep, she went out to his lawn and cut exactly one blade lower than all of the others. Sometimes, she even swapped out his scissors with slightly bigger scissors so he would think his finger muscles had gotten smaller.",
            author: "Kai",
            date: new Date("11/20/24")
        }
    ];
    return(
        <div>
            <div>
                <h1><b>{props.name}</b></h1>
                <p>{props.description}</p>
            </div>
            <div className="grid grid-cols-1 gap-4 mt-5">
                {posts.map((item) => (
                    <StoryPost
                        content={item.content}
                        author={item.author}
                        date={item.date}
                    />
                ))}
                <Form className="border p-3" action={"/post"}>
                    <textarea className="p-3 w-full bg-inherit" name="content" placeholder="Write your post here..."/>
                    <button className="rounded-full border border-solid border-transparent transition-colors bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc] p-2 float-right" type="submit">Post</button>
                </Form>
            </div>
        </div>
    )
}