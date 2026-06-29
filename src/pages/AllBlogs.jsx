import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { getPopularBlogs } from "../../firebase";
import ArticalCard from "../components/Home/ArticalCard";
import { ArticleGridSkeleton, SectionHeaderSkeleton } from "../components/ui/Skeletons";
import { categories } from "../components/Home/Header";

export const AllBlogs = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") || "All";

  useEffect(() => {
    getPopularBlogs()
      .then((result) => {
        if (result) setArticles(result.docs);
      })
      .catch((error) => console.error("Error fetching articles:", error))
      .finally(() => setLoading(false));
  }, []);

  const filtered =
    activeCategory === "All"
      ? articles
      : articles.filter((a) => {
          const cat = a.data().category || "";
          return cat.toLowerCase() === activeCategory.toLowerCase();
        });

  const setCategory = (cat) => {
    if (cat === "All") {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat });
    }
  };

  return (
    <section className="bg-canvas-light min-h-screen pt-32 pb-24">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        {loading ? (
          <SectionHeaderSkeleton />
        ) : (
          <>
            <p className="font-mono text-[13px] text-mute mb-3 tracking-wide uppercase">Browse All</p>
            <h1
              className="text-ink font-normal mb-10"
              style={{ fontSize: 'clamp(38px, 5vw, 72px)', letterSpacing: '-2px', lineHeight: '1.05' }}
            >
              All Blogs
            </h1>
          </>
        )}

        {/* Category filter chips */}
        {!loading && (
          <div className="flex flex-wrap gap-2 mb-12">
            {["All", ...categories].map((cat) => {
              const isActive = cat === activeCategory;
              return (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`font-mono text-[11px] uppercase tracking-widest px-4 py-1.5 rounded-full border transition-colors ${
                    isActive
                      ? "bg-ink text-on-primary border-ink"
                      : "text-mute border-hairline hover:border-ink hover:text-ink"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        )}

        {loading ? (
          <ArticleGridSkeleton count={6} />
        ) : filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filtered.map((article) => (
              <ArticalCard
                key={article.id}
                article={{ id: article.id, ...article.data() }}
              />
            ))}
          </div>
        ) : (
          <div className="py-24 text-center">
            <p className="font-mono text-[11px] uppercase tracking-widest text-mute mb-3">No results</p>
            <p className="text-ink text-[20px] font-normal mb-6">No posts in &quot;{activeCategory}&quot; yet.</p>
            <button
              onClick={() => setCategory("All")}
              className="text-[14px] text-slate underline underline-offset-4 hover:text-ink transition-colors"
            >
              View all posts
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default AllBlogs;
