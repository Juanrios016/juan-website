import Image from "next/image";
import hchs from "../public/hchs.jpg";
import macalester from "../public/macalester.jpg";
import saykid from "../public/saykid.jpg";
import spnn from "../public/spnn.jpg";
import clues from "../public/clues.jpg";
import Link from "next/link";
import juanPic from "../public/Juan.jpg";
import logo from "../public/logo-white.png";
import skillsData from "../json/data.json"
import { ReactNode } from "react";


export default function Home() {
  
  return (
    <main className={""}>
      <Intro />
      <About />
      <Skills/>
    </main>
  )
}

const Intro = () => {
    return (
        <div className={"min-h-fit bg-macblue text-white flex-row-reverse flex max-sm:flex-col py-5 px-7 md:px-16" }>
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

const About = () => {
  return (
      <div className={"justify-center text-black bg-white py-5 px-7 md:px-16"}>

          <div className={"max-sm:max-w-72 m-auto px-5 md:flex md:flex-row min-h-[500px]"}>
              <div className={"py-2 text-sm md:w-7/12 m-auto md:text-base"}>
                  <h1 className={" font-bold pb-2 text-lg"}>
                      About Juan
                  </h1>
                  <p className="py-1"> 
                      Juan is a first-generation college student who was born in Minneapolis, MN but raised in Morelos, Mexico. He is currently pursuing a degree in Computer Science at Macalester College, with an expected graduation in May, 2023. He aspires to work in the tech industry as a software engineer because of his passion for problem solving and the process it takes to find a possible solution. However, initially he did not intend to major in this field. It was not until his Sophomore year that he discovered this STEM career and decided to major on it.
                  </p>
                  <p className="py-1">
                      He is part of Macalester's Bonner Community Scholar, which is a four-year civic engagement program providing leadership programming, academic support, engagement opportunities and a social network. As a result, he has been able to intern at nonprofits such as CLUES and SPNN during the school year to give back to the community. Additionally, he had the opportunity to intern at SayKid (startup that has developed the world's 1st screen-less, play-based learning platform) as a WordPress Developer and designer during the Summer of 2021.
                  </p>
                  <p className="py-1">
                      All of these opportunities have led him to expand his professional and soft skills: communication, attention to detail, time management, organization, teamwork, critical thinking, creativity, and programming. In the future, he expects to bring all his knowledge and experience to a tech company.
                  </p>
              </div>

              <div className={" m-auto text-base font-bold py-2 text-center md:w-5/12 "}>  
                <div className=" md:w-10/12 m-auto">
                  <h3 className="py-3">
                      Education
                  </h3>
                  <div className={"space-x-4 m-auto max-sm:max-w-xs sm:max-w-sm md:flex md:flex-row" }>
                      <Link href={"https://www.hiawathaacademies.org/apps/pages/hchs"}>
                          <Image src={hchs} className={" "} quality={100} alt={"hiawatha academies high school logo"} />
                      </Link>
                      <Link href={"https://www.macalester.edu/"} className={""} >
                          <Image src={macalester} className={"mt-2"} quality={100} alt={"macalester college logo"}/>
                      </Link>
                  </div>                        
                </div> 

                <div className="mt-4 md:w-10/12 m-auto">
                  <h3 className="py-3">
                      Previous Oppurtunities
                  </h3>
                  <div className={" space-x-4 m-auto max-sm:max-w-xs sm:max-w-sm md:flex"}>
                      <div className=" flex space-x-4  max-sm:max-w-xs md:flex-row md:w-3/5">
                        <Link href={"https://saykid.com/"} className={""}>
                            <Image src={saykid} className={""} quality={100} alt={"saykid logo"}/>
                        </Link > 
                        <Link href={"https://spnn.org/"} className={""}>
                            <Image src={spnn} className={""} quality={100} alt={"saint paul neighnorhood netwoork"}/>
                        </Link> 
                      </div>
                      <Link href={"https://clues.org/"} className={""}>
                          <Image src={clues} className={"md:w-60"} quality={100} alt={"comunidades latinas unidas en servicio logo"}/>
                      </Link>  
                  </div>
                </div>                 
              </div>
          </div>           
      </div>
  )
}


const Skills = () => {
return (
  <div className="bg-macblue text-white place-self-center py-5 px-7 md:px-16">

    <h1 className=" max-sm:max-w-72 m-auto px-5 pt-4 font-bold text-lg ">Skills</h1>
    <div className={"md:flex  items-start text-base"}>
      <div className="  max-sm:max-w-72 m-auto md:w-1/3">
        <h1 className="font-bold text-center underline">
          Software
        </h1>
        <div className="flex flex-wrap text-center justify-evenly py-3 max-sm:text-sm">
          <div className="flex flex-col justify-center  py-2">
            <Image src={"/illustrator.png"} className={"self-center w-2/3 h-auto rounded-2xl"} quality={100} alt={""} width={120} height={120}/>
            <p className="font-bold">Illustrator</p>
            <p>Level: Advance</p>
          </div>
          <div className="flex flex-col justify-center py-2">
            <Image src={"/photoshop.png"} className={"self-center w-2/3 h-auto rounded-2xl"} quality={100} alt={""} width={120} height={120}/>
            <p className="font-bold">Photoshop</p>
            <p>Level: Intermidiate</p>
          </div>
          <div className="flex flex-col justify-center py-2">
            <Image src={"/adobexd.png"} className={"self-center w-2/3 h-auto rounded-2xl"} quality={100} alt={""} width={120} height={120}/>
            <p className="font-bold">Adobe XD</p>
            <p>Level: Advance</p>
          </div>
          <div className="flex flex-col justify-center py-2">
            <Image src={"/figma.png"} className={"self-center w-2/3 h-auto rounded-2xl"} quality={100} alt={""} width={120} height={120}/>
            <p className="font-bold">Figma</p>
            <p>Level: Advance</p>
          </div>
          <div className="flex flex-col justify-center py-2">
            <Image src={"/squarespace.png"} className={"self-center w-2/3 h-auto rounded-2xl"} quality={100} alt={""} width={120} height={120}/>
            <p className="font-bold">Squarespace</p>
            <p>Level: Intermidiate</p>
          </div>
          <div className="flex flex-col justify-center py-2">
            <Image src={"/wordpress.png"} className={"self-center w-2/3 h-auto rounded-2xl"} quality={100} alt={""} width={120} height={120}/>
            <p className="font-bold">WordPress</p>
            <p>Level: Advance</p>
          </div>
        </div>
      </div>

      <div className=" max-sm:max-w-72  m-auto md:w-1/3">
        <h1 className="font-bold text-center underline">
          Programming
        </h1>
        <div className="flex flex-wrap text-center justify-evenly py-3 max-sm:text-sm">
          <div className="flex flex-col justify-center  py-2">
            <Image src={"/python.png"} className={"self-center w-2/3 h-auto rounded-2xl"} quality={100} alt={""} width={120} height={120}/>
            <p className="font-bold">Python</p>
            <p>Level: Advance</p>
          </div>
          <div className="flex flex-col justify-center py-2">
            <Image src={"/html.png"} className={"self-center w-2/3 h-auto rounded-2xl"} quality={100} alt={""} width={120} height={120}/>
            <p className="font-bold">HTML</p>
            <p>Level: Intermidiate</p>
          </div>
          <div className="flex flex-col justify-center py-2">
            <Image src={"/tailwind.png"} className={"self-center w-2/3 h-auto rounded-2xl"} quality={100} alt={""} width={120} height={120}/>
            <p className="font-bold">Tailwind CSS</p>
            <p>Level: Beginner</p>
          </div>
          <div className="flex flex-col justify-center py-2">
            <Image src={"/javascript.png"} className={"self-center w-2/3 h-auto rounded-2xl"} quality={100} alt={""} width={120} height={120}/>
            <p className="font-bold">JavaScript</p>
            <p>Level: Intermidiate</p>
          </div>
          <div className="flex flex-col justify-center py-2">
            <Image src={"/nextjs.png"} className={"self-center w-2/3 h-auto rounded-2xl"} quality={100} alt={""} width={120} height={120}/>
            <p className="font-bold">Next.js</p>
            <p>Level: Beginner</p>
          </div>
          <div className="flex flex-col justify-center py-2">
            <Image src={"/java.png"} className={"self-center w-2/3 h-auto rounded-2xl"} quality={100} alt={""} width={120} height={120}/>
            <p className="font-bold">Java</p>
            <p>Level: Intermidiate</p>
          </div>
          
        </div>
      </div>
    </div>
  </div>
)
  
}













//------------------------------------------------------

const Skills2 = async () => {
  const { skills } = await import ('../json/data.json')
    const l: ReactNode[] = []
    Object.values(skills.programming).map( j => {
      console.log(j);
      // l.push(<IndividualSkill name={j.name} level={j.level} image={j.image}/>)
    })
  return (
    <div className=" flex">
      {l.map(home => home)}
    </div>
  )
}

const  ASkills = async () => {
  const { skills } = await import ('../json/data.json')
  const all = Object.values(skills).map( i => {
    Object.values(i).map( j => {
      console.log(j);
      //<IndividualSkill name={j.name} level={j.level} image={j.image}/>    
    })
  })  
}

