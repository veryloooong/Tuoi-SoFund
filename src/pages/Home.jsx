import { useNavigate } from "react-router-dom";
import TitleImg from "../images/title-image.jpg"

const Home = () => {
    const navigate = useNavigate();

    const toProjects = () => {
        navigate("/projects");
    };

    return (
        <div className="mt-10 pb-16 grid grid-cols-1 xl:grid-cols-5 gap-5 place-content-center h-auto px-4 md:px-20">
            <div className="col-span-2 flex flex-col items-center h-full gap-y-2 xl:items-start justify-center">
                <h1 className="font-extrabold text-5xl xl:text-left text-center text-palette1">Give to nourish</h1>
                <br />
                <button className="block w-2/3 p-4 bg-palette2 text-white font-semibold text-lg rounded-full max-w-screen-sm" onClick={toProjects}>Đóng góp ngay!</button>
            </div>
            <div className="col-span-3">
                <img className="rounded-3xl" src={TitleImg} />
            </div>
        </div>
    );
};

export default Home;