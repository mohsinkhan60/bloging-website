import { useEffect, useState } from "react";
import { getPopularBlogs } from "../../../firebase";
import ArticalCard from "./ArticalCard";

export const PopularSection = () => {
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
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-4xl font-bold text-purple-900">Most Popular</h2>
      </div>

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
export default PopularSection;
