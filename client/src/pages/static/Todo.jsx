import { useNavigate } from "react-router-dom";

const Todo = () => {
    const navigate = useNavigate();

    const toHome = () => {
        navigate("/");
    };

    return (
        <div className="flex flex-col justify-center items-center mt-20">
            <h1 className="text-center font-bold text-3xl">This feature is not implemented yet.</h1>
            <br />
            <button className="bg-teal-500 mx-auto text-center w-1/2 rounded-full h-16" onClick={toHome}>Go to home page</button>
        </div>
    );
};

export default Todo;