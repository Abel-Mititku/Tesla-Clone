"use client";
import { supabase } from "@/app/lib/supabaseClient";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [current, setCurrent] = useState(0);
  const [captcha, setCaptcha] = useState(null);
  const [verify, setVerify] = useState(false);

  const handleCaptchaChange = (value) => {
    setCaptcha(value);
  };

  const handleNext = (e) => {
    e.preventDefault();
    setError(null);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }
    if (current < 1) {
      if (!email?.trim()) {
        setError("Required");
        return;
      }

      setLoading(true);
      setTimeout(() => {
        setCurrent((prev) => prev + 1);
        setLoading(false);
      }, 3000);
    } else {
      return;
    }
  };

  const handleForgetPassword = async (e) => {
    e.preventDefault();
    setError(null);
    setVerify(true);
    if (!captcha) {
      setError("Please finish the captcha first");
      setVerify(false);
      return;
    }
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: "https://abels-tesla-clone-one-rho.vercel.app/email",
    });
    if (error) {
      alert("Something went wrong try again");
      setVerify(false);
    }
    if (!error) {
      alert("Verification sent to your email!");
      setVerify(false);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="w-[350px] mt-16">
        <p className="text-3xl font-bold mb-2">Verify Identity</p>
        {current === 0 && (
          <p className="mb-2">
            Enter your email adress linked to your tesla account
          </p>
        )}
        {current === 1 && (
          <p>
            To confirm your identity before resseting your password,a
            verification email will be sent to{" "}
            <span className="font-bold">{email}</span> if the account exists.
          </p>
        )}
        <form className="flex flex-col" onSubmit={handleForgetPassword}>
          {current === 0 && (
            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                className="mt-2 bg-gray-100 h-10 mb-4 focus:border-gray-600/80 focus:ring-1 focus:ring-gray-400 outline-none transition-all duration-300 rounded p-2 "
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          )}

          {current === 1 && (
            <ReCAPTCHA
              sitekey="6LfnVOYrAAAAAFd_lGbmTV9392Za-jg86NhB1P8D"
              onChange={handleCaptchaChange}
              className="mt-8"
            />
          )}
          {error && <p className="text-xs text-red-500">{error}</p>}
          {current === 1 && (
            <button
              type="submit"
              className={`bg-blue-800/50 mt-4 h-10 text-white font-bold hover:bg-blue-800/80 ${
                verify && `bg-blue-800/80 border-2 border-black`
              }`}
            >
              {verify ? `Wait a moment` : `Send verification email`}
            </button>
          )}
          {current == 0 && (
            <button
              className={`bg-blue-800/50 mt-4 h-10 text-white font-bold hover:bg-blue-800/80 ${
                loading && `bg-blue-800/80 border-2 border-black`
              }`}
              onClick={handleNext}
            >
              {loading ? `Wait a moment` : `Next`}
            </button>
          )}
        </form>
      </div>
    </div>
  );
}
