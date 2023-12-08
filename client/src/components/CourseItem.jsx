import { NavLink } from "react-router-dom";
import { useState } from "react";
import { PropTypes } from "prop-types";

const CourseItem = ({ id, image, children }) => {
  const [loaded, setLoaded] = useState(false);

  const to = "/course/" + id;

  return (
    <NavLink to={to}>
      <div className="h-fit">
        <div className="relative mb-4 rounded-2xl">
          {loaded ? null : (
            <div className="flex items-center justify-center w-full h-40 max-h-40 bg-gray-300 rounded-2xl dark:bg-gray-700">
              <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </svg>
            </div>
          )}
          <h1 className="absolute bottom-2 left-3 font-bold text-xl text-white z-10">{children}</h1>
          <img className="rounded-2xl shadow-xl object-cover h-40 max-h-40 w-full brightness-75" style={loaded ? {} : { display: 'none' }} src={image} onLoad={() => setLoaded(true)} />
        </div>
      </div>
    </NavLink>
  )
};

CourseItem.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  children: PropTypes.string
}

export default CourseItem;