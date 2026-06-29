import { Link } from "react-router-dom";

export const categories = ['Video', 'Education', 'Technology', 'Marketing', 'Food', 'Business', 'Doctor'];

export const Header = () => {
  return (
    <section className="bg-canvas-light pt-16 min-h-screen flex flex-col">
      {/* Main hero content — centered */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 lg:px-12 text-center py-20">
        <span className="inline-block font-mono text-[11px] uppercase tracking-widest text-mute border border-hairline px-4 py-1.5 rounded-full mb-8">
          Blogging &amp; Content Platform
        </span>

        <h1
          className="text-ink font-normal max-w-3xl mx-auto mb-6"
          style={{ fontSize: 'clamp(40px, 6vw, 80px)', letterSpacing: '-0.03em', lineHeight: '1.05' }}
        >
          Unlimited Advice,
          <br />
          Tutorial and Resource
        </h1>

        <p className="text-slate text-[17px] leading-relaxed max-w-lg mx-auto mb-10">
          Discover expert knowledge across education, technology, marketing and more. Written by people who know their craft.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          <Link
            to="/all-blogs"
            className="bg-ink text-on-primary text-[15px] font-medium px-7 h-11 rounded-full hover:bg-graphite transition-colors flex items-center"
          >
            Explore Blogs
          </Link>
          <Link
            to="/add-blog"
            className="text-ink text-[15px] px-7 h-11 rounded-full border border-hairline hover:border-ink transition-colors flex items-center"
          >
            Start Writing
          </Link>
        </div>

        {/* Category chips */}
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <Link
              key={cat}
              to={`/all-blogs?category=${cat}`}
              className="font-mono text-[11px] text-mute border border-hairline px-3 py-1.5 rounded-full uppercase tracking-widest hover:border-ink hover:text-ink transition-colors"
            >
              {cat}
            </Link>
          ))}
        </div>
      </div>

      {/* Divider strip */}
      <div className="border-t border-hairline py-5 px-6 lg:px-12">
        <div className="max-w-container mx-auto flex flex-wrap items-center justify-between gap-4">
          <p className="text-mute text-[13px]">Trusted by <span className="text-ink font-medium">28,000+</span> readers worldwide</p>
          <div className="flex items-center gap-6">
            {['Technology', 'Education', 'Marketing'].map((tag) => (
              <span key={tag} className="text-mute text-[13px]">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
