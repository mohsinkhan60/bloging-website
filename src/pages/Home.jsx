import Header from "../components/Home/Header";
import PopularSection from "../components/Home/PopularSection";
import RecentArtical from "../components/Home/RecentArtical";
import Special from "../components/Home/Special";

export const Home = () => {
  return (
    <div>
      <Header />
      <RecentArtical />
      <PopularSection />

      <div className="container mx-auto px-6 sm:px-10 lg:px-20 my-20">
        <div className="container mx-auto my-20">
          <div className="bg-gradient-to-r rounded-2xl from-blue-600 via-blue-700 to-indigo-800 p-8 pt-12 md:pt-16 md:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-4">
              <span className="block">28k People Receive Weekly</span>
              <span className="block">WordPress Related Newsletter.</span>
            </h2>
            <button
              className="mt-6 px-6 py-3 bg-coral-400 hover:bg-coral-500 bg-orange-500 text-white font-semibold rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-coral-300 focus:ring-opacity-50 text-xs md:text-base xl:text-base"
              aria-label="Subscribe to newsletter"
            >
              Subscribe Now
            </button>
          </div>
        </div>
      </div>

      <Special />
    </div>
  );
};
export default Home;
