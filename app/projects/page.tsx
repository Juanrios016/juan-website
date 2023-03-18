import juanLogo from "../../public/logo-blue.png"
import Image from "next/image"
import chowgirls from "../../public/chowgirls.png"
import macmap from "../../public/mac-map.jpg"
import mario from "../../public/mario.jpg"

export default function Projects () {
    return (
        <div className=" min-h-screen bg-macblue text-white mb-5 py-5 px-7 md:px-16">
            <div className=" m-auto max-sm:max-w-72">
                <div className={"max-sm:text-sm m-auto"}>
                    <h1 className=" font-bold m-auto py-4 text-lg">
                        Academic Projects
                    </h1>

                    <div className={" pb-4"}>
                        <div className={"min-[769px]:flex min-[769px]:flex-row-reverse"}>
                            <Image src={mario} alt={"Super MArio Land game cover"} className={"min-[425px]:max-w-md m-auto min-[769px]:mr-0 justify-star"} />
                            <div className=" min-[425px]:w-auto min-[425px]:px-10" >
                                <h2 className=" font-semibold">
                                    Genetic Algorithms: AI learns how to play Seper Mario Land
                                </h2>
                                <h3>
                                    Class: Introduction to AI
                                </h3>
                                <h3>
                                    Status: In progress - Last update: February 2023
                                </h3>
                                <p className="pt-2 ">
                                    Super Mario World is a platform game that consist mainly on getting from point A to point B. The implementation of an AI agent to learn how to play this game incorporates Genetic Algorithms which are based on the ideas of natural selection and genetics. The goal of this project is that after N generations of size M, in generation N+1 and agent will be able to complete at least the first level of world 1. The tools needed are PyBoy, which is a GamBoy emulator developed in Python, and Python.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={"py-4 min-[425px]:px-10"}>
                        <div className={"min-[769px]:flex min-[769px]:flex-row  items-start"}>
                            <Image src={macmap} alt={"Mac Map logo"} className={"min-[425px]:max-w-md mx-auto min-[769px]:ml-0 justify-start"} />
                            <div className={" min-[425px]:w-auto min-[425px]:px-10"}>
                                <h2 className={" font-semibold"}>
                                    Mac-Map
                                </h2>
                                <h3>
                                    Class: Software Development
                                </h3>
                                <h3>
                                    Status: Last update - December 2021
                                </h3>
                                <p className="pt-2 ">
                                    The aim of this group project is to help Macalester College students find their corresponding classrooms for their different courses. The idea started with personal experiences in how much time we spent on finding a classroom every semester, specially if we have never taken a class at a building. This version is built mainly using HTML, CSS, and JavaScript.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={"py-4"}>
                        <div className={"min-[769px]:flex min-[769px]:flex-row-reverse"}>
                            <Image src={chowgirls} alt={"Chowgirls logo"} className={"min-[425px]:max-w-md m-auto min-[769px]:mt-0  "} />
                            <div className={" min-[425px]:w-auto min-[425px]:px-10"}>
                                <h2 className=" font-semibold">
                                    ChowGirls Data Analysis, Consulting Team
                                </h2>
                                <h3>
                                    Class: Designing Works and Careers
                                </h3>
                                <h3>
                                    Status: Summer 2021
                                </h3>
                                <p className="pt-2">
                                    During the Summer of 2021, we had the opportunity to collaborate with bussiiness around the Twin Cities in projects that could be done remotly. This was a grouped project where we accomplished the following
                                </p>
                                <ul className=" pl-4 pt-2 font-normal list-disc">
                                    <li>
                                        Compared ChowGirls kitchen’s data (April 2020 - April 202) using bar graphs to find specific areas for waste reduction
                                    </li>
                                    <li>
                                        Developed graphics that demonstrate ChowGirls' sustainable and green advertisement for their website and social media

                                    </li>
                                    <li>
                                        Contributed to the creation of an equation in R Studio to better track trash, recycling, and compost giving a better measure and understanding of where improvements can be made
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"max-sm:text-sm"}>
                    <h1 className=" font-bold text-lg py-4">
                        Additonal Projects
                    </h1>
                    <div className={"pb-4"}>
                        <div className={"min-[769px]:flex min-[769px]:flex-row min-[425px]:px-10"}>
                            <Image src={juanLogo} alt={"Juan's logo"} className={"min-[425px]:max-w-md p-4 min-[769px]:ml-0 bg-white"} />
                            <div className={" min-[425px]:w-auto min-[425px]:px-10 min-[425px]:ml-0 bg-green-200"}>
                                <h2 className=" font-semibold">
                                    Juan's Website
                                </h2>
                                <h3>
                                    Status: In progress - Last update: March 2023
                                </h3>
                                <p className="pt-2">
                                    This website has the intention of highlighting Juan, his background, and his skills. It is built implementing Next JS, a React framework.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}