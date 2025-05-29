interface Props{
    text: string,
    onClick: () => void,
}

export default function Button(props: Props) {
    return(
        <button className="p-3 mb-5 rounded-full border border-solid border-transparent transition-colors bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            onClick={props.onClick}
        >
            {props.text}
        </button>
    )
}