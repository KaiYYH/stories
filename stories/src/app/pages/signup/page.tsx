"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignUp() {

    const router = useRouter();
    const [errorMessage, setErrorMessage] = useState("");

    async function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
        event.preventDefault()
        const form = event.currentTarget
        const formElements = form.elements as typeof form.elements & {
            usernameInput: {value: string}
            passwordInput: {value: string}
        }

        if (validatePassword(formElements.passwordInput.value)) {

            await fetch("https://localhost:7009/api/Users", {
                method: "POST",
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    Username: formElements.usernameInput.value,
                    Password: formElements.passwordInput.value,
                }),
            })
            .then(async response => {
                if (response.ok) {
                    router.push('/');
                }
                else {
                    await response.json().then(error => {
                        if (error.message == ErrorCode.UsernameTaken)
                        {
                            setErrorMessage("This username has already been taken. Please choose another.")
                        }
                        else 
                        {
                            setErrorMessage("You are being problematic :/ Please try again later.")
                        }
                    });
                }
            })
            .catch(e => {
                console.log(e);
            });
        }
    }

    function validatePassword(password: string) {
        let errorMsg = ""
        if (password.length < 8) {
            errorMsg += "Password must be at least 8 characters.\n"
        }
        if (password.replace(/[^a-z]/gi, '').length == 0) {
            errorMsg += "Password must contain a letter.\n"
        }
        if (password.toUpperCase() == password) {
            errorMsg += "Password must contain a lowercase letter.\n"
        }
        if (password.toLowerCase() == password) {
            errorMsg += "Password must contain an uppercase letter.\n"
        }
        if (!/\d/.test(password)) {
            errorMsg += "Password must contain a number.\n"
        }
        setErrorMessage(errorMsg);
        return errorMsg.length === 0;
    }

    return (
        <div className="grid items-start justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
          <main className="grid items-center sm:items-start">
            <div className="items-center sm:flex-row">
              <div className="float-right inline-grid">
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-[25%_72%] gap-3">
                        <div className=""><label>Username: </label></div>
                        <div className=""><input type="text" maxLength={45} id="usernameInput" required className="float-right bg-gray-200 rounded-md w-64 p-1" /></div>
                        <div className=""><label>Password: </label></div>
                        <div className=""><input type="password" maxLength={45} id="passwordInput" className="float-right bg-gray-200 rounded-md w-64 p-1" /></div>
                        <div className=""></div>
                        <div className=""><input type="submit" value="Submit" className="float-right p-3 rounded-full border border-solid border-transparent transition-colors bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"/></div>
                    </div>
                </form>
              </div>
            </div>
            {errorMessage && 
                <div className="text-red-600 text-sm mt-2 whitespace-pre-line">{errorMessage}</div>
            }
          </main>
        </div>
      );
}
