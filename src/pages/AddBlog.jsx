/* eslint-disable no-unused-vars */
import { UploadCloudIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { FaFolder, FaPlus, FaTags } from "react-icons/fa";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { toast } from "react-toastify";
import firebase, {
  auth,
  db,
  getImageURL,
  handleCreateListing,
  updateBlogPost,
  updateUserData,
} from "../../firebase";
import { useNavigate, useParams } from "react-router-dom";

const AddBlog = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [originalImagePath, setOriginalImagePath] = useState(""); // Store original image path
  const [imageChanged, setImageChanged] = useState(false); // Track if image was changed
  const [isLoading, setIsLoading] = useState(false); // Loading state

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
      if (!id) return; // Only run if we have an id (editing mode)

      try {
        setIsLoading(true);
        const response = await updateUserData(id);

        // Store the original image path for updates
        setOriginalImagePath(response?.image || response?.imageURL || "");

        const url = await getImageURL(response?.image || response.imageURL).then(
          (url) => url
        );

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
        
        toast.success("Blog details loaded successfully!");
      } catch (error) {
        console.error("Error loading blog details:", error);
        toast.error("Failed to load blog details. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };
    getBlogDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type
      const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
      if (!validTypes.includes(file.type)) {
        toast.error("Please select a valid image file (JPG, PNG, JPEG, WEBP)");
        return;
      }

      // Validate file size (5MB limit)
      const maxSize = 5 * 1024 * 1024; // 5MB in bytes
      if (file.size > maxSize) {
        toast.error("Image size should be less than 5MB");
        return;
      }

      setFormData({ ...formData, image: file });
      setImageChanged(true); // Mark that image has been changed
      toast.success("Image selected successfully!");
    }
  };

  const handleContentChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      content: value,
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
        
    try {
      setIsLoading(true);
      toast.info("Creating your blog post...");
      
      const { image, title, author, description, category, tags, content, date } = formData;
      
      await handleCreateListing(
        auth.currentUser?.uid,
        image,
        title,
        author,
        description,
        category,
        tags,
        content,
        date
      );
      
      toast.success("Blog post published successfully! 🎉");
      setTimeout(() => {
        navigate("/");
      }, 1500);
      
    } catch (error) {
      console.error("Error creating blog post:", error);
      toast.error("Failed to publish blog post. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      toast.info("Updating your blog post...");

      // Prepare the data for update
      const updateData = { ...formData };

      // If image hasn't been changed, use the original image path
      if (!imageChanged) {
        updateData.image = originalImagePath;
      }
      // If image was changed, it will be a File object and will be handled by updateBlogPost

      await updateBlogPost(id, updateData);
      
      toast.success("Blog post updated successfully! ✨");
      setTimeout(() => {
        navigate("/");
      }, 1500);
      
    } catch (error) {
      console.error("Error updating blog post:", error);
      toast.error("Failed to update blog post. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4 pt-20 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">
        {id ? "Edit Blog Post" : "Add New Blog Post"}
      </h1>
      <form className="space-y-6">
        <div className="flex items-center justify-center bg-white p-4 relative w-80 max-w-md h-64 mx-auto">
          <input
            type="file"
            name="image"
            onChange={handleImageChange}
            className="absolute inset-0 opacity-0 z-10"
            accept="image/jpeg,image/jpg,image/png,image/webp"
            disabled={isLoading}
          />
          {formData.image ? (
            <img
              src={
                typeof formData?.image === "object"
                  ? URL.createObjectURL(formData?.image)
                  : formData?.image
              }
              alt="Uploaded Preview"
              className="w-80 max-w-md h-64 object-cover p-2 border "
            />
          ) : (
            <div
              className={`w-80 max-w-md h-64 border-2 border-dashed rounded-lg p-4 flex flex-col items-center justify-center text-center cursor-pointer transition-colors relative ${
                isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:border-indigo-500'
              }`}
            >
              <UploadCloudIcon className="size-8" />
              <p className="text-lg font-semibold text-gray-700 mb-2">
                Drag your image here, or Browse
              </p>
              <p className="text-sm text-gray-500">
                Support JPG, PNG, JPEG, WEBP files (Max 5MB)
              </p>
            </div>
          )}
        </div>

        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Title <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter blog title"
            required
            disabled={isLoading}
          />
        </div>
        
        <div>
          <label
            htmlFor="author"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Author <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter author"
            required
            disabled={isLoading}
          />
        </div>
        
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Description <span className="text-red-500">*</span>
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="5"
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter a description..."
            disabled={isLoading}
          />
        </div>

        <div className="flex space-x-4">
          <div className="flex-1">
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              <FaFolder className="inline mr-2" />
              Category
            </label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter category"
              disabled={isLoading}
            />
          </div>
          <div className="flex-1">
            <label
              htmlFor="tags"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              <FaTags className="inline mr-2" />
              Tags
            </label>
            <input
              type="text"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter tags (comma-separated)"
              disabled={isLoading}
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Content
          </label>
          <ReactQuill
            theme="snow"
            value={formData.content}
            onChange={handleContentChange}
            className="h-64 mb-12"
            readOnly={isLoading}
          />
        </div>

        <div>
          <button
            type="button"
            onClick={id ? handleEdit : handleSubmit}
            disabled={isLoading}
            className={`inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white ${
              isLoading 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            }`}
          >
            <FaPlus className="mr-2" />
            {isLoading 
              ? (id ? "Updating..." : "Publishing...") 
              : (id ? "Update" : "Publish") + " Blog Post"
            }
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBlog;