import { useState } from "react";

export const SubscribeButton = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <section className="bg-canvas-paper py-24">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-mono text-[13px] text-mute mb-4 tracking-wide uppercase">Newsletter</p>
          <h2
            className="text-ink font-normal mb-4"
            style={{ fontSize: 'clamp(32px, 4vw, 48px)', letterSpacing: '-1.68px', lineHeight: '1.08' }}
          >
            Subscribe for
            <br />
            Our Newsletter
          </h2>
          <p className="text-slate text-[16px] mb-10">
            Get the best articles delivered straight to your inbox every week.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-4 py-3 bg-canvas-light border border-hairline rounded-app-xs text-ink placeholder-mute text-[15px] focus:outline-none focus:ring-2 focus:ring-ink focus:border-transparent transition-colors"
            />
            <button
              type="submit"
              className="bg-ink text-on-primary text-[15px] font-medium px-6 py-3 rounded-full hover:bg-graphite transition-colors whitespace-nowrap"
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SubscribeButton;
