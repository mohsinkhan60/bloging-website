import { ArrowLeft, ArrowRight } from "lucide-react"

const articles = [
  {
    id: 1,
    image: "/HomePic/popular.webp",
    author: "Hasan",
    title: "Customize your WooCommerce store with countless design",
    date: "2021-02-01",
    readTime: "10 min read"
  },
  {
    id: 2,
    image: "/HomePic/popular2.webp",
    author: "Jowel",
    title: "With WooLentor's drag-and-drop interface for creating custom",
    date: "2021-01-02",
    readTime: "10 min read"
  },
  {
    id: 3,
    image: "/HomePic/popular3.webp",
    author: "Roderick",
    title: "WooCommerce comes with an intuitive drag-and-drop...",
    date: "2021-06-04",
    readTime: "10 min read"
  }
]

export const PopularSection = () => {
  return (
     <div className="container mx-auto px-6 sm:px-10 lg:px-20 my-20">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-4xl font-bold text-purple-900">Most Popular</h2>
        <div className="flex space-x-2">
          <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
            <ArrowRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div key={article.id} className=" overflow-hidden">
            <img src={article.image} alt={article.title} className="w-full h-70 object-cover rounded-t-lg rounded-b-lg" />
            <div className="p-4">
              <p className="text-sm text-gray-600 mb-2">By {article.author}</p>
              <h3 className="text-xl font-semibold text-purple-900 mb-2">{article.title}</h3>
              <p className="text-sm text-gray-600">{article.date} • {article.readTime}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default PopularSection