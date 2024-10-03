import { useState } from "react";
import { login, signup } from "../../firebase";

export const Login = () => {
  const [signState, setSignState] = useState("Login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("demo@gmail.com" || "");
  const [password, setPassword] = useState("123456" || "");

  const user_auth = async (e) => {
    e.preventDefault();

    try {
      if (signState === "Login") {
        await login(email, password);
      } else {
        await signup(name, email, password);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="h-screen bg-neutral-50 flex items-center justify-center dark:bg-neutral-700">
      <div className="container h-full p-10">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="g-0 lg:flex lg:flex-wrap">
                {/* Left column container */}
                <div className="px-4 md:px-10 lg:w-6/12">
                  <div className="md:mx-6 md:p-12">
                    {/* Logo */}
                    <div className="text-center">
                      <img
                        className="mx-auto w-48"
                        src="/AboutPic/login1.webp"
                        alt="logo"
                      />
                      <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                        We are The Lotus Team
                      </h4>
                    </div>

                    <form onSubmit={user_auth}>
                      <p className="mb-4 text-center">{signState}</p>

                      {/* Name input for Register only */}
                      {signState === "Register" && (
                        <input
                          type="text"
                          placeholder="Your name..."
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="mb-4 border p-2 w-full"
                          required
                        />
                      )}

                      {/* Email input */}
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email..."
                        className="mb-4 border p-2 w-full"
                        required
                      />

                      {/* Password input */}
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter password..."
                        className="mb-4 border p-2 w-full"
                        required
                      />

                      {/* Submit button */}
                      <div className="mb-12 pb-1 pt-1 text-center">
                        <button
                          className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out"
                          style={{
                            background:
                              "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                          }}
                          type="submit" // Change to 'submit' for form submission
                        >
                          {signState}
                        </button>
                      </div>

                      {/* Toggle between Login and Register */}
                      <div className="flex items-center justify-between pb-6">
                        <p className="mb-0 mr-2">
                          {signState === "Login"
                            ? "Don't have an account?"
                            : "Already have an account?"}
                        </p>
                        <button
                          type="button" // Change to button to avoid form submission on toggle
                          onClick={() =>
                            setSignState(
                              signState === "Login" ? "Register" : "Login"
                            )
                          }
                          className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs
                             font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:bg-neutral-500
                              hover:bg-opacity-10 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                        >
                          {signState === "Login" ? "Register" : "Login"}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                {/* Right column container with background */}
                <div
                  className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                  style={{
                    background: "url('/HomePic/Recent5.webp')",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
