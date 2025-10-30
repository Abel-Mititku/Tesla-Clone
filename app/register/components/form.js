"use client";
import { Link } from "lucide-react";
import { set } from "nprogress";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function Register() {
  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [captcha, setCaptcha] = useState(null);
  const [current, setCurrent] = useState(0);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [prev, setPrev] = useState(false);

  const handleCaptchaChange = (value) => {
    setCaptcha(value);
  };

  const handleNext = () => {
    setError(null);
    if (!firstName?.trim()) {
      setError("First name is required");
      return;
    }
    if (!lastName?.trim()) {
      setError("Lastname is required");
      return;
    }
    if (current < 1) {
      setLoading(true);
      setTimeout(() => {
        setCurrent((prev) => prev + 1);
        setLoading(false);
      }, 3000);
    } else {
      return;
    }
  };
  const handlePrevious = () => {
    setError(null);
    setPrev(true);
    if (current > 0) {
      setTimeout(() => {
        setCurrent((prev) => prev - 1);
        setPrev(false);
      }, 3000);
    } else {
      return;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    if (!password?.trim()) {
      setError("Password is required");
      return;
    }
    if (!confirmPassword?.trim()) {
      setError("Please confirm password");
      return;
    }
    if (password?.trim().length < 7) {
      setError("Password must be atleast 8 character in length");
      return;
    }
    if (password !== confirmPassword) {
      setError("The password you entered deosn't match");
      return;
    }
    if (!firstName.trim()) {
      setError("First name required");
      return;
    }
    if (!lastName.trim()) {
      setError("Last name required");
      return;
    }
    if (!captcha) {
      setError("Please finish the captcha");
      return;
    }
    const formData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      token: captcha,
    };

    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    alert(data.message);
    if (data.success) {
      setLoading(false);
      setCurrent(2);
    }
  };

  return (
    <div className="w-full flex justify-center pt-16">
      <div className="w-[350px]">
        <p className="text-xs font-bold opacity-[0.8]">
          Step {current + 1} of 3
        </p>
        {current === 2 && (
          <div>
            <p className="text-3xl font-bold">Verfiy Your Email</p>
          </div>
        )}
        {current !== 2 && (
          <p className="text-3xl font-bold mt-8">Create Acccount</p>
        )}
        <form className="flex flex-col" onSubmit={handleSubmit}>
          {current === 0 && (
            <div className="flex flex-col">
              <label
                htmlFor="region"
                className="font-bold text-xs mt-8 opacity-[0.8] mb-2"
              >
                Region
              </label>
              <select id="region" className="bg-gray-100 h-8 p-1">
                <option>United States</option>
                <option>Canada</option>
                <option>Puerto Rico</option>
                <option>Ethiopia</option>
                <option>Chile</option>
                <option>Belgium</option>
                <option>Cyprus</option>
              </select>
              <label
                htmlFor="first-name"
                className="text-xs font-bold opacity-[0.8] mt-4 mb-2"
              >
                First Name
              </label>
              <input
                type="text"
                id="first-name"
                onChange={(e) => setFirstName(e.target.value)}
                className="bg-gray-100 rounded focus:border-gray-600/80 focus:ring-1 focus:ring-gray-600 transition-all h-8 p-1 outline-none duration-300"
                required
              />
              <label
                htmlFor="last-name"
                className="text-xs font-bold opacity-[0.8] mt-4 mb-2"
              >
                Last Name
              </label>
              <input
                type="text"
                id="last-name"
                onChange={(e) => setLastName(e.target.value)}
                className="bg-gray-100 rounded focus:border-gray-600/80 focus:ring-1 focus:ring-gray-600 transition-all h-8 p-1 outline-none duration-300"
                required
              />
              {error && <p className="text-xs text-red-500">{error}</p>}
            </div>
          )}
          {current === 1 && (
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-xs font-bold opacity-[0.8] mt-4 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-100 rounded focus:border-gray-600/80 focus:ring-1 focus:ring-gray-600 transition-all h-8 p-1 outline-none duration-300"
              />
              <label
                htmlFor="password"
                className="text-xs font-bold opacity-[0.8] mt-4 mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                className="bg-gray-100 rounded focus:border-gray-600/80 focus:ring-1 focus:ring-gray-600 transition-all h-8 p-1 outline-none duration-300"
              />
              <label
                htmlFor="confirm-password"
                className="text-xs font-bold opacity-[0.8] mt-4 mb-2"
              >
                Confrim Password
              </label>
              <input
                type="password"
                id="confirm-password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
                className="bg-gray-100 rounded focus:border-gray-600/80 focus:ring-1 focus:ring-gray-600 transition-all h-8 p-1 outline-none duration-300"
              />
              {error && <p className="text-xs text-red-500">{error}</p>}
              {current === 1 && (
                <div className="mt-6 mb-4">
                  <ReCAPTCHA
                    sitekey="6LfnVOYrAAAAAFd_lGbmTV9392Za-jg86NhB1P8D"
                    onChange={handleCaptchaChange}
                  />
                </div>
              )}
              {current !== 2 && (
                <div>
                  <p className="text-xs text-gray-500 text-center mt-4">
                    By creating an account, you agree to Tesla’s
                    <a href="#" className="underline hover:text-gray-700">
                      {" "}
                      Privacy Notice
                    </a>
                    and
                    <a href="#" className="underline hover:text-gray-700">
                      {" "}
                      Terms of Use
                    </a>
                    .
                  </p>
                </div>
              )}
              {current === 1 && (
                <button
                  type="submit"
                  className={`w-full bg-blue-800/50 mt-4 h-10 text-white font-bold hover:bg-blue-800/80 ${
                    loading && `bg-blue-800/80 border-2 border-black`
                  }`}
                >
                  {loading ? `Registering` : `Register`}
                </button>
              )}
            </div>
          )}
        </form>

        {current < 1 && (
          <button
            className={`w-full bg-blue-800/50 mt-4 h-10 text-white font-bold hover:bg-blue-800/80 ${
              loading && `border-2 border-black bg-blue-800/80`
            }`}
            onClick={handleNext}
          >
            {loading ? `Wait a moment` : `Next`}
          </button>
        )}
        {current === 2 && (
          <Link className="text-blue-900 underline" href="/">
            Return to home
          </Link>
        )}

        {current > 0 && current !== 2 && (
          <button
            className={`w-[350px] h-10 bg-gray-100 rounded font-bold mt-8 ${
              prev && `border-2 border-black`
            }`}
            onClick={handlePrevious}
          >
            {prev ? `Loading` : `Previous Page`}
          </button>
        )}
        {current !== 2 && (
          <div className="w-full flex justify-center">
            <div className="w-[250px] flex justify-between text-xs mt-20">
              <p>Tesla 2025</p>
              <p>Privacy and Legal</p>
              <p>Contact</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
