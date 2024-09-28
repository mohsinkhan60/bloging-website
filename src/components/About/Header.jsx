
export const Header = () => {
  return (
    <div className="container mx-auto px-6 sm:px-10 lg:px-20 my-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: Open Platform */}
        <div className="bg-[#FAFAFA] p-6 rounded-lg shadow-md md:col-span-1">
          <div className="bg-peach-200 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
            <img
              src="/AboutPic/Header1.webp"
              className="bg-[#ffc4a0] p-2 rounded-lg"
              alt="Open Platform icon"
            />
          </div>
          <h2 className="text-2xl font-bold mb-4">Open Platform</h2>
          <p className="text-gray-600 mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry has been the industry standard dummy text ever since the
            1500s when an unknown printer took galley type and scrambled.
          </p>
          <p className="text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry has been the industry standard.
          </p>
        </div>

        {/* Column 2: Digital Publishing with Image */}
        <div className="bg-[#FAFAFA] p-6 rounded-lg shadow-md relative md:col-span-2 sm:flex flex-row grid grid-cols-1 md:grid-cols-3">
          <div>
            <div className="bg-peach-200 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
              <img
                src="/AboutPic/Header2.webp"
                className="bg-[#ffc4a0] p-2 rounded-lg"
                alt="Digital Publishing icon"
              />
            </div>
            <h2 className="text-2xl font-bold mb-4">Digital Publishing</h2>
            <p className="text-gray-600 mb-4">
              Lorem Ipsum is simply dummy text of the printing and
              <br /> typesetting industry has been the industry standard dummy
              text ever
              <br /> since the 1500s when an unknown printer took galley type
              and scrambled.
            </p>
            <p className="text-gray-600 mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              <br />
              industry has been the industry standard.
            </p>
          </div>

          {/* Image Section integrated within the second column */}
          <div className="mt-6 relative rounded-lg overflow-hidden">
            <img
              src="/AboutPic/Header3.webp"
              className="w-full h-full object-cover"
              alt="Person using a laptop"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
              <button className="bg-peach-400 bg-[#ffc4a0] text-black px-6 py-3 rounded-full hover:bg-peach-500 transition duration-300 flex items-center">
                Share your thinking
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
