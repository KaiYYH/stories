interface Props {
    storyName: string,
    storyDescription: string,
    postCount: number,
    lastPost: Date,
}

export default function StoryBox(props: Props) {
    return (
        <div className="border-solid border border-white p-3">
            <h1 className="text-lg">{props.storyName}</h1>
            <p>{props.storyDescription}</p>
            <p className="text-gray-400 text-sm">Post Count: {props.postCount}</p>
            <p className="text-gray-400 text-sm">Last Post: {props.lastPost.toDateString()}</p>
        </div>
    )
}