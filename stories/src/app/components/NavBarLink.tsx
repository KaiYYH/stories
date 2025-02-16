import Link from "next/link";

interface Props {
    page: string,
    path: string,
}

export default function NavBarLink(props: Props) {
    return (
        <div className="border border-gray-500 text-foreground hover:text-[#383838] dark:hover:text-[#7a7a7a]">
            <Link href={props.path}>{props.page}</Link>
        </div>
    )
}