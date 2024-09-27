export const RecentArtical = () => {
   const articles = [
     {
       id: 1,
       image: "/HomePic/Recent1.webp",
       author: "Hasan",
       title: "Make your store stand out from the others by...",
       description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical literature from 45...",
       date: "15 June 2021",
       readTime: "10 min read"
     },
     {
       id: 2,
       image: "/HomePic/Recent2.webp",
       author: "Roderick",
       title: "Customize your WooCommerce store with countless Web",
       description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical literature from 45...",
       date: "08 June 2021",
       readTime: "10 min read"
     },
     {
       id: 3,
       image: "/HomePic/Recent3.webp",
       author: "Jowel",
       title: "Make your store stand out from the others by converting..",
       description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical literature from 45...",
       date: "06 June 2021",
       readTime: "10 min read"
     }
   ];
 
   return (
      <div className="container mx-auto px-6 sm:px-10 lg:px-20 my-20">
       <h2 className="text-4xl font-bold text-center text-indigo-900 mb-8">Recent Article</h2>
       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         {articles.map((article) => (
           <div key={article.id} className="bg-white rounded-lg overflow-hidden">
             <img src={article.image} alt={article.title} className="w-full h-70 object-cover rounded-t-lg rounded-b-lg" />
             <div className="p-6">
               <p className="text-sm text-gray-600 mb-2">By {article.author}</p>
               <h3 className="text-xl font-semibold text-indigo-900 mb-2">{article.title}</h3>
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
 }
export default RecentArtical