import SpecialCards from "./SpecialCards";



export const Special = () => {
  // Sample data for articles
  const articles = [
    {
      id: 1,
      title: "Create beautiful designs gatsby convert more...",
      author: "roderick",
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical literature from 459, making it over 2000 years old...",
      date: "2021-03-25",
      readTime: "10 min read"
    },
    {
      id: 2,
      title: "All of these special features come at an affordable price!",
      author: "roderick",
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical literature from 459, making it over 2000 years old...",
      date: "2021-04-15",
      readTime: "10 min read"
    }
  ];

  return (
   <>
   <div className="container mx-auto px-6 sm:px-10 lg:px-20 my-20">
      <h2 className="text-4xl font-bold text-indigo-900 text-center mb-10 flex ">Special For Beginner</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left side - Image */}
        <div>
          <img
            src="/HomePic/special1.webp"
            alt="Special for beginner"
            className="rounded-lg w-full object-cover"
          />
        </div>

        {/* Right side - Articles */}
        <div className="space-y-8">
          {articles.map((article) => (
            <div key={article.id} className="border-b pb-6">
              <p className="text-sm text-gray-500">By {article.author}</p>
              <h3 className="text-xl font-semibold text-indigo-900">{article.title}</h3>
              <p className="text-gray-600">{article.description}</p>
              <div className="text-sm text-gray-500 mt-2">
                <span>{article.date}</span> &bull; <span>{article.readTime}</span>
              </div>
            </div>
          ))}
          
        </div>
        
      </div>
      
    </div>
    <SpecialCards />
    </>
  );
};
export default Special