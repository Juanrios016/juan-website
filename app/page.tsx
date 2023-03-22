import Intro from "./components/intro"
import About from "./components/about"
import Skills from "./components/skills"

export default async function Home( ) {
    
  return (
    <main className={""}>
      <Intro />
      <About />
      <Skills />
    </main>
  )
}

