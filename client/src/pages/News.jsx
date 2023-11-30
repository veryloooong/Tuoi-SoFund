import NewsItem from "/src/components/NewsItem";
import AboutImg1 from "/src/images/about-1.jpg";
import AboutImg2 from "/src/images/about-2.jpg";
import AboutImg3 from "/src/images/about-3.jpg";
import AboutImg4 from "/src/images/about-4.jpg";
const News = () => {
  // draws from DB

  return (
    <div className="flex flex-col gap-4 place-content-center mt-10 px-4 md:px-20 pb-10">
      <h1 className="text-4xl font-extrabold mb-8">Tin tức mới nhất</h1>
      <NewsItem to="/todo" image={AboutImg1}></NewsItem>
      <NewsItem to="/todo" image={AboutImg2}></NewsItem>
      <NewsItem to="/todo" image={AboutImg3}></NewsItem>
      <NewsItem to="/todo" image={AboutImg4}></NewsItem>
    </div>
  );
};

export default News;
