export default function BunzoLayout() {
   return (
    <div className="container mx-auto px-6 sm:px-10 lg:px-20 my-20">
       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
         <div className="text-4xl border-t border-b border-r p-20 sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight">
           <h1>
             You Can <span className="font-normal">Read</span>
             <br />
             And <span className="font-normal">Write</span> With
             <br />
             <span className="font-normal">Bunzo.</span>
           </h1>
         </div>
         <div className="space-y-12">
           <section className="border-t ">
             <h2 className="text-2xl sm:text-3xl font-bold mb-4">Mission & Vision</h2>
             <p className="text-gray-60\">
               Lorem Ipsum is simply dummy text of the printing and typesetting
               industry. Lorem Ipsum has been the industry standard dummy text
               eve since the 1500 when an unknown printer took a galley type
               scrambled make a type specimen book. It has survived not only five
               centuries also the leap into electronic typesetting.
             </p>
           </section>
           <section className="border-t border-b p-4">
             <h2 className="text-2xl sm:text-3xl font-bold mb-4">Bunzo History</h2>
             <p className="text-gray-600">
               Lorem Ipsum is simply dummy text of the printing and typesetting
               industry. Lorem Ipsum has been the industry standard dummy text
               eve since the 1500 when an unknown printer took a galley type
               scrambled make a type specimen book. It has survived not only five
               centuries also the leap into electronic typesetting.
             </p>
           </section>
         </div>
       </div>
     </div>
   );
 }