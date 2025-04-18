interface Props {
    storyId: number,
    name: string,
    description: string,
    postCount: number,
    lastPost?: Date,
}

export default function StoryBox(props: Props) {

    return (
        <div className="border-solid border border-foreground grid grid-rows-6 p-3 h-40">
            <div className="row-span-1 grid grid-cols-12">
                <div className="col-span-11"><h1 className="text-lg line-clamp-1 no-underline hover:underline"><a href={`/pages/story?id=${props.storyId}`}>{props.name}</a></h1></div>
                <div className="col-span-1"><p><a className="hover:text-[#707070] dark:hover:[#707070]" href={`/pages/story?id=${props.storyId}`}>&#8594;</a></p></div>
            </div>
            <div className="row-span-3">
                <p className="line-clamp-2">{props.description}</p>
            </div>
            <div className="row-span-2">
                <p className="text-gray-400 text-sm">Post Count: {props.postCount}</p>
                <p className="text-gray-400 text-sm">Last Post: {props.lastPost?.toDateString() ?? "No posts yet!"}</p>
            </div>
        </div>
    )
}