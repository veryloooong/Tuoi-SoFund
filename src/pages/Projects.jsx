import { useState } from "react";
import ProjectItem from "../components/ProjectItem";
import ProjectsGrid from "../components/ProjectsGrid";
import ProjectImage1 from "../images/proj-1.jpeg";
import ProjectImage2 from "../images/proj-2.jpg";
import ProjectImage3 from "../images/proj-3.jpg";

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
        <div className="w-full xl:w-1/4 flex flex-row gap-3">
          <input className="w-2/3 h-10 px-2 rounded-2xl border-gray-400 border-2" placeholder="Nhập từ khóa..." onChange={e => { setSearchKey(e.target.value) }} onKeyUp={e => { if (e.key === "Enter") { handleSearchClick() } }}></input>
          <button className="w-1/3 h-10 rounded-2xl bg-palette1 font-semibold text-white" onClick={handleSearchClick}>Tìm kiếm</button>
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