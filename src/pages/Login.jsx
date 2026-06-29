import { useState } from "react";
import { Link } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { login, signup } from "../../firebase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Logo from "../components/ui/Logo";

const getAuthError = (code) => {
  switch (code) {
    case "auth/wrong-password":
    case "auth/invalid-credential":
      return "Incorrect email or password.";
    case "auth/user-not-found":
      return "No account found with this email.";
    case "auth/email-already-in-use":
      return "An account with this email already exists.";
    case "auth/weak-password":
      return "Password must be at least 6 characters.";
    case "auth/invalid-email":
      return "Please enter a valid email address.";
    case "auth/too-many-requests":
      return "Too many attempts. Please try again later.";
    case "auth/network-request-failed":
      return "Network error. Check your connection.";
    default:
      return "Something went wrong. Please try again.";
  }
};

export const Login = () => {
  const [signState, setSignState] = useState("Login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [fieldError, setFieldError] = useState("");

  const validate = () => {
    if (signState === "Register" && !name.trim()) return "Full name is required.";
    if (!email.trim()) return "Email address is required.";
    if (!password) return "Password is required.";
    if (signState === "Register" && password.length < 6) return "Password must be at least 6 characters.";
    return null;
  };

  const user_auth = async (e) => {
    e.preventDefault();
    const validationError = validate();
    if (validationError) { setFieldError(validationError); return; }
    setFieldError("");
    setIsLoading(true);
    try {
      if (signState === "Login") {
        await login(email, password);
        toast.success("Welcome back!");
      } else {
        await signup(name, email, password);
        toast.success("Account created!");
      }
    } catch (error) {
      const msg = getAuthError(error.code);
      setFieldError(msg);
    } finally {
      setIsLoading(false);
    }
  };

  const inputCls = "w-full px-4 py-3 bg-canvas-light border border-hairline rounded-app-xs text-ink placeholder-mute text-[15px] focus:outline-none focus:ring-2 focus:ring-ink focus:border-transparent transition-colors";

  const switchState = () => {
    setSignState(signState === "Login" ? "Register" : "Login");
    setFieldError("");
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left — form panel */}
      <div className="flex flex-col justify-between px-8 py-10 md:px-16 bg-canvas-light">
        {/* Top — logo */}
        <Link to="/" className="flex-shrink-0">
          <Logo size="sm" dark={false} />
        </Link>

        {/* Center — form */}
        <div className="w-full max-w-sm mx-auto py-16">
          <p className="font-mono text-[11px] uppercase tracking-widest text-mute mb-3">
            {signState === "Login" ? "Welcome back" : "Create account"}
          </p>
          <h1 className="text-ink font-normal mb-8" style={{ fontSize: "clamp(28px, 3vw, 36px)", letterSpacing: "-0.03em", lineHeight: "1.1" }}>
            {signState === "Login" ? "Sign in to Bunzo" : "Join Bunzo today"}
          </h1>

          {/* Inline error banner */}
          {fieldError && (
            <div className="flex items-start gap-3 bg-error/8 border border-error/20 rounded-app-xs px-4 py-3 mb-5">
              <svg className="w-4 h-4 text-error flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-.75-5.25a.75.75 0 001.5 0v-4a.75.75 0 00-1.5 0v4zm.75-7a.75.75 0 100 1.5.75.75 0 000-1.5z" clipRule="evenodd"/>
              </svg>
              <p className="text-error text-[13px] leading-snug">{fieldError}</p>
            </div>
          )}

          <form onSubmit={user_auth} className="space-y-4" noValidate>
            {signState === "Register" && (
              <div>
                <label className="block font-mono text-[11px] uppercase tracking-widest text-mute mb-1.5">Full Name</label>
                <input type="text" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} className={inputCls} disabled={isLoading} />
              </div>
            )}
            <div>
              <label className="block font-mono text-[11px] uppercase tracking-widest text-mute mb-1.5">Email Address</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className={inputCls} disabled={isLoading} />
            </div>
            <div>
              <label className="block font-mono text-[11px] uppercase tracking-widest text-mute mb-1.5">Password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Your password" className={inputCls} disabled={isLoading} />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full text-on-primary text-[15px] font-medium py-3 rounded-full transition-colors mt-2 inline-flex items-center justify-center gap-2 ${isLoading ? "bg-graphite cursor-not-allowed" : "bg-ink hover:bg-graphite"}`}
            >
              {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
              {isLoading ? "Please wait..." : signState === "Login" ? "Sign In" : "Create Account"}
            </button>
          </form>

          <p className="text-mute text-[14px] text-center mt-8">
            {signState === "Login" ? "Don't have an account? " : "Already have an account? "}
            <button type="button" onClick={switchState} className="text-ink font-medium underline underline-offset-2 hover:text-graphite transition-colors">
              {signState === "Login" ? "Register" : "Sign in"}
            </button>
          </p>
        </div>

        {/* Bottom — footer note */}
        <p className="text-mute text-[12px]">
          By continuing you agree to our{" "}
          <span className="text-ink underline underline-offset-2 cursor-pointer">Terms</span>{" "}
          and{" "}
          <span className="text-ink underline underline-offset-2 cursor-pointer">Privacy Policy</span>.
        </p>
      </div>

      {/* Right — image panel */}
      <div className="hidden lg:block relative overflow-hidden">
        <img src="/HomePic/Recent1.webp" alt="A quiet reading space" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/10 to-transparent" />
        <div className="absolute bottom-10 left-10 right-10">
          <p className="text-on-primary font-normal mb-3" style={{ fontSize: "clamp(22px, 2.5vw, 32px)", letterSpacing: "-0.03em", lineHeight: "1.15" }}>
            A space to read, write and share ideas that matter.
          </p>
          <p className="font-mono text-[11px] uppercase tracking-widest text-on-primary/60">Bunzo — Blogging Platform</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
