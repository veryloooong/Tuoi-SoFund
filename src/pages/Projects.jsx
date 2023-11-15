import ProjectItem from "../components/ProjectItem";
import ProjectImage1 from "../images/proj-1.jpeg";
import ProjectImage2 from "../images/proj-2.jpg";
import ProjectImage3 from "../images/proj-3.jpg";

const Projects = () => {
    return (
        <div className="mt-10 pb-10 px-4 md:px-20">
            <div className="flex flex-col xl:flex-row justify-between mb-5 gap-4">
                <h1 className="text-4xl font-extrabold text-center lg:text-left  text-teal-500">Đóng góp cộng đồng</h1>
                {/* TODO: add search icon */}
                <form className="w-full xl:w-1/4 flex flex-row gap-3">
                    {/* logic goes here */}
                    <input className="w-2/3 h-10 px-2 rounded-2xl border-gray-400 border-2" placeholder="Nhập từ khóa..."></input>
                    <button className="w-1/3 h-10 rounded-2xl bg-teal-600 font-semibold text-white">Tìm kiếm</button>
                </form>
            </div>
            <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
                <ProjectItem to="/donate" image={ProjectImage1}>Dự án ABC</ProjectItem>
                <ProjectItem to="/donate" image={ProjectImage2}>Dự án XYZ</ProjectItem>
                <ProjectItem to="/donate" image={ProjectImage3}>Dự án 123</ProjectItem>
            </div>
        </div>
    );
};

export default Projects;