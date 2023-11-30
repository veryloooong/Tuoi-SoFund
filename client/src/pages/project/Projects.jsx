import { useState } from "react";
import ProjectItem from "/src/components/ProjectItem";
import ProjectsGrid from "/src/components/ProjectsGrid";
import ProjectImage1 from "/src/images/proj-1.jpeg";
import ProjectImage2 from "/src/images/proj-2.jpg";
import ProjectImage3 from "/src/images/proj-3.jpg";

const Projects = () => {
  const projectsList = ["Dự án ABC", "Dự án XYZ", "Dự án 123"];
  const projectsImage = {
    "Dự án ABC": ProjectImage1,
    "Dự án XYZ": ProjectImage2,
    "Dự án 123": ProjectImage3,
  }

  const [projects, setProjects] = useState(projectsList);
  const [searchKey, setSearchKey] = useState("");

  function handleSearchClick() {
    if (searchKey === "") {
      setProjects(projectsList);
    } else {
      const filteredProjects = projectsList.filter((project) => {
        if (project.toLowerCase().includes(searchKey.toLowerCase())) {
          return project;
        }
      });
      setProjects(filteredProjects);
    }
  }

  return (
    <div className="mt-10 pb-10 px-4 md:px-20">
      <div className="flex flex-col xl:flex-row justify-between mb-5 gap-4">
        <h1 className="text-4xl font-extrabold text-center lg:text-left text-palette3">Đóng góp cộng đồng</h1>
        <div className="w-full xl:w-1/5 flex flex-row items-center gap-3">
          <svg className="h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
          <input className="w-full h-10 px-2 rounded-2xl border-gray-400 border-2" placeholder="Nhập từ khóa..." onChange={e => { setSearchKey(e.target.value) }} onKeyUp={handleSearchClick} ></input>
        </div>
      </div>
      {/* TODO: add some smart DB shit */}
      <ProjectsGrid>
        {projects.map((project) => (
          <ProjectItem to="/todo" image={projectsImage[project]}>{project}</ProjectItem>
        ))}
      </ProjectsGrid>
    </div>
  );
};

export default Projects;