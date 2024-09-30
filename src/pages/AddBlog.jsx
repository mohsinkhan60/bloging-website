/* eslint-disable no-unused-vars */
import { UploadCloudIcon } from "lucide-react";
import { useState } from "react";
import { FaFolder, FaPlus, FaTags } from "react-icons/fa";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";
import { handleCreateListing } from "../../firebase";

const AddBlog = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    image: "",
    title: "",
    author: "",
    description: "",
    category: "",
    tags: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleContentChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      content: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { image, title, author, description, category, tags } = formData;
    if (!image || !title || !author || !description) {
      console.log("Please fill out all required fields.");
      return;
    }
    await handleCreateListing(image, title, author, description, category, tags);
  };


  return (
    <div className="container mx-auto p-4 pt-20 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Add New Blog Post</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex items-center justify-center bg-white p-4">
          {formData.image ? (
            <img
              src={URL.createObjectURL(formData.image)}
              alt="Uploaded Preview"
              className="w-80 max-w-md h-64 object-cover p-2 border "
            />
          ) : (
            <div
              className={`w-80 max-w-md h-64 border-2 border-dashed rounded-lg p-4 flex flex-col items-center justify-center text-center cursor-pointer transition-colors relative`}
            >
              <input
                type="file"
                name="image"
                onChange={handleImageChange}
                className="absolute inset-0 opacity-0"
              />
              <UploadCloudIcon className="size-8" />
              <p className="text-lg font-semibold text-gray-700 mb-2">
                Drag your image here, or Browse
              </p>
              <p className="text-sm text-gray-500">Support JPG, PNG, JPEG files</p>
            </div>
          )}
        </div>

        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter blog title"
            required
          />
        </div>
        <div>
          <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-1">
            Author
          </label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter author"
            required
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="5"
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter a description..."
          />
        </div>

        <div className="flex space-x-4">
          <div className="flex-1">
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
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
            />
          </div>
          <div className="flex-1">
            <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-1">
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
            />
          </div>
        </div>

        <div>
          <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
            Content
          </label>
          <ReactQuill
            theme="snow"
            value={formData.content}
            onChange={handleContentChange}
            className="h-64 mb-12"
          />
        </div>

        <div onClick={() => navigate("/")}>
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <FaPlus className="mr-2" />
            Publish Blog Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBlog;
