import Link from "next/link";
import {experiences} from "../../json/data.json"

export default async function Experiences() {
    
    const allExperiences = experiences.map((exp) => (
        <div key={exp.id.toString()} className={" pt-3 max-w-fit"}>
            <h4 className=""> 
                <Link href={exp.link} className={"italic text-blue-700 underline"}>
                    {exp.place}
                </Link>
                {exp.location}
            </h4>
            <h4 className={" font-normal"} >
                {exp.date}
            </h4>
            {
                exp.positions.map(pos => (
                    <div key={pos.name.toString()}>
                        <p className={"pt-1 font-medium"}>
                        {pos.name}
                        </p>
                        <ul className=" pl-4 pt-2 font-normal list-disc">
                            {pos.tasks.map( task => (
                                <li key={task.toString()}>
                                    {task}
                                </li>
                            ))}
                            
                        </ul>
                    </div>
                ))
            }
            
        </div>
    ))
    
    return (
        <div className=" min-h-screen font-bold bg-white py-5 px-7 md:px-[100px] text-black">
            <div className=" px-5 max-sm:max-w-72 max-w-fit">
                <h1 className=" py-4 text-2xl">
                    Previous Experiences
                </h1>                
                {allExperiences}
            </div>
        </div>
    )
}


/**
 * const data = await getData();  
    const experiences =  data.experiences
    const exp = experiences.map((exp:SingleExperience) => (
        <div key={exp.id.toString()} className={" pt-3 max-w-fit"}>
            <h4 className=""> 
                <Link href={exp.link} className={"italic text-blue-700 underline"}>
                    {exp.place}
                </Link>
                {exp.location}
            </h4>
            <h4 className={" font-normal"} >
                {exp.date}
            </h4>
            {
                exp.positions.map(pos => (
                    <div key={pos.name.toString()}>
                        <p className={"pt-1 font-medium"}>
                        {pos.name}
                        </p>
                        <ul className=" pl-4 pt-2 font-normal list-disc">
                            {pos.tasks.map( task => (
                                <li key={task.toString()}>
                                    {task}
                                </li>
                            ))}
                            
                        </ul>
                    </div>
                ))
            }
            
        </div>
    ))
 */