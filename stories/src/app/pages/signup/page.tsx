export default function SignUpPage() {

    return(
        <div className="grid items-start justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="grid items-center sm:items-start">
                <form className="border border-black bg-background">
                    <div className="grid grid-cols-[25%_72%] gap-3 p-4">
                        <div className=""><label>Username: </label></div>
                        <div className=""><input type="text" maxLength={45} id="usernameInput" required className="float-right bg-[#ccc] rounded-md w-64 p-1" /></div>
                        <div className=""><label>Password: </label></div>
                        <div className=""><input type="text" maxLength={200} id="passwordInput" className="float-right bg-[#ccc] rounded-md w-64 p-1" /></div>
                        <div className=""></div>
                        <div className=""><input type="submit" value="Submit" className="cursor-pointer float-right text-foreground hover:text-[#383838] dark:hover:text-[#7a7a7a] hover:bg-[#ccc] bg-background rounded-md p-2"/></div>
                    </div>
                </form>
            </main>
        </div>
    )
}