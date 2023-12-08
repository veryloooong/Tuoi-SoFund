import { useEffect, useState } from "react";
import CourseItem from "/src/components/CourseItem";
import CourseImage1 from "/src/images/course-1.jpeg";
import CourseImage2 from "/src/images/course-2.jpeg";
import CourseImage3 from "/src/images/course-3.jpeg";
import NewsItem from "/src/components/NewsItem";
import NewsImage1 from "/src/images/news-1.jpg";
import NewsImage2 from "/src/images/news-2.jpg";
import CoursesGrid from "/src/components/CoursesGrid";
import axios from "axios";

const Courses = () => {
  // INFO: states
  const [coursesDB, setCoursesDB] = useState([]);
  const [courses, setCourses] = useState([]);
  const [searchKey, setSearchKey] = useState("");

  async function getData() {
    const apiUrl = import.meta.env.VITE_SERVER_API_URL + "/courses/all";

    await axios.get(apiUrl)
      .then((response) => {
        const data = response.data.map((obj) => {
          return {
            id: obj.id,
            title: obj.title,
            provider: obj.provider
          }
        });

        setCoursesDB(data);
        setCourses(data);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  useEffect(() => {
    getData();
  }, []);

  const coursesImages = {
    "Khóa 1": CourseImage1,
    "Khóa 2": CourseImage2,
  }


  function handleSearchClick() {
    if (searchKey === "") {
      setCourses(coursesDB);
    } else {
      const filteredCourses = coursesDB.filter((course) => {
        if (course.title.toLowerCase().includes(searchKey.toLowerCase())) {
          return course;
        }
      });
      setCourses(filteredCourses);
    }
  }

  return (
    <div className="mt-10 pb-10 px-4 md:px-20">
      <div className="flex flex-col xl:flex-row justify-between mb-5 gap-4">
        <h1 className="text-4xl font-extrabold text-center lg:text-left  text-palette3">Phát triển dự án</h1>
        {/* TODO: add search icon */}
        <div className="w-full xl:w-1/5 flex flex-row items-center gap-3">
          <svg className="h-4 absolute pl-4 xl:pl-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
          <input className="w-full h-10 px-10 xl:px-6 rounded-2xl border-gray-400 border-2" placeholder="Nhập từ khóa..." onChange={e => { setSearchKey(e.target.value) }} onKeyUp={handleSearchClick} ></input>
        </div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
        {/* courses */}
        <div className="space-y-4">
          {/* khóa của Tưới */}
          {/* <div>
                        <h1 className="font-bold text-3xl mb-4">Khóa học của Tưới</h1>
                        <div className="grid grid-cols-2 gap-4">
                            <CourseItem to="/todo" image={CourseImage1}>Khóa 4</CourseItem>
                            <CourseItem to="/todo" image={CourseImage2}>Khóa 5</CourseItem>
                        </div>
                    </div> */}
          <CoursesGrid title="Khóa học của Tưới">
            {courses.filter((course) => {
              if (course.provider === "Tưới SoFund") {
                return course;
              }
            }).map((course) => (
              <CourseItem to="/todo" id={course.id} image={coursesImages[course.title]}>{course.title}</CourseItem>
            ))}
          </CoursesGrid>
          {/* khóa ở ngoài */}
          <CoursesGrid title="Khóa học của đối tác">
            {courses.filter((course) => {
              if (course.provider !== "Tưới SoFund") {
                return course;
              }
            }).map((course) => (
              <CourseItem key={course.id} to="/todo" id={course.id} image={coursesImages[course.title]}>{course.title}</CourseItem>
            ))}
          </CoursesGrid>
        </div>
        {/* news */}
        <div className="hidden xl:flex xl:flex-col xl:gap-4 rounded-2xl bg-palette1 text-white p-8">
          <NewsItem to="/todo" image={NewsImage1}></NewsItem>
          <NewsItem to="/todo" image={NewsImage2}></NewsItem>
        </div>
      </div>
    </div>
  )
};

export default Courses;