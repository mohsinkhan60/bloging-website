import { Facebook, Twitter, Linkedin } from 'lucide-react';

const teamMembers = [
  { id: 1, name: 'Raised Bancho', image: '/AboutPic/team-1.webp' },
  { id: 2, name: 'Mitchell', image: '/AboutPic/team-2.webp' },
  { id: 3, name: 'Braidle Rosund', image: '/AboutPic/team-3.webp' },
  { id: 4, name: 'Olivia Grace', image: '/AboutPic/team-4.webp' },
  { id: 5, name: 'Mia Rose Carter', image: '/AboutPic/team-5.webp' },
  { id: 6, name: 'Sophia Elizabeth', image: '/AboutPic/team-6.webp' },
  { id: 7, name: 'Isabella Marie', image: '/AboutPic/team-7.webp' },
  { id: 8, name: 'Jane Robinson', image: '/AboutPic/team-8.webp' },
];

export const Team = () => {
  return (
    <section className="bg-canvas-paper py-24">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        <p className="font-mono text-[13px] text-mute mb-3 tracking-wide uppercase">Our People</p>
        <h2
          className="text-ink font-normal mb-14"
          style={{ fontSize: 'clamp(32px, 4vw, 48px)', letterSpacing: '-1.68px', lineHeight: '1.08' }}
        >
          Leadership &amp; Experienced Team
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="relative rounded-marketing overflow-hidden bg-canvas-light group aspect-[3/4]"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-ink/60 flex flex-col items-center justify-end pb-6 gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex gap-3">
                  {[Facebook, Twitter, Linkedin].map((Icon, i) => (
                    <a key={i} href="#" className="text-on-primary hover:text-brand transition-colors">
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
                <p className="text-on-primary text-[15px] font-medium">{member.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
