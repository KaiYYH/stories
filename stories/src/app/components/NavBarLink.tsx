import Link from "next/link";

interface Props {
    pageName: string,
    path: string,
}

export default function NavBarLink(props: Props) {
    return (
        <div className="text-foreground hover:text-[#383838] dark:hover:text-[#7a7a7a]">
            <Link href={props.path}>{props.pageName}</Link>
        </div>
    )
}