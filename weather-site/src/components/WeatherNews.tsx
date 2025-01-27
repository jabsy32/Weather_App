import { fetchNewStories } from "@/services/WeatherNewsScrapper";
import { useEffect, useState } from "react";
import NewsComponent from "@/components/NewsComponent";

const WeatherNews = () => {
  const [newArticles, setNewArticles] = useState<NewsArticle[]>([]);

  const getNews = async () => {
    try {
      const news = await fetchNewStories();
      setNewArticles(news);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      await getNews();
    };
    fetchData();
  }, []);

  console.log(newArticles);

  return (
    <div className="flex flex-col text-white items-center p-5 h-full">
      <h1>Latest World News</h1>
      {newArticles ? (
        <div className="flex flex-col pt-10 items-start">
          <div>
            <NewsComponent article={newArticles[0]} />
          </div>
          <div>
            <NewsComponent article={newArticles[1]} />
          </div>
          <div>
            <NewsComponent article={newArticles[2]} />
          </div>
        </div>
      ) : (
        <div>
          <p>Unable to load weather news</p>
        </div>
      )}
    </div>
  );
};
export default WeatherNews;
