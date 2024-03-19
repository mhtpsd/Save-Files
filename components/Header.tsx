import { SignInButton, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { ThemeToggler } from "./ThemeToggler"
import logo from "../public/images/savefiles.png"

function Header() {
  return (
    <header className="flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
            <div className="w-fit">
                <Image 
                    src={logo}
                    alt="logo"
                    className="invert"
                    height={50}
                    width={50}
                />
            </div>
            <h1 className="font-bold text-xl">SaveFiles</h1>
        </Link>
        <div className="px-5 flex space-x-2 items-center">
            <ThemeToggler />

            <UserButton afterSignOutUrl="/" />
            
            <SignedOut>
                <SignInButton afterSignInUrl="/dashboard" mode="modal" />
            </SignedOut>
        </div>
    </header>
  )
}

export default Header