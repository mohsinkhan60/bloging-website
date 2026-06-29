import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
  { name: "Rosario Ferraro", role: "MARKETER", image: "/AboutPic/team-6.webp", content: "Bunzo gave me a platform that actually respects the craft. The writing experience is clean, the readers are engaged, and the editorial tools are the best I have used." },
  { name: "Sherika Hankins", role: "FOUNDER", image: "/AboutPic/team-7.webp", content: "We moved our company blog to Bunzo and the results were immediate: better reach, better feedback, better writing culture across the whole team." },
  { name: "Uosario Tayraro", role: "MARKETER", image: "/AboutPic/team-5.webp", content: "The platform treats writers as professionals. No clutter, no distractions. Just your content and an audience ready to read it." },
  { name: "Herika Ykins", role: "FOUNDER", image: "/AboutPic/team-4.webp", content: "It has survived not only five centuries of writing but also the leap into the digital era. Bunzo is where ideas come to life." },
  { name: "Geriua Inkins", role: "EDITOR", image: "/AboutPic/team-3.webp", content: "Printer took a galley of type and standard unknown printer took galley text printing and typesetting industry been industry standard dummy ever." },
  { name: "Mitchell Ray", role: "WRITER", image: "/AboutPic/team-2.webp", content: "The simplicity of Bunzo is its strength. I can focus entirely on writing without wrestling with the tool itself." },
];

const PAGE = 3;

export const Testimonial = () => {
  const [start, setStart] = useState(0);

  return (
    <section className="bg-canvas-light py-24">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        <p className="font-mono text-[13px] text-mute mb-3 tracking-wide uppercase">Testimonials</p>
        <h2
          className="text-ink font-normal mb-14"
          style={{ fontSize: 'clamp(32px, 4vw, 48px)', letterSpacing: '-1.68px', lineHeight: '1.08' }}
        >
          What People Say About Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {testimonials.slice(start, start + PAGE).map((t, i) => (
            <div key={i} className="bg-canvas-light border border-hairline rounded-marketing p-8">
              <div className="flex items-center gap-4 mb-5">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-ink text-[15px] font-medium">{t.name}</p>
                  <p className="font-mono text-[11px] text-mute uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
              <p className="text-slate text-[15px] leading-relaxed">{t.content}</p>
            </div>
          ))}
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => setStart((s) => Math.max(0, s - 1))}
            disabled={start === 0}
            className="w-10 h-10 rounded-full border border-hairline flex items-center justify-center text-slate hover:border-ink hover:text-ink transition-colors disabled:opacity-30"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => setStart((s) => Math.min(testimonials.length - PAGE, s + 1))}
            disabled={start >= testimonials.length - PAGE}
            className="w-10 h-10 rounded-full border border-hairline flex items-center justify-center text-slate hover:border-ink hover:text-ink transition-colors disabled:opacity-30"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
