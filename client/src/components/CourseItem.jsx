import { NavLink } from "react-router-dom";

const CourseItem = ({ to, image, children }) => {
  return (
    <NavLink to={to}>
      <div className="h-fit">
        <div className="relative mb-4 rounded-2xl">
          <h1 className="absolute bottom-2 left-3 font-bold text-xl text-white z-10">{children}</h1>
          <img className="rounded-2xl shadow-xl object-cover h-40 max-h-40 w-full brightness-75" src={image} />
        </div>
      </div>
    </NavLink>
  )
};

export default CourseItem;