import BunzoLayout from "../components/About/BunzoLayout";
import Header from "../components/About/Header";
import Team from "../components/About/Team";
import Testimonial from "../components/About/Testimonial";

export const About = () => {
  return (
    <div>
      <Header />
      <BunzoLayout />
      <Team />
      <Testimonial />
    </div>
  );
};
export default About;
