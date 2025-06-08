"use client"
import NavBarLink from "./NavBarLink";
import { useSession, signOut } from "next-auth/react";
import Button from "./general/Button";

export default function NavBar() {
  const { data: session } = useSession();
  console.log(session);

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
      }
  ];

  if (!session) {
    items.push({
      page: "Sign Up",
      path: "/pages/signup",
    },
    {
      page: "Log In",
      path: "/pages/login"
    });
  }

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
            {session && <Button 
              text="Sign Out" 
              onClick={async () => {
                await signOut();
              }}>
            </Button>}
        </div>
    </div>
  );
}
