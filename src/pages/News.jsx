import NewsItem from "../components/NewsItem";
import AboutImg1 from "../images/about-1.jpg";
import AboutImg2 from "../images/about-2.jpg";
import AboutImg3 from "../images/about-3.jpg";
import AboutImg4 from "../images/about-4.jpg";
const News = () => {
  return (
    <div className="flex flex-col gap-4 place-content-center mt-10 px-4 md:px-20 pb-10">
      <h1 className="text-4xl font-extrabold mb-8">Tin tức mới nhất</h1>
      <p className="mb-5 text-justify">
        Cái này bới từ DB ra!!! Chứ ở đây chỉ có placeholder thôi
      </p>

      <NewsItem to="/todo" image={AboutImg1}></NewsItem>
      <NewsItem to="/todo" image={AboutImg2}></NewsItem>
      <NewsItem to="/todo" image={AboutImg3}></NewsItem>
      <NewsItem to="/todo" image={AboutImg4}></NewsItem>
    </div>
  );
};

export default News;
