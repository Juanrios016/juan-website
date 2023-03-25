"use client"
import Image from "next/image";
import Link from "next/link";
import logo from '../../public/logo-white.png';
import { usePathname } from 'next/navigation';

export default function NavBar() {
    const path = usePathname()
   
    return (  
        <nav className=" bg-macblue flex flex-col p-3 text-center mb-px md:flex-row md:px-10">
            <Image className=" max-w-fit h-10 self-center md:h-12" src={logo} alt={"mac map logo"}/>
            <ul className={"flex self-center text-white  md:ml-auto"}>
                <li className={ path === "/" ? " underline p-2 md:px-5 hover:underline" : "p-2 md:px-5 hover:underline"}>
                    <Link href={"/"}>Home</Link>
                </li>
                <li className={ path === "/experiences" ? " underline p-2 md:px-5 hover:underline" : "p-2 md:px-5 hover:underline"}>
                    <Link href='/experiences'>Experience</Link>
                </li>
                <li className={ path === "/projects" ? " underline p-2 md:px-5 hover:underline" : "p-2 md:px-5 hover:underline"}>
                    <Link href='/projects'>Projects</Link>
                </li>
            </ul>
        </nav>
    )
}