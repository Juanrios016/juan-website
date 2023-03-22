import Intro from "./components/intro"
import About from "./components/about"
import Skills from "./components/skills"
import contentData from "../json/data.json"
import getData from "@/lib/getJuanDatajuan-website" 


export default async function Home( ) {

  const data: Promise<JuanData[]> = getData()
  const allData = await data

  // console.log(allData);
  
  
  
    
  return (
    
    <main className={""}>
      {/* {data.toString()} */}
      <Intro />
      <About />
      <Skills skills={contentData.sideProjects}/>
    </main>
  )
}

