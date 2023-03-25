import Image from "next/image"
import data from "../../json/data.json"



export default function Skills () {

  const {softwareSkills, programmingSkills} = data

  const software = softwareSkills.map( skill => (
    <div key={skill.name.toString()} className="flex flex-col justify-center py-2 w-[130px]">
      <Image src={"/"+ skill.image} className={"self-center rounded-2xl w-[80px] h-[80px]"} quality={100} alt={skill.alt} width={120} height={120}/>
      <p className="font-bold">{skill.name}</p>
      <p>Level: {skill.level}</p>
    </div>
  ))

  const programming = programmingSkills.map( skill => (
    <div key={skill.name.toString()} className="flex flex-col justify-center py-2 w-[130px]">
      <Image src={"/"+ skill.image} className={"self-center rounded-2xl w-[80px] h-[80px]"} quality={100} alt={skill.alt} width={120} height={120}/>
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
          <div className="  max-sm:max-w-72 m-auto md:w-5/12">
            <h1 className="font-bold text-center underline text-xl">
              Software
            </h1>
            <div className="flex flex-wrap text-center object-center justify-center py-3">
              {
                software
              }
            </div>
          </div>
    
          <div className=" max-sm:max-w-72  m-auto md:w-5/12">
            <h1 className="font-bold text-center underline text-xl">
              Programming
            </h1>

            <div className="flex flex-wrap text-center object-center justify-center py-3">
              {
                programming
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
