import CourseItem from "../components/CourseItem";
import CourseImage1 from "../images/course-1.jpeg";
import CourseImage2 from "../images/course-2.jpeg";
import CourseImage3 from "../images/course-3.jpeg";
import NewsItem from "../components/NewsItem";
import NewsImage1 from "../images/news-1.jpg";
import NewsImage2 from "../images/news-2.jpg";

const Courses = () => {
    return (
        <div className="mt-10 pb-10 px-4 md:px-20">
            <div className="flex flex-col xl:flex-row justify-between mb-5 gap-4">
                <h1 className="text-4xl font-extrabold text-center lg:text-left  text-teal-500">Phát triển dự án</h1>
                {/* TODO: add search icon */}
                <form className="w-full xl:w-1/4 flex flex-row gap-3">
                    {/* search logic goes here */}
                    <input className="w-2/3 h-10 px-2 rounded-2xl border-gray-400 border-2" placeholder="Nhập từ khóa..."></input>
                    <button className="w-1/3 h-10 rounded-2xl bg-teal-600 font-semibold text-white">Tìm kiếm</button>
                </form>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
                {/* courses */}
                <div className="space-y-4">
                    {/* khóa của Tưới */}
                    <div>
                        <h1 className="font-bold text-3xl mb-4">Khóa học của Tưới</h1>
                        <div className="grid grid-cols-2 gap-4">
                            <CourseItem to="/todo" image={CourseImage1}>Khóa 1</CourseItem>
                            <CourseItem to="/todo" image={CourseImage2}>Khóa 2</CourseItem>
                        </div>
                    </div>
                    {/* khóa ở ngoài */}
                    <div>
                        <h1 className="font-bold text-3xl mb-4">Khóa học của đối tác</h1>
                        <div className="grid grid-cols-2 gap-4">
                            <CourseItem to="/todo" image={CourseImage3}>Khóa 3</CourseItem>
                        </div>
                    </div>
                </div>
                {/* news */}
                <div className="hidden xl:flex xl:flex-col xl:gap-4 rounded-2xl bg-cyan-800 text-white p-8">
                    <NewsItem to="/todo" image={NewsImage1}></NewsItem>
                    <NewsItem to="/todo" image={NewsImage2}></NewsItem>
                </div>
            </div>
        </div>
    )
};

export default Courses;