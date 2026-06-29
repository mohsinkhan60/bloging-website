import { useEffect, useState } from "react";
import { getPopularBlogs } from "../../../firebase";
import ArticalCard from "./ArticalCard";
import { ArticleGridSkeleton, SectionHeaderSkeleton } from "../ui/Skeletons";

export const SpecialCards = () => {
  const [popularBlogs, setPopularBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPopularBlogs()
      .then((result) => {
        if (result) setPopularBlogs(result.docs);
      })
      .catch((error) => console.error("Error fetching popular blogs:", error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="bg-canvas-paper py-24">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        {loading ? (
          <SectionHeaderSkeleton />
        ) : (
          <>
            <p className="font-mono text-[13px] text-mute mb-3 tracking-wide uppercase">Editor&apos;s Picks</p>
            <h2
              className="text-ink font-normal mb-12"
              style={{ fontSize: 'clamp(32px, 4vw, 48px)', letterSpacing: '-1.68px', lineHeight: '1.08' }}
            >
              More to Read
            </h2>
          </>
        )}

        {loading ? (
          <ArticleGridSkeleton count={3} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {popularBlogs.map((article) => (
              <ArticalCard
                key={article.id}
                article={{ id: article.id, ...article.data() }}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default SpecialCards;
