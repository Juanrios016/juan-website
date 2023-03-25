import Image from "next/image"
import Link from "next/link"
import data from "../../json/data.json"

export default async function Projects () {
    const {academicProjects, sideProjects} = data

    const academicProj = academicProjects.map( (project) => {
        if(project.id % 2 == 0)
        return <div className={" mt-5 min-[860px]:flex min-[860px]:flex-row min-[860px]:space-x-4"}  key={project.name.toString()}>
                    <div className="bg-white min-[425px]:w-4/6 min-[860px]:max-w-sm m-auto ">
                        <Image src={"/" + project.image} alt={project.name.toString()} className={" bg-white p-2 "} width={1200} height={1200} />
                    </div>
                    <div className="grid min-[860px]:w-4/6 h-fit">
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
                        <div className={ project["git-link"] === "" ? "invisible" : " flex felx-row space-x-3 pt-3  self-start"}>
                            <Link href={project["git-link"]}>
                                <Image src={"/github.png"} className={" w-[25px] h-auto "} alt={"Github logo"} width={100} height={100} />
                            </Link>
                            <Link href={project["live-link"]}>
                                <Image src={"/link-icon.png"} className={" w-[25px] h-auto"} alt={"Github logo"} width={100} height={100} />
                            </Link>
                        </div>
                    </div>
                </div>

        return <div className={" mt-5 min-[860px]:flex min-[860px]:flex-row-reverse min-[860px]:space-x-4 min-[860px]:space-x-reverse"}  key={project.name.toString()}>
                  <div className="bg-white min-[425px]:w-4/6 min-[860px]:max-w-sm m-auto ">
                        <Image src={"/" + project.image} alt={project.name.toString()} className={" bg-white p-2 "} width={1200} height={1200} />
                    </div>
                    <div className="grid min-[860px]:w-4/6 h-fit">
                        <div className=" min-[425px]:w-auto " >
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
                        <div className={ project["git-link"] === "" ? "invisible" : " flex felx-row space-x-3 pt-3  self-start"}>
                            <Link href={project["git-link"]}>
                                <Image src={"/github.png"} className={" w-[25px] h-auto "} alt={"Github logo"} width={100} height={100} />
                            </Link>
                            <Link href={project["live-link"]}>
                                <Image src={"/link-icon.png"} className={" w-[25px] h-auto"} alt={"Github logo"} width={100} height={100} />
                            </Link>
                        </div>
                    </div>
                </div>        
})
   
    const sideProj = sideProjects.map( (project) => {
        if(project.id % 2 == 0)
        return <div className={"mt-5 min-[860px]:flex min-[860px]:flex-row min-[860px]:space-x-4"}  key={project.name.toString()}>
                    <div className="bg-white min-[425px]:w-4/6 min-[860px]:max-w-sm m-auto ">
                        <Image src={"/" + project.image} alt={project.name.toString()} className={" bg-white p-2 "} width={1200} height={1200} />
                    </div>
                    <div className="grid min-[860px]:w-4/6 h-fit">
                        <div className=" min-[425px]:w-auto " >
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
                        <div className={ project["git-link"] === "" ? "invisible" : " flex felx-row space-x-3 pt-3  self-start"}>
                            <Link href={project["git-link"]}>
                                <Image src={"/github.png"} className={" w-[25px] h-auto "} alt={"Github logo"} width={100} height={100} />
                            </Link>
                            <Link href={project["live-link"]}>
                                <Image src={"/link-icon.png"} className={" w-[25px] h-auto"} alt={"Github logo"} width={100} height={100} />
                            </Link>
                        </div>
                    </div>
                </div>

        return <div className={" mt-5 min-[860px]:flex min-[860px]:flex-row-reverse min-[860px]:space-x-4 min-[860px]:space-x-reverse"}  key={project.name.toString()}>
                    <div className="bg-white min-[425px]:w-4/6 min-[860px]:max-w-sm m-auto ">
                        <Image src={"/" + project.image} alt={project.name.toString()} className={" bg-white p-2 "} width={1200} height={1200} />
                    </div>
                    <div className="grid min-[860px]:w-4/6 h-fit">
                        <div className=" min-[425px]:w-auto " >
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
                        <div className={ project["git-link"] === "" ? "invisible" : " flex felx-row space-x-3 pt-3  self-start"}>
                            <Link href={project["git-link"]}>
                                <Image src={"/github.png"} className={" w-[25px] h-auto "} alt={"Github logo"} width={100} height={100} />
                            </Link>
                            <Link href={project["live-link"]}>
                                <Image src={"/link-icon.png"} className={" w-[25px] h-auto"} alt={"Github logo"} width={100} height={100} />
                            </Link>
                        </div>
                    </div>
                </div>        
})
    
    return (
        <div className=" min-h-screen bg-macblue text-white py-5 px-7 md:px-[100px] ">           
            <div className=" px-5 max-sm:max-w-72 ">
                <div className={""}>
                    <h1 className=" font-bold m-auto pt-4 text-2xl">
                        Academic Projects
                    </h1>
                    <div className={" pb-8"}>
                        {academicProj}
                    </div>
                </div>

                <div className={""}>
                    <h1 className=" font-bold m-auto text-2xl pt-4">
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
