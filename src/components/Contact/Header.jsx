/* eslint-disable react/prop-types */
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactCard = ({ phone, email, address, featured }) => (
  <div className={`rounded-marketing p-8 border ${featured ? 'bg-canvas-light' : 'bg-canvas-light border-hairline'}`}>
    <div className="space-y-4 mb-6">
      {[
        { Icon: Phone, value: phone },
        { Icon: Mail, value: email },
        { Icon: MapPin, value: address },
      ].map(({ Icon, value }) => (
        <div key={value} className="flex items-start gap-3">
          <div className={`p-2 rounded-app-md flex-shrink-0 ${featured ? 'bg-ink/20' : 'bg-canvas-paper'}`}>
            <Icon className={`w-4 h-4 ${featured ? 'text-ink' : 'text-slate'}`} />
          </div>
          <span className={`text-[15px] leading-snug ${featured ? 'text-ink' : 'text-slate'}`}>{value}</span>
        </div>
      ))}
    </div>
    <p className={`font-mono text-[11px] uppercase tracking-widest ${featured ? 'text-ink/60' : 'text-mute'}`}>
      {featured ? 'Main Office' : 'Branch Office'}
    </p>
  </div>
);

export const Header = () => {
  const contactInfo = [
    { phone: "(00) 111 222 1111", email: "info@bunzo.com", address: "845 Central Ave Hamilton, Ohio (OH), 45011", featured: false },
    { phone: "(00) 111 222 2222", email: "press@bunzo.com", address: "845 Central Ave Hamilton, Ohio (OH), 45011", featured: true },
    { phone: "(00) 111 222 3333", email: "support@bunzo.com", address: "845 Central Ave Hamilton, Ohio (OH), 45011", featured: false },
  ];

  return (
    <section className="bg-canvas-paper pt-32 pb-24">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        <p className="font-mono text-[13px] text-mute mb-4 tracking-wide uppercase">Get in Touch</p>
        <h1
          className="text-ink font-normal mb-16"
          style={{ fontSize: 'clamp(38px, 5vw, 72px)', letterSpacing: '-2px', lineHeight: '1.05' }}
        >
          We would love
          <br />
          to hear from you.
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {contactInfo.map((info, i) => (
            <ContactCard key={i} {...info} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Header;
