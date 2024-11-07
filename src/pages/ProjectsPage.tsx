import Navbar from "../components/Navbar";
import Projects from "../components/Projects";

export default function ProjectsPage(){
  return(
    <>
      <div className="bg-slate-900 h-full py-8">
        <Navbar/>
        <Projects/>
      </div>
    </>
  )
}