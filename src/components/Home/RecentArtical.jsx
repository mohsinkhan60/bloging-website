import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../firebase";
import ArticalCard from "./ArticalCard";
import { ArticleGridSkeleton, SectionHeaderSkeleton } from "../ui/Skeletons";
import { RefreshCw, AlertCircle } from "lucide-react";

export const RecentArticle = () => {
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchBlogs = async () => {
    setLoading(true);
    setError(false);
    try {
      const q = query(collection(db, "user"), orderBy("date"), limit(6));
      const snap = await getDocs(q);
      setRecentBlogs(snap.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchBlogs(); }, []);

  return (
    <section className="bg-canvas-light py-24">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        {loading ? <SectionHeaderSkeleton /> : (
          <div className="mb-12">
            <p className="font-mono text-[13px] text-mute mb-3 tracking-wide uppercase">Latest Posts</p>
            <h2 className="text-ink font-normal" style={{ fontSize: "clamp(32px,4vw,48px)", letterSpacing: "-1.68px", lineHeight: "1.08" }}>
              Recent Blogs
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
            <p className="text-ink text-[17px] font-normal mb-2">Could not load recent posts</p>
            <p className="text-slate text-[14px] mb-6">Check your connection and try again.</p>
            <button onClick={fetchBlogs} className="inline-flex items-center gap-2 bg-ink text-on-primary text-[14px] font-medium px-5 h-10 rounded-full hover:bg-graphite transition-colors">
              <RefreshCw className="w-4 h-4" /> Retry
            </button>
          </div>
        ) : recentBlogs.length === 0 ? (
          <div className="py-20 text-center">
            <p className="font-mono text-[11px] uppercase tracking-widest text-mute mb-3">Nothing here yet</p>
            <p className="text-ink text-[20px] font-normal">No recent posts published.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {recentBlogs.map((article) => (
              <ArticalCard key={article.id} article={article} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default RecentArticle;
