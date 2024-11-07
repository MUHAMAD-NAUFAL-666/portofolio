import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

interface CardProjectProps {
  title: string;
  description: string;
  image: string;
  linkCode: string;
  linkWeb: string;
  tech: Array<string>;
}

export default function CardProject({ title, description, image, linkCode, linkWeb, tech }: CardProjectProps){
  return(
    <>
      <div className="w-full flex flex-wrap bg-slate-700 rounded-lg p-3 font-poppins">
        <div className="w-full sm:w-1/2 flex justify-center items-center">
          <img src={`./img/${image}.png`} alt="" className="rounded-md w-full object-cover" />
        </div>
        <div className="w-full md:w-1/2 p-5 flex flex-col justify-evenly gap-3">
          <div>
          <h1 className="font-bold text-2xl">{title}</h1>
          <p>{description}</p>
          </div>
          <div className="flex gap-4 pt-4 flex-wrap">
            <button className="py-1 px-3 bg-blue-500 font-semibold rounded-lg"><a href={`${linkCode}`} className="flex gap-2 items-center"><FaGithub/>repo</a></button>
            <button className="py-1 px-3 bg-blue-500 font-semibold rounded-lg"><a href={`${linkWeb}`} className="flex gap-2 items-center"><TbWorld/>web</a></button>
          </div>
          <div>
            <ul className="flex flex-wrap gap-2">
              {
                tech.map((el, index) => (
                  <img key={index} src={el} alt={`${el}`} className="rounded-md"/>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}