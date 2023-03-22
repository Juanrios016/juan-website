import Image from "next/image"
import {softwareSkills, programmingSkills} from "../../json/data.json"



export default function Skills () {

  const software = softwareSkills.map( (skill:Skill) => (
    <div key={skill.name.toString()}className="flex flex-col justify-center  py-2">
      <Image src={"/"+ skill.image} className={"self-center w-2/3 h-auto rounded-2xl"} quality={100} alt={""} width={120} height={120}/>
      <p className="font-bold">{skill.name}</p>
      <p>Level: {skill.level}</p>
    </div>
  ))

  const programming = programmingSkills.map( (skill:Skill) => (
    <div key={skill.name.toString()}className="flex flex-col justify-center  py-2">
      <Image src={"/"+ skill.image} className={"self-center w-2/3 h-auto rounded-2xl"} quality={100} alt={""} width={120} height={120}/>
      <p className="font-bold">{skill.name}</p>
      <p>Level: {skill.level}</p>
    </div>
  ))

    return (
      <div className="bg-macblue text-white place-self-center py-5 px-7 md:px-[100px]">
    
        <h1 className=" max-sm:max-w-72 m-auto px-5 pt-4 font-bold pb-2 text-3xl ">
          Skills
        </h1>
        <div className={"md:flex  items-start"}>
          <div className="  max-sm:max-w-72 m-auto md:w-1/3">
            <h1 className="font-bold text-center underline text-xl">
              Software
            </h1>
            <div className="flex flex-wrap text-center justify-evenly py-3">
              {
                software
              }
            </div>
          </div>
    
          <div className=" max-sm:max-w-72  m-auto md:w-1/3">
            <h1 className="font-bold text-center underline text-xl">
              Programming
            </h1>

             <div className="flex flex-wrap text-center justify-evenly py-3">
              {
                programming
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
