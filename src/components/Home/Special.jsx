import SpecialCards from "./SpecialCards";

export const Special = () => {
  const articles = [
    {
      id: 1,
      title: "Create beautiful designs that convert more readers into fans.",
      author: "Roderick",
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical literature, making it over 2000 years old.",
      date: "2021-03-25",
      readTime: "10 min read",
    },
    {
      id: 2,
      title: "All of these special features come at an affordable price.",
      author: "Roderick",
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical literature, making it over 2000 years old.",
      date: "2021-04-15",
      readTime: "10 min read",
    },
  ];

  return (
    <>
      <section className="bg-canvas-light py-24">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <p className="font-mono text-[13px] text-mute mb-3 tracking-wide uppercase">For Beginners</p>
          <h2
            className="text-ink font-normal mb-14"
            style={{ fontSize: 'clamp(32px, 4vw, 48px)', letterSpacing: '-1.68px', lineHeight: '1.08' }}
          >
            Special For Beginner
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/HomePic/Recent1.webp"
                alt="Special for beginner"
                className="rounded-marketing w-full object-cover max-h-96"
              />
            </div>
            <div className="space-y-8">
              {articles.map((article) => (
                <div key={article.id} className="border-t border-hairline pt-6">
                  <p className="font-mono text-[11px] uppercase tracking-widest text-mute mb-2">
                    By {article.author}
                  </p>
                  <h3 className="text-ink text-[22px] font-normal mb-2" style={{ letterSpacing: '-0.24px' }}>
                    {article.title}
                  </h3>
                  <p className="text-[15px] text-slate leading-relaxed mb-3">{article.description}</p>
                  <div className="text-[13px] text-mute">
                    <span>{article.date}</span>
                    <span className="mx-2">·</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SpecialCards />
    </>
  );
};

export default Special;
