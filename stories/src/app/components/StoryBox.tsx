interface Props {
    name: string,
    description: string,
    postCount: number,
    lastPost?: Date,
}

export default function StoryBox(props: Props) {
    return (
        <div className="border-solid border border-foreground grid grid-rows-6 p-3 h-40">
            <div className="row-span-1">
                <h1 className="text-lg line-clamp-1">{props.name}</h1>
            </div>
            <div className="row-span-3">
                <p className="line-clamp-2">{props.description}</p>
            </div>
            <div className="row-span-2">
                <p className="text-gray-400 text-sm">Post Count: {props.postCount}</p>
                {props.lastPost && (<p className="text-gray-400 text-sm">Last Post: {props.lastPost.toDateString()}</p>)}
            </div>
        </div>
    )
}