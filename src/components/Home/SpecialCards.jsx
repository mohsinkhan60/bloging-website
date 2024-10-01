export const SpecialCards = () => {
  const articles = [
    {
      id: 1,
      image: "/HomePic/Recent6.webp",
      author: "Hasan",
      title: "WooCommerce with intuitive drag-and-drop",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical literature from 45...",
      date: "25 March 2021",
      readTime: "10 min read",
    },
    {
      id: 2,
      image: "/HomePic/Recent7.webp",
      author: "Jowel",
      title: "All of these special-features come at an affordable price!",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical literature from 45...",
      date: "25 March 2021",
      readTime: "10 min read",
    },
    {
      id: 3,
      image: "/HomePic/Recent8.webp",
      author: "Jowel",
      title: "Customize i WooCommerce theme-with-countless Video",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical literature from 45...",
      date: "20 March 2021",
      readTime: "10 min read",
    },
  ];

  return (
    <div className="container mx-auto px-6 sm:px-10 lg:px-20 my-20">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {articles.map((article) => (
          <div key={article.id} className="bg-white rounded-lg overflow-hidden">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-70 object-cover rounded-t-lg rounded-b-lg"
            />
            <div className="p-6">
              <p className="text-sm text-gray-600 mb-2">By {article.author}</p>
              <h3 className="text-xl font-semibold text-indigo-900 mb-2">
                {article.title}
              </h3>
              <p className="text-gray-600 mb-4">{article.description}</p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>{article.date}</span>
                <span>{article.readTime}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default SpecialCards;
