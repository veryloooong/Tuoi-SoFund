import { NavLink } from "react-router-dom";

const ProjectItem = ({ to, image, children }) => {
  return (
    <div className="h-fit">
      <div className="relative mb-4 rounded-2xl">
        <h1 className="absolute bottom-2 left-3 font-bold text-xl text-white z-50">{children}</h1>
        <img className="rounded-2xl shadow-xl object-cover h-40 max-h-40 w-full brightness-75" src={image} />
      </div>
      <NavLink to={to}>
        <button className="block w-full p-4 bg-teal-600 text-white font-semibold text-sm rounded-full leading-tight" >Đóng góp</button>
      </NavLink>
    </div>
  )
};

export default ProjectItem;