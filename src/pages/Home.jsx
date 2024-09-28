import Header from "../components/Home/Header";
import PopularSection from "../components/Home/PopularSection";
import RecentArtical from "../components/Home/RecentArtical";
import Special from "../components/Home/Special";

export const Home = () => {
  return (
    <div>
      <Header />
      <PopularSection />
      <RecentArtical />
      <Special />
    </div>
  );
};
export default Home;
