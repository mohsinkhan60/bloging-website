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

      {/* Newsletter CTA */}
      <section className="bg-ink">
        <div className="max-w-container mx-auto px-6 lg:px-12 py-20 text-center">
          <span className="inline-block font-mono text-[11px] uppercase tracking-widest text-ash border border-hairline-soft px-4 py-1.5 rounded-full mb-8">
            Stay in the Loop
          </span>
          <h2
            className="text-on-primary font-normal mb-5"
            style={{ fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-1.68px', lineHeight: '1.08' }}
          >
            28k People Receive Our
            <br />
            Weekly Newsletter.
          </h2>
          <p className="text-ash text-[16px] max-w-md mx-auto mb-10">
            Curated articles on writing, technology and ideas. Delivered every week.
          </p>
          <a
            href="#"
            className="inline-flex items-center bg-canvas-light text-ink text-[15px] font-medium px-8 h-11 rounded-full hover:bg-canvas-paper transition-colors"
          >
            Subscribe Now
          </a>
        </div>
      </section>

      <Special />
    </div>
  );
};

export default Home;
