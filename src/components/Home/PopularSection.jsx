import { useEffect, useState } from "react";
import { getPopularBlogs } from "../../../firebase";
import ArticalCard from "./ArticalCard";
import { ArticleGridSkeleton, SectionHeaderSkeleton } from "../ui/Skeletons";
import { RefreshCw, AlertCircle } from "lucide-react";

export const PopularSection = () => {
  const [popularBlogs, setPopularBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchBlogs = () => {
    setLoading(true);
    setError(false);
    getPopularBlogs()
      .then((result) => { if (result) setPopularBlogs(result.docs); })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  };

  useEffect(() => { fetchBlogs(); }, []);

  return (
    <section className="bg-canvas-paper py-24">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        {loading ? <SectionHeaderSkeleton /> : (
          <div className="mb-12">
            <p className="font-mono text-[13px] text-mute mb-3 tracking-wide uppercase">Trending Now</p>
            <h2 className="text-ink font-normal" style={{ fontSize: "clamp(32px,4vw,48px)", letterSpacing: "-1.68px", lineHeight: "1.08" }}>
              Most Popular
            </h2>
          </div>
        )}

        {loading ? (
          <ArticleGridSkeleton count={6} />
        ) : error ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-error/10 mb-5">
              <AlertCircle className="w-5 h-5 text-error" />
            </div>
            <p className="text-ink text-[17px] font-normal mb-2">Could not load popular posts</p>
            <p className="text-slate text-[14px] mb-6">Check your connection and try again.</p>
            <button onClick={fetchBlogs} className="inline-flex items-center gap-2 bg-ink text-on-primary text-[14px] font-medium px-5 h-10 rounded-full hover:bg-graphite transition-colors">
              <RefreshCw className="w-4 h-4" /> Retry
            </button>
          </div>
        ) : popularBlogs.length === 0 ? (
          <div className="py-20 text-center">
            <p className="font-mono text-[11px] uppercase tracking-widest text-mute mb-3">Nothing here yet</p>
            <p className="text-ink text-[20px] font-normal">No popular posts yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {popularBlogs.map((article) => (
              <ArticalCard key={article.id} article={{ id: article.id, ...article.data() }} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PopularSection;
