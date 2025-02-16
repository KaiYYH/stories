import NavBarLink from "./NavBarLink";

export default function NavBar() {

    const items = [
        {
          page: "Home",
          path: "/",
        },
        {
          page: "List",
          path: "/pages/list",
        },
        {
          page: "Story",
          path: "/pages/story",
        },
      ];

  return (
    <div className="container bg-white mt-3 shadow sm:flex-row font-[family-name:var(--font-geist-sans)] grid grid-cols-7">
        <div>
            <a href="/">
                <span className="text-5xl pl-3">STORIES</span>
            </a>
        </div>
        <div className="grid grid-cols-3 justify-items-center items-center text-black hover:text-[#383838] dark:hover:text-[#7a7a7a]">
            {items.map((item) => (
                <NavBarLink
                    page={item.page}
                    path={item.path}
                />
            ))}
        </div>
    </div>
  );
}