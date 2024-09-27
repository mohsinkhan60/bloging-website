/* eslint-disable react/prop-types */


export const CategoryButton = ({ children }) => (
   <button className="px-6 py-2 text-[#FF7D6B] rounded-lg border border-white hover:border-[#FF7D6B] hover:bg-[#FF7D6B] hover:text-white transition-colors duration-300">
     {children}
   </button>
 )
 
 export const Header = () => {
   return (
     <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-purple-900 overflow-hidden">
       <div className="relative z-10 text-center px-4">
         <h2 className="text-orange-400 text-xl md:text-2xl font-semibold mb-4">
           ALL SOLUTION IN ONE
         </h2>
         <h1 className="text-white text-4xl md:text-6xl font-bold mb-8">
           Unlimited
           <br />
           Advice, Tutorial, Resource
         </h1>
         <div className="flex flex-wrap justify-center gap-4">
           <CategoryButton>Video</CategoryButton>
           <CategoryButton>Education</CategoryButton>
           <CategoryButton>Technology</CategoryButton>
           <CategoryButton>Marketing</CategoryButton>
           <CategoryButton>Food</CategoryButton>
           <CategoryButton>Business</CategoryButton>
           <CategoryButton>Doctor</CategoryButton>
         </div>
       </div>
     </div>
   )
 }
 
 
 export default Header