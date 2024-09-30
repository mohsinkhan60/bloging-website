import { useEffect, useState } from "react";
import { getImageURL } from "../../../firebase";

/* eslint-disable react/prop-types */
export const ArticalCard = ({ article }) => {
  const [url, setURL] = useState(null);

  useEffect(() => {
    if (article.imageURL) {
      getImageURL(article.imageURL)
        .then((url) => setURL(url))
        .catch((error) => console.error("Error fetching image URL:", error));
    }
  }, [article.imageURL]);

  return (
   <div key={article.id} className="bg-white border rounded-lg overflow-hidden">
    <div className="bg-white rounded-lg overflow-hidden">
      {url ? (
        <img
          src={url}
          alt={article.title}
          className="w-full h-70 object-cover rounded-t-lg rounded-b-lg"
        />
      ) : (
        <div className="w-full h-70 bg-gray-200 rounded-t-lg"></div> // Placeholder while loading
      )}
      <div className="p-6">
        <p className="text-sm text-gray-600 mb-2">By {article.author}</p>
        <h3 className="text-xl font-semibold text-indigo-900 mb-2">
          {article.title}
        </h3>
        <p className="text-gray-600 mb-4">{article.description}</p>
        <div className="flex justify-between items-center text-sm text-gray-500">
          <span>{article.date}</span>
          <span>{article.readTime}</span>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ArticalCard;
