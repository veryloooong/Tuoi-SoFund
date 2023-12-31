import {PropTypes} from "prop-types";

const CoursesGrid = ({ title, children }) => {
  return (
    <div>
      <h1 className="font-bold text-3xl mb-4">{title}</h1>
      <div className="grid grid-cols-2 gap-4">
        {children}
        {/* {courses.map((course) => {
          <CourseItem to="/todo" image={CourseImageDemo}>{course}</CourseItem>
        })} */}
      </div>
    </div>
  )
}

CoursesGrid.propTypes = {
  title: PropTypes.string,
  children: PropTypes.string
}

export default CoursesGrid;