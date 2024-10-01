import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../firebase";
import ArticalCard from "./ArticalCard";

export const RecentArticle = () => {
  const [recentBlogs, setRecentBlogs] = useState([]);

  useEffect(() => {
    const getRecentBlogs = async () => {
      const q = query(collection(db, "user"), orderBy("date"), limit(6));
      const querySnapshot = await getDocs(q);
      const items = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setRecentBlogs(items);
    };

    getRecentBlogs();
  }, []);

  return (
    <div className="container mx-auto px-6 sm:px-10 lg:px-20 my-20">
      <h2 className="text-4xl font-bold text-center text-indigo-900 mb-8">
        Recent Blogs
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {recentBlogs.map((article) => (
          <ArticalCard
            key={article.id}
            article={{ id: article.id, ...article }}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentArticle;
