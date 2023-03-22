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
                        Juan, a first-generation college student, was born in Minneapolis, MN but raised in Morelos, Mexico. He is currently studying Computer Science at Macalester College and expects to graduate in May 2023. Juan's passion for problem-solving and the process of finding solutions led him to aspire to work in the tech industry as a software engineer. Surprisingly, he did not initially plan to major in this field. It was not until his sophomore year that he discovered his interest in STEM careers and ultimately decided to pursue a major in Computer Science.
                    </p>
                    <p className="py-1">
                        As a participant in Macalester's Bonner Community Scholar program, he has had access to a four-year civic engagement program that offers leadership programming, academic support, engagement opportunities, and a social network. Through this program, he has been able to intern at nonprofits such as CLUES and SPNN during the school year to give back to the community. In addition, during the summer of 2021, he had the chance to intern at SayKid, a startup that has developed the world's first screen-less, play-based learning platform, where he worked as a WordPress Developer and designer.
                    </p>
                    <p className="py-1">
                        Through these experiences, he has  been able to develop both professional and soft skills, including communication, attention to detail, time management, organization, teamwork, critical thinking, creativity, and programming. With the acquisition of these skills, he plans to use his knowledge and experience to contribute to a tech company in the future.
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