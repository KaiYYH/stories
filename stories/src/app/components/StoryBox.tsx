interface Props {
    name: string,
    description: string,
    postCount: number,
    lastPost: Date,
}

export default function StoryBox(props: Props) {
    return (
        <div className="border-solid border border-white p-3">
            <h1 className="text-lg">{props.name}</h1>
            <p>{props.description}</p>
            <p className="text-gray-400 text-sm">Post Count: {props.postCount}</p>
            <p className="text-gray-400 text-sm">Last Post: {props.lastPost.toDateString()}</p>
        </div>
    )
}