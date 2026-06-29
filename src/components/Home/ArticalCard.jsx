/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getImageURL } from "../../../firebase";

export const ArticalCard = ({ article }) => {
  const [url, setURL] = useState(null);
  const [imgLoading, setImgLoading] = useState(true);

  useEffect(() => {
    if (article.imageURL || article.image) {
      getImageURL(article.image || article.imageURL)
        .then((u) => setURL(u))
        .catch((err) => console.error("Error fetching image URL:", err))
        .finally(() => setImgLoading(false));
    } else {
      setImgLoading(false);
    }
  }, [article.imageURL, article.image]);

  return (
    <Link
      to={`/blog/details/${article.id}`}
      className="group block overflow-hidden rounded-marketing bg-canvas-light border border-hairline hover:border-ash hover:shadow-sm transition-all duration-200"
    >
      {imgLoading ? (
        <div className="w-full h-56 animate-pulse bg-canvas-paper rounded-t-marketing" />
      ) : url ? (
        <img
          src={url}
          alt={article.title}
          className="w-full h-56 object-cover rounded-t-marketing"
        />
      ) : (
        <div className="w-full h-56 bg-canvas-paper rounded-t-marketing" />
      )}

      <div className="p-6">
        <p className="font-mono text-[11px] uppercase tracking-widest text-mute mb-3">
          By {article.author}
        </p>
        <h3
          className="text-ink text-[22px] font-normal leading-snug mb-3"
          style={{ letterSpacing: '-0.24px' }}
        >
          {article.title}
        </h3>
        <p className="text-slate text-[15px] leading-relaxed mb-5 line-clamp-3">
          {article.description}
        </p>
        <div className="flex justify-between items-center text-[13px] text-mute">
          <span>{new Date(article.date).toLocaleDateString()}</span>
          <span>{article.readTime}</span>
        </div>
      </div>
    </Link>
  );
};

export default ArticalCard;
