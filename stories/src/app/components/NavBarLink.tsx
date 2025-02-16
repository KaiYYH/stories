import Link from "next/link";

interface Props {
    page: string,
    path: string,
}

export default function NavBarLink(props: Props) {
    return (
        <div className="border">
            <Link href={props.path}>{props.page}</Link>
        </div>
    )
}