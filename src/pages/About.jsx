import BunzoLayout from "../components/About/BunzoLayout";
import Header from "../components/About/Header";
import SubscribeButton from "../components/About/SubscribeButton";
import Team from "../components/About/Team";
import Testimonial from "../components/About/Testimonial";

export const About = () => {
  return (
    <div>
      <Header />
      <BunzoLayout />
      <Team />
      <Testimonial />
      <SubscribeButton />
    </div>
  );
};
export default About;
