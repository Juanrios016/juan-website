import Image from "next/image";
import Link from "next/link";
import logo from '../public/logo-white.png';


export default function NavBar() {
    return (
        
        <nav className=" bg-macblue flex flex-col p-3 text-center mb-px md:flex-row">
            <Image className=" max-w-fit h-10 self-center md:h-12" src={logo} alt={"mac map logo"}/>
            <ul className="flex self-center text-white  md:ml-auto">
                <li className=" p-2 md:px-5">
                    <Link href={"/"}>Home</Link>
                </li>
                <li className=" p-2 md:px-5">
                    <Link href='/experiences'>Experience</Link>
                </li>
                <li className=" p-2 md:px-5">
                    <Link href='/projects'>Academic Projects</Link>
                </li>
            </ul>
        </nav>
    
    )
}