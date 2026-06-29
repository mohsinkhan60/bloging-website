import { PencilLineIcon, Trash2Icon, AlertCircle, RefreshCw, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { auth, deleteUserData, getImageURL, getUserById } from "../../firebase";
import { toast } from "react-toastify";
import { BlogDetailSkeleton } from "../components/ui/Skeletons";

export const UserDetails = () => {
  const param = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [url, setURL] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deleting, setDeleting] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  const fetchBlog = () => {
    setLoading(true);
    setError(null);
    getUserById(param.id)
      .then((value) => {
        const d = value.data();
        if (!d) setError("not-found");
        else setData(d);
      })
      .catch(() => setError("fetch-failed"))
      .finally(() => setLoading(false));
  };

  useEffect(() => { fetchBlog(); }, [param.id]); // eslint-disable-line

  useEffect(() => {
    if (data) {
      const imgURL = data.image || data.imageURL;
      getImageURL(imgURL).then((u) => setURL(u)).catch(() => {});
    }
  }, [data]);

  const handleDelete = async () => {
    setDeleting(true);
    try {
      await deleteUserData(param.id);
      toast.success("Blog post deleted.");
      navigate("/");
    } catch {
      toast.error("Failed to delete. Please try again.");
      setDeleting(false);
      setConfirmDelete(false);
    }
  };

  const isOwner = auth.currentUser?.uid === data?.userId;

  return (
    <div className="bg-canvas-light min-h-screen pt-24 pb-24">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        {loading ? (
          <BlogDetailSkeleton />
        ) : error === "not-found" ? (
          <div className="max-w-3xl mx-auto text-center py-28">
            <p className="font-mono text-[11px] uppercase tracking-widest text-mute mb-4">404</p>
            <h1 className="text-ink font-normal mb-4" style={{ fontSize: "clamp(28px,4vw,48px)", letterSpacing: "-1.5px" }}>Post not found</h1>
            <p className="text-slate text-[15px] mb-8">This post may have been deleted or the link is incorrect.</p>
            <Link to="/all-blogs" className="bg-ink text-on-primary text-[14px] font-medium px-6 h-10 rounded-full hover:bg-graphite transition-colors inline-flex items-center">
              Browse all posts
            </Link>
          </div>
        ) : error === "fetch-failed" ? (
          <div className="max-w-3xl mx-auto text-center py-28">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-error/10 mb-6">
              <AlertCircle className="w-5 h-5 text-error" />
            </div>
            <h2 className="text-ink font-normal text-[22px] mb-3">Failed to load post</h2>
            <p className="text-slate text-[15px] mb-8">Something went wrong fetching this post. Check your connection and try again.</p>
            <button onClick={fetchBlog} className="inline-flex items-center gap-2 bg-ink text-on-primary text-[14px] font-medium px-6 h-10 rounded-full hover:bg-graphite transition-colors">
              <RefreshCw className="w-4 h-4" /> Retry
            </button>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto">
            {url ? (
              <img src={url} alt={data.title} className="w-full max-h-[28rem] object-cover rounded-marketing mb-10" />
            ) : data?.image || data?.imageURL ? (
              <div className="w-full h-80 rounded-marketing mb-10 animate-pulse bg-canvas-paper" />
            ) : null}

            <div className="flex items-start justify-between gap-4 mb-6">
              <h1 className="text-ink font-normal" style={{ fontSize: "clamp(28px,4vw,48px)", letterSpacing: "-1.68px", lineHeight: "1.1" }}>
                {data.title}
              </h1>
              {isOwner && (
                <div className="flex items-center gap-3 flex-shrink-0 mt-1">
                  <Link to={`/edit-blog/${param?.id}`} className="p-2 rounded-app-md border border-hairline text-slate hover:text-ink hover:border-ink transition-colors" title="Edit post">
                    <PencilLineIcon className="w-4 h-4" />
                  </Link>
                  <button onClick={() => setConfirmDelete(true)} className="p-2 rounded-app-md border border-hairline text-slate hover:text-error hover:border-error transition-colors" title="Delete post">
                    <Trash2Icon className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>

            <p className="font-mono text-[13px] text-mute uppercase tracking-widest mb-8">By {data.author}</p>
            <p className="text-slate text-[16px] leading-relaxed mb-4">{data.description}</p>

            {data.tags && (
              <div className="flex flex-wrap gap-2 mb-8">
                {data.tags.split(",").map((tag) => (
                  <span key={tag.trim()} className="font-mono text-[11px] text-mute border border-hairline px-3 py-1 rounded-full uppercase tracking-widest">
                    {tag.trim()}
                  </span>
                ))}
              </div>
            )}

            <hr className="border-hairline mb-10" />
            <div className="blog-content" dangerouslySetInnerHTML={{ __html: data.content }} />
          </div>
        )}
      </div>

      {/* Delete confirmation modal */}
      {confirmDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/40 backdrop-blur-sm px-4">
          <div className="bg-canvas-light rounded-marketing p-8 max-w-sm w-full shadow-xl">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-error/10 mb-5">
              <Trash2Icon className="w-4 h-4 text-error" />
            </div>
            <h3 className="text-ink font-medium text-[18px] mb-2">Delete this post?</h3>
            <p className="text-slate text-[14px] leading-relaxed mb-6">This action cannot be undone. The post will be permanently removed.</p>
            <div className="flex gap-3">
              <button onClick={() => setConfirmDelete(false)} disabled={deleting} className="flex-1 h-10 border border-hairline rounded-full text-[14px] text-slate hover:border-ink hover:text-ink transition-colors">
                Cancel
              </button>
              <button onClick={handleDelete} disabled={deleting} className="flex-1 h-10 bg-error text-on-primary rounded-full text-[14px] font-medium hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2">
                {deleting && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
                {deleting ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
