import Link from "next/link";
import Image from "next/image";
import logo from '../public/logo-white.png';

export default function Footer()  {
    return (
        <footer className={" mt-px bg-macblue flex flex-col pt-3 pb-3 text-white border-t"}>
            <Image src={logo} alt='Juan Rios' className="max-w-fit h-10 self-center"/>
            <ul className={"flex self-center "}>
                <li className=" p-2"><Link  legacyBehavior href='/' passHref><a>About</a></Link></li>
                <li className=" p-2"><Link  legacyBehavior href='/experiences' passHref><a>Experience</a></Link></li>
                <li className=" p-2"><Link  legacyBehavior href='/projects' passHref><a>Academic Projects</a></Link></li>
            </ul>
            <p className={"self-center"}>&copy; 2022 Juan Rios</p>
        </footer>
    )
}



