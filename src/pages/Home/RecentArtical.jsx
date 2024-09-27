export const RecentArtical = () => {
  const articles = [
    {
      id: 1,
      image: "/HomePic/Recent1.webp",
      author: "Hasan",
      title: "Make your store stand out from the others by...",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical literature from 45...",
      date: "15 June 2021",
      readTime: "10 min read",
    },
    {
      id: 2,
      image: "/HomePic/Recent2.webp",
      author: "Roderick",
      title: "Customize your WooCommerce store with countless Web",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical literature from 45...",
      date: "08 June 2021",
      readTime: "10 min read",
    },
    {
      id: 3,
      image: "/HomePic/Recent3.webp",
      author: "Jowel",
      title: "Make your store stand out from the others by converting..",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical literature from 45...",
      date: "06 June 2021",
      readTime: "10 min read",
    },
    {
      id: 4,
      image: "/HomePic/popular3.webp",
      author: "Roderick",
      title: "WooCommerce comes with an intuitive drag-and-drop...",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical literature from 45...",
      date: "04 June 2021",
      readTime: "10 min read",
    },
    {
      id: 5,
      image: "/HomePic/Recent4.webp",
      author: "Roderick",
      title: "All of these special features come at an affordable price!",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical literature from 45...",
      date: "15 April 2021",
      readTime: "10 min read",
    },
    {
      id: 6,
      image: "/HomePic/Recent5.webp",
      author: "Roderick",
      title: "Create beautiful designs gatsby convert more...",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical literature from 45...",
      date: "25 March 2021",
      readTime: "10 min read",
    },
    {
      id: 7,
      image: "/HomePic/Recent6.webp",
      author: "Hasan",
      title: "WooCommerce with intuitive drag-and-drop",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical literature from 45...",
      date: "25 March 2021",
      readTime: "10 min read",
    },
    {
      id: 8,
      image: "/HomePic/Recent7.webp",
      author: "Jowel",
      title: "All of these special-features come at an affordable price!",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical literature from 45...",
      date: "25 March 2021",
      readTime: "10 min read",
    },
    {
      id: 9,
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
      <h2 className="text-4xl font-bold text-center text-indigo-900 mb-8">
        Recent Article
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
      <div className="container mx-auto px-6 sm:px-10 lg:px-20 my-20">
        <div className="bg-gradient-to-r rounded-2xl from-blue-600 via-blue-700 to-indigo-800 p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="block">28k People Receive Weekly</span>
            <span className="block">WordPress Related Newsletter.</span>
          </h2>
          <button
            className="mt-6 px-6 py-3 bg-coral-400 hover:bg-coral-500 bg-orange-500 text-white font-semibold rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-coral-300 focus:ring-opacity-50"
            aria-label="Subscribe to newsletter"
          >
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  );
};
export default RecentArtical;
