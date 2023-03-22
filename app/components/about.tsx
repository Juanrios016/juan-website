import Link from "next/link";
import Image from "next/image";
import hchs from "../../public/hchs.jpg";
import macalester from "../../public/macalester.jpg";
import saykid from "../../public/saykid.jpg";
import spnn from "../../public/spnn.jpg";
import clues from "../../public/clues.jpg";


export default function  About() {
    return (
        <div className={"justify-center text-black bg-white py-5 px-7 md:px-[100px]"}>
  
            <div className={"max-sm:max-w-72 m-auto px-5 md:flex md:flex-row min-h-[500px] "}>
                <div className={"py-2 md:w-7/12 m-auto"}>
                    <h1 className={" font-bold pb-2 text-3xl"}>
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
  
                <div className={" m-auto font-bold py-2 text-center md:w-5/12 "}>  
                  <div className=" md:w-10/12 m-auto">
                    <h3 className="py-3 text-xl">
                        Education
                    </h3>
                    <div className={"space-x-4 m-auto max-sm:max-w-xs sm:max-w-sm md:flex md:flex-col" }>
                        <Link href={"https://www.hiawathaacademies.org/apps/pages/hchs"}>
                            <Image src={hchs} className={" "} quality={100} alt={"hiawatha academies high school logo"} />
                        </Link>
                        <Link href={"https://www.macalester.edu/"} className={""} >
                            <Image src={macalester} className={"mt-2"} quality={100} alt={"macalester college logo"}/>
                        </Link>
                    </div>                        
                  </div> 
  
                  <div className="mt-4 md:w-10/12 m-auto">
                    <h3 className="py-3 text-xl">
                        Previous Oppurtunities
                    </h3>
                    <div className={" space-x-4 m-auto max-sm:max-w-xs sm:max-w-sm md:flex md:flex-col"}>
                        <div className=" flex space-x-4 m-auto max-sm:max-w-xs md:flex-row md:w-3/5">
                          <Link href={"https://saykid.com/"} className={""}>
                              <Image src={saykid} className={""} quality={100} alt={"saykid logo"}/>
                          </Link > 
                          <Link href={"https://spnn.org/"} className={""}>
                              <Image src={spnn} className={""} quality={100} alt={"saint paul neighnorhood netwoork"}/>
                          </Link> 
                        </div>
                        <Link href={"https://clues.org/"} className={""}>
                            <Image src={clues} className={"md:w-60 m-auto"} quality={100} alt={"comunidades latinas unidas en servicio logo"}/>
                        </Link>  
                    </div>
                  </div>                 
                </div>
            </div>           
        </div>
    )
  }