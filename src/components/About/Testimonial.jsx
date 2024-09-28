
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'
// import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
   {
      name: "Rosario Ferraro",
      role: "MARKETER",
      image: "/AboutPic/team-6.webp",
      content: "Printer took a galley of type and  standard unknown printer took galley text printing and typesetting industry been industry standard dummy ever."
    },
    {
      name: "Sherika Hankins",
      role: "FOUNDER",
      image: "/AboutPic/team-7.webp",
      content: "Printer  of type and scrambled to make book.printer took galley text printing and typesetting industry been industry standard dummy ever."
    },
    {
      name: "Sherika Hankins",
      role: "FOUNDER",
      image: "/AboutPic/team-8.webp",
      content: "Bio to make book. Lorem has been them indust standard unknown printer took galley text printing and typesetting industry been industry standard dummy ever."
    },   
    {
      name: "Uosario tayraro",
      role: "MARKETER",
      image: "/AboutPic/team-5.webp",
      content: "Printer took a galley of type and scramt standard unknown printer took galley text printing and typesetting industry been industry standard dummy ever."
    },
    {
      name: "Herika Ykins",
      role: "FOUNDER",
      image: "/AboutPic/team-4.webp",
      content: "Printer took a galley of type and scrambled to make book. Lorem has been them indust standard unknown printer took galley text printing and typesetting industry been industry standard dummy ever."
    },
    {
      name: "Geriua Inkins",
      role: "FOUNDER",
      image: "/AboutPic/team-3.webp",
      content: "Printer took a galley of type and scrambled to make book. Lorem has been them indust standard unknown printer took galley text printing and typesetting industry been industry standard dummy ever."
    },
]

export const Testimonial = () => {
  const [startIndex, setStartIndex] = useState(0)

  const nextTestimonials = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonials = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const displayedTestimonials = [
    testimonials[startIndex],
    testimonials[(startIndex + 1) % testimonials.length],
    testimonials[(startIndex + 2) % testimonials.length]
  ]

  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8 container mx-auto my-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl font-semibold text-gray-600 text-center mb-2">Some Testimonial</h2>
        <h3 className="text-4xl font-bold text-gray-900 text-center mb-12">What People Say About Us</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {displayedTestimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 ">
              <div className="flex items-center mb-4">
                <img className="h-16 w-16 rounded-full mr-4" src={testimonial.image} alt={testimonial.name} />
                <div>
                  <h4 className="text-xl font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm font-medium text-orange-500">{testimonial.role}</p>
                </div>
              </div>
              <div className="mb-4 border-b border-gray-200"></div>
              <p className="text-lg font-semibold text-gray-800 mb-2">Printer took a galley of type and scrambled to make book.</p>
              <p className="text-gray-600">{testimonial.content}</p>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-8">
          <button 
            className="bg-orange-300 rounded-full p-2 mr-4 hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
            onClick={prevTestimonials}
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>
          <button 
            className="bg-orange-300 rounded-full p-2 hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
            onClick={nextTestimonials}
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>
        </div>
      </div>
    </div>
  )
}
export default Testimonial