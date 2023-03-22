import Image from "next/image"
import data from "../../json/data.json"

export default async function Projects () {
    const {academicProjects, sideProjects} = data

    const academicProj = academicProjects.map( (project) => {


        if(project.id % 2 == 0)
        return <div className={"  mt-5 min-[860px]:flex min-[860px]:flex-row min-[860px]:space-x-4"}  key={project.name.toString()}>
                    <Image src={"/" + project.image} alt={project.name.toString()} className={" bg-white p-2 m-auto mt-0 min-[425px]:w-4/6 min-[769px]:max-w-xs"} width={1200} height={1200} />
                    <div className=" min-[425px]:w-auto" >
                        <h2 className=" font-semibold">
                            {project.name}
                        </h2>
                        <h3>
                            {project.status}
                        </h3>
                        <p className="pt-2 ">
                            {project.description}
                        </p>
                    </div>
                </div>

        return <div className={" mt-5 min-[860px]:flex min-[860px]:flex-row-reverse min-[860px]:space-x-4 min-[860px]:space-x-reverse"}  key={project.name.toString()}>
                    <Image src={"/" + project.image} alt={project.name.toString()} className={" bg-white p-2 m-auto mt-0 min-[425px]:w-4/6 min-[769px]:max-w-xs"} width={1200} height={1200} />
                    <div className=" min-[425px]:w-auto" >
                        <h2 className=" font-semibold">
                            {project.name}
                        </h2>
                        <h3>
                            {project.status}
                        </h3>
                        <p className="pt-2 ">
                            {project.description}
                        </p>
                    </div>
                </div>        
})
   
    const sideProj = sideProjects.map( (project) => {


        if(project.id % 2 == 0)
        return <div className={"mt-5 min-[860px]:flex min-[860px]:flex-row min-[860px]:space-x-4"}  key={project.name.toString()}>
                    <Image src={"/" + project.image} alt={project.name.toString()} className={" bg-white p-2 m-auto mt-0 min-[425px]:w-4/6 min-[769px]:max-w-xs"} width={1200} height={1200} />
                    <div className=" min-[425px]:w-auto" >
                        <h2 className=" font-semibold">
                            {project.name}
                        </h2>
                        <h3>
                            {project.status}
                        </h3>
                        <p className="pt-2 ">
                            {project.description}
                        </p>
                    </div>
                </div>
        return <div className={" mt-5 min-[860px]:flex min-[860px]:flex-row-reverse min-[860px]:space-x-4 min-[860px]:space-x-reverse"}  key={project.name.toString()}>
                    <Image src={"/" + project.image} alt={project.name.toString()} className={" bg-white p-2 m-auto mt-0 min-[425px]:w-4/6 min-[769px]:max-w-xs"} width={1200} height={1200} />
                    <div className=" min-[425px]:w-auto" >
                        <h2 className=" font-semibold">
                            {project.name}
                        </h2>
                        <h3>
                            {project.status}
                        </h3>
                        <p className="pt-2 ">
                            {project.description}
                        </p>
                    </div>
                </div>        
})
    
    return (
        <div className=" min-h-screen bg-macblue text-white py-5 px-7 md:px-[100px] ">           
            <div className=" px-5 max-sm:max-w-72 ">
                <div className={""}>
                    <h1 className=" font-bold m-auto py-4 text-2xl">
                        Academic Projects
                    </h1>
                    <div className={" pb-8"}>
                        {academicProj}
                    </div>
                </div>

                <div className={""}>
                    <h1 className=" font-bold m-auto text-2xl py-4">
                        Additonal Projects
                    </h1>
                    <div>
                        {sideProj}
                    </div>
                </div>
            </div>
        </div>
    )
}
