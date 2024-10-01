import { useEffect, useState } from "react";
import { getPopularBlogs } from "../../../firebase";
import ArticalCard from "./ArticalCard";

export const SpecialCards = () => {
  const [popularBlogs, setPopularBlogs] = useState([]);

  useEffect(() => {
    getPopularBlogs()
      .then((popularBlogs) => {
        if (popularBlogs) {
          setPopularBlogs(popularBlogs.docs);
        } else {
          console.log("No popular Blogs found or an error occurred.");
        }
      })
      .catch((error) => console.error("Error fetching popular blogs:", error));
  }, []);

  return (
    <div className="container mx-auto px-6 sm:px-10 lg:px-20 my-20">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {popularBlogs.map((article) => (
          <ArticalCard
            key={article.id}
            article={{ id: article.id, ...article.data() }}
          />
        ))}
      </div>
    </div>
  );
};
export default SpecialCards;
