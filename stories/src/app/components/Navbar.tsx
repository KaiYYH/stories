import NavBarLink from "./NavBarLink";

export default function NavBar() {

    const items = [
        {
          page: "Home",
          path: "/",
        },
        {
          page: "Story",
          path: "/pages/story?id=1",
        },
        {
          page: "My Stories",
          path: "/my-stories",
        },
        {
          page: "Sign Up",
          path: "/pages/signup",
        },
      ];

  return (
    <div className="container bg-background mt-3 shadow sm:flex-row font-[family-name:var(--font-geist-sans)] grid grid-cols-3">
        <div>
            <a href="/">
                <span className="text-5xl pl-3 text-foreground">STORIES</span>
            </a>
        </div>
        <div></div>
        <div className="grid grid-flow-col float-right justify-items-center items-center">
            {items.map((item) => (
                <NavBarLink
                    pageName={item.page}
                    path={item.path}
                    key={item.page}
                />
            ))}
        </div>
    </div>
  );
}
