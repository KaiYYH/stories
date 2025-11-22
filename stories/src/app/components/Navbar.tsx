"use client"

import NavBarLink from "./NavBarLink";
import { useSession, signOut } from "next-auth/react";
import Button from "./general/Button";
import { Dropdown } from "./general/Dropdown";

export default function NavBar() {
  const { data: session } = useSession();

  const items = [
      {
        page: "Home",
        path: "/",
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
  else {
    items.push({
      page: "Story",
      path: "/pages/story?id=1",
    },
    {
      page: "My Stories",
      path: "/my-stories",
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
            {session && <Dropdown
              title="Dropdown"
            >
              <NavBarLink
                pageName="Account"
                path="/pages/"
              />
              <NavBarLink
                pageName="Sign Out"
                path="/pages/"
                onClick={async () => {
                  await signOut();
                }}
              />
            </Dropdown>}
        </div>
    </div>
  );
}
