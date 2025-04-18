interface Props {
    content: string,
    author: string,
    date: Date
}

export default function StoryPost(props: Props) {
    return(
        <div className="border-solid border p-5">
            <h2><b>{props.author}</b></h2>
            <p>{props.content}</p>
            <p className="text-gray-400">Posted {props.date.toDateString()}</p>
        </div>
    )
}
