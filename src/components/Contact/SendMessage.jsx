import { useState } from "react";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";

const FIELDS = [
  { name: "name", type: "text", placeholder: "Full Name", label: "Name" },
  { name: "email", type: "email", placeholder: "you@example.com", label: "Email" },
  { name: "phone", type: "tel", placeholder: "+1 (555) 000-0000", label: "Phone" },
];

const validate = (form) => {
  if (!form.name.trim()) return "Full name is required.";
  if (!form.email.trim()) return "Email address is required.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return "Please enter a valid email address.";
  if (!form.message.trim()) return "Message cannot be empty.";
  if (form.message.trim().length < 10) return "Message must be at least 10 characters.";
  return null;
};

export const SendMessage = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const err = validate(form);
    if (err) { setError(err); return; }
    setIsLoading(true);
    // Simulate network request (replace with real API call)
    await new Promise((r) => setTimeout(r, 1400));
    setIsLoading(false);
    setSuccess(true);
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  const inputCls = "w-full px-4 py-3 bg-canvas-light border border-hairline rounded-app-xs text-ink placeholder-mute text-[15px] focus:outline-none focus:ring-1 focus:ring-ink focus:border-ink transition-colors";

  return (
    <section className="bg-canvas-light py-24">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="font-mono text-[13px] text-mute mb-4 tracking-wide uppercase">Contact Form</p>
            <h2 className="text-ink font-normal mb-10" style={{ fontSize: "clamp(32px,4vw,48px)", letterSpacing: "-1.68px", lineHeight: "1.08" }}>
              Send Us a Message
            </h2>

            {success ? (
              <div className="flex flex-col items-start gap-4 bg-success/8 border border-success/20 rounded-marketing p-8">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-success/15">
                  <CheckCircle className="w-5 h-5 text-success" />
                </div>
                <div>
                  <p className="text-ink font-medium text-[17px] mb-1">Message sent!</p>
                  <p className="text-slate text-[14px] leading-relaxed">Thanks for reaching out. We will get back to you within 1-2 business days.</p>
                </div>
                <button
                  onClick={() => setSuccess(false)}
                  className="font-mono text-[11px] uppercase tracking-widest text-mute hover:text-ink underline underline-offset-4 transition-colors mt-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Inline error */}
                {error && (
                  <div className="flex items-start gap-3 bg-error/8 border border-error/20 rounded-app-xs px-4 py-3">
                    <AlertCircle className="w-4 h-4 text-error flex-shrink-0 mt-0.5" />
                    <p className="text-error text-[13px] leading-snug">{error}</p>
                  </div>
                )}

                {FIELDS.map(({ name, type, placeholder, label }) => (
                  <div key={name}>
                    <label className="block font-mono text-[10px] uppercase tracking-widest text-mute mb-1.5">{label}</label>
                    <input
                      type={type}
                      name={name}
                      value={form[name]}
                      onChange={handleChange}
                      placeholder={placeholder}
                      disabled={isLoading}
                      className={`${inputCls} ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
                    />
                  </div>
                ))}

                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-widest text-mute mb-1.5">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help..."
                    rows={5}
                    disabled={isLoading}
                    className={`${inputCls} resize-none ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
                  />
                  <p className={`text-[11px] mt-1 text-right transition-colors ${form.message.trim().length < 10 && form.message.length > 0 ? "text-error" : "text-mute"}`}>
                    {form.message.trim().length} / 10 min
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className={`inline-flex items-center gap-2 text-on-primary text-[16px] font-medium px-8 h-11 rounded-full transition-colors ${isLoading ? "bg-graphite cursor-not-allowed" : "bg-ink hover:bg-graphite"}`}
                >
                  {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
                  {isLoading ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>

          <div className="rounded-marketing overflow-hidden min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345096385!2d144.96590661531702!3d-37.81686497975177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sus!4v1625761975544!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Office location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SendMessage;
