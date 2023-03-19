import Link from "next/link";

export default function Experiences() {
    return (
        <div className=" min-h-screen font-bold bg-white py-5 px-7 md:px-[100px] text-black">
            <div className=" px-5 max-sm:max-w-72 max-w-fit">
                <h1 className=" py-4 text-2xl">
                    Previous Experiences
                </h1>
                <div className={" max-w-fit items-start m-auto"}>
                    <div className={" max-w-fit"}>
                        <h4 className="">
                            <Link href={"https://spnn.org/"} className={"italic text-blue-700 underline"}>
                                Saint Paul Neighborhood Network (SPNN)
                            </Link>
                            , St. Paul, Minnesota
                        </h4>
                        <h4 className={" font-normal"} >
                            September 2021 – Present
                        </h4>
                        <p className={"pt-1 font-medium"}>
                            Production and program assistant
                        </p>
                        <ul className=" pl-4 pt-2 font-normal list-disc">
                            <li>
                                Increased SPNN’s workshops attendance by 30%, creating graphics for Facebook, Instagram, and their website to advertise them
                            </li>
                            <li>
                                Created technical videos and documentation explaining the online process of media equipment reservations for SPNN members
                            </li>
                            <li>
                                Assisted members with media equipment needs and any questions related to Adobe Suite programs
                            </li>
                        </ul>
                    </div>
                    <div className={" pt-3 max-w-fit"}>
                        <h4 className="">
                            <Link href={"https://saykid.com/"} className={"italic text-blue-700 underline"}>
                                SayKid
                            </Link>
                            , Minneapolis, Minnesota
                        </h4>
                        <h4 className={" font-normal"} >
                            June 2021 – December 2021
                        </h4>
                        <p className={"pt-1 font-medium"}>
                            WordPress developer
                        </p>
                        <ul className=" pl-4 pt-2 font-normal list-disc">
                            <li>
                                Improved WordPress website load time from 3500ms to just under 700ms by updating functionality and plug-ins which resulted in a traffic increased of 20%
                            </li>
                            <li>
                                Implemented an ecommerce multistep checkout process to give users an easy and efficient experience when buying a ToyBot (SayKid’s product)
                            </li>
                            <li>
                                Wrote detailed documentation of new features added to the website to improve productivity of future interns
                            </li>
                        </ul>
                        <p className={"pt-1 font-medium"}>
                            Designer
                        </p>
                        <ul className=" pl-4 pt-2 font-normal list-disc">
                            <li>
                                Redesigned the ToyBot packaging as an interactive box where children can play and learn while playing with the ToyBot
                            </li>
                            <li>
                                Developed an Adobe XD prototype for their website to add e-commerce functionality, increase traffic, and improve user experience
                            </li>
                        </ul>
                    </div>
                    <div className={" pt-5 max-w-fit "}>
                        <h4 className=" ">
                            <Link href={"https://www.upturnships.org/"} className={"italic text-blue-700 underline"}>
                                UpTurnnShips
                            </Link>
                            , Minneapolis, Minnesota
                        </h4>
                        <h4 className={" font-normal"} >
                            June – August 2021
                        </h4>
                        <p className={"pt-1 font-medium"}>
                            Intern, UpTurnships
                        </p>
                        <ul className=" pl-4 pt-2 font-normal list-disc">
                            <li>
                                Gained 50+ hours of career and professional readiness training from professionals in various fields
                            </li>
                            <li>
                                Practiced career skills and learned about key strengths as an employee
                            </li>
                            <li>
                                Selected from a competitive pool of more than 100 students
                            </li>
                        </ul>
                    </div>
                    <div className={" pt-5 max-w-fit "}>
                        <h4 className="">
                            <Link href={"https://clues.org/"} className={"italic text-blue-700 underline"}>
                                Comunidades Latinas Unidas En Servicio (CLUES)
                            </Link>
                            , St. Paul, Minnesota
                        </h4>
                        <h4 className={" font-normal"} >
                            September – December 2020
                        </h4>
                        <p className={"pt-1 font-medium"}>
                            Civic engagement coordinator for Youth in Action (YA!)
                        </p>
                        <ul className=" pl-4 pt-2 font-normal list-disc">
                            <li>
                                Researched, prepared, and presented findings of civic engagement topics to 50 high school students who prepare for college and career
                            </li>
                            <li>
                                Developed different activities for students related to civic engagement, including rights and responsibilities, to learn and engage in their communities
                            </li>
                        </ul>
                    </div>
                    <div className={" pt-5 max-w-fit "}>
                        <h4 className="">
                            <Link href={"https://www.spps.org/expo"} className={"italic text-blue-700 underline"}>
                                EXPO School
                            </Link>
                            , St. Paul, Minnesota
                        </h4>
                        <h4 className={" font-normal"} >
                            September 2019 – March 2020
                        </h4>
                        <p className={"pt-1 font-medium" }>
                            Mathematics Teaching Assistant
                        </p>
                        <ul className=" pl-4 pt-2 font-normal list-disc">
                            <li>
                                Assisted 60 elementary-aged students with Math activities and Scratch coding activities
                            </li>
                            <li>
                                Prepared Kahoot Math activities for students to learn as they have fun
                            </li>
                        </ul>
                    </div>
                    <div className={"pt-5 max-w-fit"}>
                        <h4 className="">
                            Walmart, Bloomington, Minnesota
                        </h4>
                        <h4 className={" font-normal"} >
                            June – August 2019
                        </h4>
                        <p className={"pt-1 font-medium"}>
                            Customer Service Representative
                        </p>
                        <ul className=" pl-4 pt-2 font-normal list-disc">
                            <li>
                                Greeted customers, helped, and answered customer’s individuals’ questions, maintaining a positive attitude 
                            </li>
                            <li>
                                Registered sales on a cash register by scanning items and totaling customers' purchases
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}