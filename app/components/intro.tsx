import Link from "next/link"
import Image from "next/image"
import juanPic from "../../public/Juan.jpg";
import logo from "../../public/logo-white.png";


export default function Intro () {
    return (
        <div className={"min-h-fit bg-macblue text-white flex flex-row-reverse max-sm:flex-col py-5 px-7 md:px-16" }>
          <div className={" self-center md:w-1/2 sm:w-1/2"}>
            <Image src={juanPic} className={" h-auto border-white border-8 w-2/3 m-auto"} alt='Juan Rios Pic'/>
          </div>
          <div className={" text-center md:w-1/2 m-auto sm:w-1/2"}>
              <Image src={logo} className={"p-5 max-sm:w-2/3 w-2/3 m-auto"} alt={"Juan Rios logo"} priority/>
              <div className=" text-center p-1 text-xs pb-4 md:w-1/2 m-auto font-roboto_slab">
                  <p>Student at Macalester College (2023) with an expected degree in Computer Science and Studio Art.</p>
              </div>
              <Link className={`underline font-bold font-bebas_neue`} href={'/'}>LEARN MORE</Link>
          </div>
        </div>
    )
}
