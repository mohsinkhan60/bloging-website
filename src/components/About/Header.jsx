export const Header = () => {
  const cards = [
    {
      icon: '/AboutPic/Header1.webp',
      title: 'Open Platform',
      body: 'Anyone can read, write, and contribute. Bunzo is an open content platform built to give voices room to be heard, from day one to day ten thousand.',
    },
    {
      icon: '/AboutPic/Header2.webp',
      title: 'Digital Publishing',
      body: 'Rich editorial tools let writers publish with confidence. Format your ideas clearly, add images, and reach an audience that cares.',
      image: '/AboutPic/Header3.webp',
    },
  ];

  return (
    <section className="bg-canvas-paper pt-32 pb-24">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        <p className="font-mono text-[13px] text-mute mb-4 tracking-wide uppercase">About Bunzo</p>
        <h1
          className="text-ink font-normal mb-16 max-w-3xl"
          style={{ fontSize: 'clamp(38px, 5vw, 72px)', letterSpacing: '-2px', lineHeight: '1.05' }}
        >
          The platform for people who love to read and write.
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-canvas-light rounded-marketing p-8 border border-hairline">
            <div className="w-12 h-12 bg-canvas-paper rounded-app-lg flex items-center justify-center mb-6">
              <img src={cards[0].icon} className="w-7 h-7 object-contain" alt={cards[0].title} />
            </div>
            <h2 className="text-ink text-[24px] font-normal mb-4" style={{ letterSpacing: '-0.24px' }}>
              {cards[0].title}
            </h2>
            <p className="text-slate text-[15px] leading-relaxed">{cards[0].body}</p>
          </div>

          {/* Card 2 — spans 2 cols */}
          <div className="bg-canvas-light rounded-marketing border border-hairline md:col-span-2 grid md:grid-cols-2 overflow-hidden">
            <div className="p-8">
              <div className="w-12 h-12 bg-canvas-paper rounded-app-lg flex items-center justify-center mb-6">
                <img src={cards[1].icon} className="w-7 h-7 object-contain" alt={cards[1].title} />
              </div>
              <h2 className="text-ink text-[24px] font-normal mb-4" style={{ letterSpacing: '-0.24px' }}>
                {cards[1].title}
              </h2>
              <p className="text-slate text-[15px] leading-relaxed mb-6">{cards[1].body}</p>
              <button className="text-ink hover:text-brand text-[15px] flex items-center gap-2 transition-colors">
                Share your thinking <span aria-hidden>→</span>
              </button>
            </div>
            <div className="relative min-h-[280px]">
              <img
                src={cards[1].image}
                alt="Person writing"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
