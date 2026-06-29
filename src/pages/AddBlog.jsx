/* eslint-disable no-unused-vars */
import { UploadCloudIcon, ArrowLeft, ImageIcon, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { toast } from "react-toastify";
import {
  auth,
  getImageURL,
  handleCreateListing,
  updateBlogPost,
  updateUserData,
} from "../../firebase";
import { useNavigate, useParams, Link } from "react-router-dom";
import { FormSkeleton } from "../components/ui/Skeletons";

const AddBlog = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [originalImagePath, setOriginalImagePath] = useState("");
  const [imageChanged, setImageChanged] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(!!id);

  const [formData, setFormData] = useState({
    image: "",
    title: "",
    author: "",
    description: "",
    category: "",
    tags: "",
    content: "",
    date: Date.now(),
  });

  useEffect(() => {
    const getBlogDetails = async () => {
      if (!id) return;
      try {
        setIsFetching(true);
        const response = await updateUserData(id);
        setOriginalImagePath(response?.image || response?.imageURL || "");
        const url = await getImageURL(response?.image || response.imageURL);
        setFormData({
          image: url || response?.image || response?.imageURL || "",
          title: response?.title || "",
          author: response?.author || "",
          description: response?.description || "",
          category: response?.category || "",
          tags: response?.tags || "",
          content: response?.content || "",
          date: response?.date || Date.now(),
        });
      } catch (error) {
        console.error("Error loading blog details:", error);
        toast.error("Failed to load blog details.");
      } finally {
        setIsFetching(false);
      }
    };
    getBlogDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const validTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
    if (!validTypes.includes(file.type)) {
      toast.error("Please select a valid image file (JPG, PNG, WEBP)");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      toast.error("Image size should be less than 5MB");
      return;
    }
    setFormData((prev) => ({ ...prev, image: file }));
    setImageChanged(true);
  };

  const handleContentChange = (value) => {
    setFormData((prev) => ({ ...prev, content: value }));
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      const {
        image,
        title,
        author,
        description,
        category,
        tags,
        content,
        date,
      } = formData;
      await handleCreateListing(
        auth.currentUser?.uid,
        image,
        title,
        author,
        description,
        category,
        tags,
        content,
        date,
      );
      toast.success("Blog post published!");
      setTimeout(() => navigate("/"), 1200);
    } catch (error) {
      console.error(error);
      toast.error("Failed to publish. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = async () => {
    try {
      setIsLoading(true);
      const updateData = { ...formData };
      if (!imageChanged) updateData.image = originalImagePath;
      await updateBlogPost(id, updateData);
      toast.success("Blog post updated!");
      setTimeout(() => navigate("/"), 1200);
    } catch (error) {
      console.error(error);
      toast.error("Failed to update. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const isFormValid =
    formData.title.trim() &&
    formData.author.trim() &&
    formData.description.trim() &&
    formData.image;

  const canSubmit = isFormValid && !isLoading;

  const inputCls = `w-full px-4 py-3 bg-canvas-paper border border-hairline rounded-app-xs text-ink placeholder-mute text-[15px] focus:outline-none focus:bg-canvas-light focus:ring-1 focus:ring-ink focus:border-ink transition-colors ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`;
  const labelCls =
    "block font-mono text-[10px] uppercase tracking-widest text-mute mb-2";

  const imagePreviewSrc = formData.image
    ? typeof formData.image === "object"
      ? URL.createObjectURL(formData.image)
      : formData.image
    : null;

  const btnBase = "h-9 px-6 text-[14px] font-medium rounded-full transition-colors";
  const btnActive = "bg-ink text-on-primary hover:bg-graphite";
  const btnDisabled = "bg-canvas-paper text-mute cursor-not-allowed border border-hairline";

  return (
    <div className="bg-canvas-light min-h-screen pt-16">
      {/* Top bar */}
      <div className="border-b border-hairline bg-canvas-light sticky top-16 z-40">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 h-14 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="flex items-center gap-1.5 text-mute hover:text-ink text-[13px] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </Link>
            <span className="text-hairline select-none">|</span>
            <span className="font-mono text-[11px] uppercase tracking-widest text-mute">
              {id ? "Edit Post" : "New Post"}
            </span>
          </div>

          <button
            type="button"
            onClick={id ? handleEdit : handleSubmit}
            disabled={!canSubmit}
            className={`${btnBase} ${canSubmit ? btnActive : btnDisabled} inline-flex items-center gap-2`}
          >
            {isLoading && (
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
            )}
            {isLoading
              ? id ? "Saving..." : "Publishing..."
              : id ? "Save Changes" : "Publish Post"}
          </button>
        </div>
      </div>

      {isFetching ? (
        <div className="max-w-6xl mx-auto px-6 lg:px-12 pt-10 pb-24">
          <FormSkeleton />
        </div>
      ) : (
        <div className="max-w-6xl mx-auto px-6 lg:px-12 pt-8 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10 items-start">
            {/* ── Left: main content ── */}
            <div className="space-y-7">
              {/* Cover image */}
              <div>
                <p className={labelCls}>Cover Image</p>
                <div className="relative w-full aspect-[16/7] rounded-marketing border border-dashed border-hairline overflow-hidden bg-canvas-paper group">
                  <input
                    type="file"
                    onChange={handleImageChange}
                    className="absolute inset-0 opacity-0 z-10 cursor-pointer"
                    accept="image/jpeg,image/jpg,image/png,image/webp"
                    disabled={isLoading}
                  />
                  {imagePreviewSrc ? (
                    <>
                      <img
                        src={imagePreviewSrc}
                        alt="Cover preview"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/30 transition-colors flex items-center justify-center">
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-canvas-light text-ink text-[13px] font-medium px-4 py-2 rounded-full flex items-center gap-2">
                          <ImageIcon className="w-4 h-4" /> Change image
                        </span>
                      </div>
                    </>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full text-center gap-2">
                      <UploadCloudIcon className="w-8 h-8 text-ash" />
                      <p className="text-[14px] text-slate font-medium">
                        Click or drag to upload cover
                      </p>
                      <p className="text-[12px] text-mute">
                        JPG, PNG, WEBP · Max 5 MB
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Title */}
              <div>
                <p className={labelCls}>Title *</p>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className={inputCls}
                  placeholder="Give your post a clear, compelling title"
                  required
                  disabled={isLoading}
                />
              </div>

              {/* Description */}
              <div>
                <p className={labelCls}>Short Description *</p>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={3}
                  className={`${inputCls} resize-none`}
                  placeholder="A one or two sentence summary shown in blog cards..."
                  disabled={isLoading}
                />
              </div>

              {/* Rich text content */}
              <div>
                <p className={labelCls}>Content</p>
                <div className="rounded-app-xs border border-hairline overflow-hidden [&_.ql-editor]:min-h-[280px] [&_.ql-editor]:text-[15px] [&_.ql-editor]:leading-relaxed [&_.ql-toolbar]:border-b [&_.ql-toolbar]:border-hairline [&_.ql-container]:border-0 [&_.ql-toolbar]:border-0">
                  <ReactQuill
                    theme="snow"
                    value={formData.content}
                    onChange={handleContentChange}
                    readOnly={isLoading}
                  />
                </div>
              </div>
            </div>

            {/* ── Right: metadata sidebar ── */}
            <div className="lg:sticky lg:top-32 space-y-6">
              {/* Author */}
              <div className="bg-canvas-paper rounded-marketing p-6 border border-hairline space-y-5">
                <p className="font-mono text-[10px] uppercase tracking-widest text-mute border-b border-hairline pb-3">
                  Post Details
                </p>

                <div>
                  <p className={labelCls}>Author *</p>
                  <input
                    type="text"
                    name="author"
                    value={formData.author}
                    onChange={handleChange}
                    className={`w-full px-3 py-2.5 bg-canvas-light border border-hairline rounded-app-xs text-ink placeholder-mute text-[14px] focus:outline-none focus:ring-1 focus:ring-ink focus:border-ink transition-colors ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
                    placeholder="Author name"
                    required
                    disabled={isLoading}
                  />
                </div>

                <div>
                  <p className={labelCls}>Category</p>
                  <input
                    type="text"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className={`w-full px-3 py-2.5 bg-canvas-light border border-hairline rounded-app-xs text-ink placeholder-mute text-[14px] focus:outline-none focus:ring-1 focus:ring-ink focus:border-ink transition-colors ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
                    placeholder="e.g. Technology"
                    disabled={isLoading}
                  />
                </div>

                <div>
                  <p className={labelCls}>Tags</p>
                  <input
                    type="text"
                    name="tags"
                    value={formData.tags}
                    onChange={handleChange}
                    className={`w-full px-3 py-2.5 bg-canvas-light border border-hairline rounded-app-xs text-ink placeholder-mute text-[14px] focus:outline-none focus:ring-1 focus:ring-ink focus:border-ink transition-colors ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
                    placeholder="Comma-separated"
                    disabled={isLoading}
                  />
                  <p className="text-[11px] text-mute mt-1.5">
                    Separate tags with commas
                  </p>
                </div>
              </div>

              {/* Publish card */}
              <div className="bg-ink rounded-marketing p-6 space-y-4">
                <p className="font-mono text-[10px] uppercase tracking-widest text-mute border-b border-hairline-soft pb-3">
                  {id ? "Save changes" : "Ready to publish?"}
                </p>
                <p className="text-ash text-[13px] leading-relaxed">
                  {id
                    ? "Update your post with the latest content and details."
                    : "Once published, your post will be visible to all readers."}
                </p>
                <button
                  type="button"
                  onClick={id ? handleEdit : handleSubmit}
                  disabled={!canSubmit}
                  className={`w-full h-10 text-[14px] font-medium rounded-full transition-colors inline-flex items-center justify-center gap-2 ${
                    canSubmit
                      ? "bg-canvas-light text-ink hover:bg-canvas-paper"
                      : "bg-canvas-soft text-mute cursor-not-allowed opacity-60"
                  }`}
                >
                  {isLoading && (
                    <svg className="w-3.5 h-3.5 animate-spin" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                  )}
                  {isLoading
                    ? id ? "Saving..." : "Publishing..."
                    : id ? "Save Changes" : "Publish Post"}
                </button>
                {!isFormValid && (
                  <p className="text-[11px] text-mute text-center">
                    Fill in title, author, description and cover image to publish.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddBlog;
