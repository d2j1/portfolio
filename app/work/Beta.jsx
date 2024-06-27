import { useState } from "react";
import { projects } from "./Values";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsArrowUpRight } from "react-icons/bs";
import { MdOutlineWorkOutline } from "react-icons/md";
import { FaTools } from "react-icons/fa";

const Beta = () => {
  return (
    <>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </>
  );
};

const ProjectCard = ({ project }) => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="p-2 xl:mb-8 mb-8 mx-8 w-[90%]  xl:w-[500px] bg-[#27272c] text-white rounded-2xl">
      <div className="mb-4 flex items-center justify-center">
        <MdOutlineWorkOutline className="text-2xl  mr-2" />
        <h2 className="text-2xl font-semibold  text-center">{project.title}</h2>
      </div>
      <div className="flex justify-around mb-2">
        <div className="group">
          <Link
            href={project.live}
            className="flex items-center space-x-2 group-hover:text-accent underline cursor-pointer"
          >
            <BsArrowUpRight className="text-xl" />
            <p className="">Live</p>
          </Link>
        </div>
        <div className="group">
          <Link
            href={project.github}
            className="flex items-center space-x-2 group-hover:text-accent underline cursor-pointer"
          >
            <BsGithub className="text-2xl" />
            <p className="">Github</p>
          </Link>
        </div>
      </div>
      <div className="flex gap-2 justify-center items-center mb-2">
        <FaTools className="text-xl text-accent" />
        {project.stack.map((item, index) => (
          <p key={index} className="text-base text-accent">
            {item.name}
            {index !== project.stack.length - 1 ? "," : ""}
          </p>
        ))}
      </div>
      <div className="mb-4 px-6 relative">
        <p
          className={`text-white/80 ${showMore ? "" : "line-clamp-2"} relative`}
        >
          {project.description}
          {!showMore && (
            <span className="flex justify-end absolute bottom-0 right-0 w-full h-8 bg-gradient-to-t from-slate-700 to-transparent">
              <button
                onClick={handleShowMore}
                className="text-accent text-sm px-2 mt-2 bg-[#27272c] bg-opacity-50"
              >
                Show More
              </button>
            </span>
          )}

          {showMore && (
            <span className="flex justify-end">
              <button
                onClick={handleShowMore}
                className="text-accent text-sm px-2 mt-2 bg-[#27272c] bg-opacity-80"
              >
                Show Less
              </button>
            </span>
          )}
        </p>
      </div>
      <div className="h-[400px] w-auto relative group flex justify-center">
        <Image
          src={project.image}
          fill
          className="object-fill"
          alt="project image"
        />
      </div>
    </div>
  );
};

export default Beta;
