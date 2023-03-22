import Intro from "./components/intro"
import About from "./components/about"
import Skills from "./components/skills"
import contentData from "../json/data.json"


async function getData() {
  const res = await fetch('http://localhost:3000/api/content-data');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function Home( ) {

  const data = await getData();
  // console.log(data.skills);
  
    
  return (
    
    <main className={""}>
      <Intro />
      <About />
      <Skills skills={data.skills}/>
    </main>
  )
}

