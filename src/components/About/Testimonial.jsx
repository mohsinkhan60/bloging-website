import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Rosario Ferraro",
    role: "MARKETER",
    image: "/AboutPic/team-6.webp",
    content:
      "Printer took a galley of type and standard unknown printer took galley text printing and typesetting industry been industry standard dummy ever.",
  },
  {
    name: "Sherika Hankins",
    role: "FOUNDER",
    image: "/AboutPic/team-7.webp",
    content:
      "Printer of type and scrambled to make book. Printer took galley text printing and typesetting industry been industry standard dummy ever.",
  },
  {
    name: "Sherika Hankins",
    role: "FOUNDER",
    image: "/AboutPic/team-8.webp",
    content:
      "Bio to make book. Lorem has been them indust standard unknown printer took galley text printing and typesetting industry been industry standard dummy ever.",
  },
  {
    name: "Uosario Tayraro",
    role: "MARKETER",
    image: "/AboutPic/team-5.webp",
    content:
      "Printer took a galley of type and standard unknown printer took galley text printing and typesetting industry been industry standard dummy ever..",
  },
  {
    name: "Herika Ykins",
    role: "FOUNDER",
    image: "/AboutPic/team-4.webp",
    content:
      "Printer took a galley of type and standard unknown printer took galley text printing and typesetting industry been industry standard dummy ever.",
  },
  {
    name: "Geriua Inkins",
    role: "FOUNDER",
    image: "/AboutPic/team-3.webp",
    content:
      "Printer took a galley of type and standard unknown printer took galley text printing and typesetting industry been industry standard dummy ever.",
  },
];

export const Testimonial = () => {
  const [showSlides, setShowSlides] = useState(3);
  const [startingSlide, setStartingSlide] = useState(0);

  const nextTestimonials = () => {
    if (showSlides > testimonials?.length - 1) {
      setShowSlides(3);
      setStartingSlide(0);
    } else {
      setShowSlides(showSlides + 1);
      setStartingSlide(startingSlide + 1);
    }
  };

  const prevTestimonials = () => {
    if (showSlides < testimonials?.length - 1) {
      setShowSlides(3);
      setStartingSlide(0);
    } else {
      setShowSlides(showSlides - 1);
      setStartingSlide(startingSlide - 1);
    }
  };

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 container mx-auto my-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl font-semibold text-gray-600 text-center mb-2">
          Some Testimonial
        </h2>
        <h3 className="text-4xl font-bold text-gray-900 text-center mb-12">
          What People Say About Us
        </h3>
        <div className="flex items-center gap-8 ">
          {testimonials
            .slice(startingSlide, showSlides)
            .map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 ">
                <div className="flex items-center mb-4">
                  <img
                    className="h-16 w-16 rounded-full mr-4"
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm font-medium text-orange-500">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600">{testimonial.content}</p>
              </div>
            ))}
        </div>

        {/* Arrow Buttons */}
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
  );
};

export default Testimonial;
