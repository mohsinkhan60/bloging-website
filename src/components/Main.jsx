import Header from "../pages/Home/Header"
import PopularSection from "../pages/Home/PopularSection"
import RecentArtical from "../pages/Home/RecentArtical"
import Special from "../pages/Home/Special"


export const Main = () => {
  return (
    <div>
      <Header />
      <PopularSection />
      <RecentArtical />
      <Special />
    </div>
  )
}
export default Main