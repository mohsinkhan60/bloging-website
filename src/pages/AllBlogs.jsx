import { useEffect, useState } from "react";
import { getPopularBlogs } from "../../firebase";
import ArticalCard from "../components/Home/ArticalCard";

export const AllBlogs = () => {
   const [articles, setArticles] = useState([]);

   useEffect(() => {
     getPopularBlogs()
       .then((articles) => {
         if (articles) {
           setArticles(articles.docs);
         } else {
           console.log("No articles found or an error occurred.");
         }
       })
       .catch((error) => console.error("Error fetching articles:", error));
   }, []);
 
   return (
     <div className="container mx-auto px-6 sm:px-10 lg:px-20 my-20">
       <h2 className="text-4xl font-bold text-center text-indigo-900 mb-8">
         All Blogs
       </h2>
       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
         {articles.map((article) => (
           <ArticalCard
             key={article.id}
             article={{ id: article.id, ...article.data() }}
           />
         ))}
       </div>
     </div>
   );
 };
 
export default AllBlogs