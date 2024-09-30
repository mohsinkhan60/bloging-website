import { useEffect, useState } from "react";
import { listAllUsers } from "../../../firebase";
import ArticalCard from "./ArticalCard";

export const RecentArtical = () => {
  const [articles, setArticals] = useState([]);

  useEffect(() => {
    listAllUsers().then((articles) => {
      if (articles) {
        setArticals(articles.docs);
      } else {
        console.log("No articles found or an error occurred.");
      }
    });
  }, []);

  return (
    <div className="container mx-auto px-6 sm:px-10 lg:px-20 my-20">
      <h2 className="text-4xl font-bold text-center text-indigo-900 mb-8">
        Recent Articles
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((article) => (
          <ArticalCard key={article.id} article={{ id: article.id, ...article.data() }} />
        ))}
      </div>
      <div className="container mx-auto px-6 sm:px-10 lg:px-20 my-20">
        <div className="bg-gradient-to-r rounded-2xl from-blue-600 via-blue-700 to-indigo-800 p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="block">28k People Receive Weekly</span>
            <span className="block">WordPress Related Newsletter.</span>
          </h2>
          <button
            className="mt-6 px-6 py-3 bg-coral-400 hover:bg-coral-500 bg-orange-500 text-white font-semibold rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-coral-300 focus:ring-opacity-50"
            aria-label="Subscribe to newsletter"
          >
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecentArtical;
