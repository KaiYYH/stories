import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, auth, signIn, signOut } = NextAuth({
    providers: [
        Credentials({
            credentials: {
                username: {},
                password: {},
            },
            authorize: async (credentials) => {
                console.log("authorizing");

                const user = await fetch("https://localhost:7009/api/Users/login", {
                    method: "POST",
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username: credentials.username,
                        password: credentials.password
                    }),
                })
                .then((response) => {
                    if (!response.body) {
                        console.log('login failed');
                        return null;
                    }
                    return response.json();
                });

                if (user) {
                    const userInfo = {
                        id: user.userId, 
                        name: user.username, 
                    }
                    return userInfo;
                }
                else {
                    return null;
                }
            },
        })
    ],
    callbacks: {
        async session( {session, token} ) {
            session.user.id = token.sub ?? "";
            return session;
        },
    }
})