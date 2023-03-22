import juanLogo from "../../public/logo-blue.png"
import Image from "next/image"
import chowgirls from "../../public/chowgirls.png"
import macmap from "../../public/mac-map.jpg"
import mario from "../../public/mario.jpg"

async function getData() {
    const res = await fetch('http://localhost:3000/api/content');
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    return res.json();
  }

export default async function Projects () {
    const data = await getData();
    
    console.log(data);
    
    
   


    

    return (
        <div className=" min-h-screen bg-macblue text-white py-5 px-7 md:px-[100px] ">           
            <div className=" px-5 max-sm:max-w-72 ">
                <div className={""}>
                    <h1 className=" font-bold m-auto py-4 text-2xl">
                        Academic Projects
                    </h1>
                    <div className={" pb-8"}>

                        {/* {academicProjects} */}
                    </div>
                    
                </div>

                <div className={""}>
                    <h1 className=" font-bold m-auto text-2xl py-4">
                        Additonal Projects
                    </h1>
                    <div>
                        
                    {/* {sideProjects} */}
                    </div>
                </div>
            </div>
        </div>
    )
}


/**
 *  const academicProjects = data.academicProjects.map((project:SingleProject) => (
            
        
            <div className={"min-[860px]:flex min-[860px]:flex-row-reverse min-[860px]:space-x-4 min-[860px]:space-x-reverse"}  key={project.name.toString()}>
                <Image src={"/" + project.image} alt={project.name.toString()} className={" m-auto mt-0 min-[425px]:w-4/6 min-[769px]:max-w-xs"} width={1200} height={1200} />
                <div className=" min-[425px]:w-auto" >
                    <h2 className=" font-semibold">
                        {project.name}
                    </h2>
                    <h3>
                        {project.class}
                    </h3>
                    <h3>
                        {project.status}
                    </h3>
                    <p className="pt-2 ">
                        {project.description}
                    </p>
                </div>
            </div>
        
    ))

    const sideProjects = data.sideProjects.map( (project:SingleProject) => (
        
            <div className={"min-[860px]:flex min-[860px]:flex-row-reverse min-[860px]:space-x-4 min-[860px]:space-x-reverse"}  key={project.name.toString()}>
                <Image src={"/" + project.image} alt={project.name.toString()} className={" m-auto mt-0 min-[425px]:w-4/6 min-[769px]:max-w-xs"} width={1200} height={1200} />
                <div className=" min-[425px]:w-auto" >
                    <h2 className=" font-semibold">
                        {project.name}
                    </h2>
                    <h3>
                        {project.class}
                    </h3>
                    <h3>
                        {project.status}
                    </h3>
                    <p className="pt-2 ">
                        {project.description}
                    </p>
                </div>
            </div>
        
    ))
 */