"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/app/lib/supabaseClient";
import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import Link from "next/link";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [current, setCurrent] = useState(0);
  const [error, setError] = useState(null);
  const [register, setRegister] = useState(false);
  const router = useRouter();

  const handleNext = () => {
    setError(null);
    console.log(error);
    if (!email?.trim()) {
      setError("Required");
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!password?.trim()) {
      setError("Required");
      setLoading(false);
      return;
    }
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      alert(error.message);
      setLoading(false);
    }
    if (data.user) {
      router.replace("/profile");
      setLoading(false);
    }
  };
  return (
    <div className="pt-16">
      <div className="w-full flex flex-col items-center relative">
        <div className="w-[350px] relative">
          <p className="absolute left-0 text-3xl font-bold">Sign In</p>
        </div>
        <form className="w-[350px] flex flex-col mt-16" onSubmit={handleSubmit}>
          {current === 0 && (
            <div className="w-full flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 bg-gray-100 dark:text-black dark:focus:border-black-600  h-10 mb-4 focus:border-gray-600/80 focus:ring-1 focus:ring-gray-400 outline-none transition-all duration-300 rounded p-2 "
              />
            </div>
          )}
          {current === 1 && (
            <div className="w-full flex flex-col">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-2 bg-gray-100 dark:text-black dark:focus:border-black-600 h-10 mb-4 focus:border-gray-600/80 focus:ring-1 focus:ring-gray-400 outline-none transition-all duration-300 rounded p-2 "
              />
            </div>
          )}
          {error && <p className="text-xs text-red-500">{error}</p>}
          {current === 0 && (
            <button
              type="button"
              onClick={handleNext}
              className={`bg-blue-800/50 mt-4 h-10 text-white font-bold hover:bg-blue-800/80 ${
                loading && `bg-blue-800/80 border-black border-2`
              }`}
            >
              {loading ? `Wait a moment` : `Next`}
            </button>
          )}
          <Link href="/forgetpassword" className="text-blue-800 underline">
            Forget Password
          </Link>
          {current === 1 && (
            <button
              type="submit"
              className={`bg-blue-800/50 mt-4 h-10 text-white font-bold hover:blue-800/80 ${
                loading && `bg-blue-800/80 border-black border-2`
              }`}
            >
              {loading ? `logging in` : `login`}
            </button>
          )}
        </form>
        <div className="flex items-center mt-8">
          <div className="opacity-[0.4] border-t w-[158px]"></div>
          <p className="p-2">Or</p>
          <div className="opacity-[0.4] border-t w-[158px]"></div>
        </div>
        <button
          className="w-[350px] h-10 dark:hover:bg-white dark:hover:text-black dark:text-black bg-gray-100 rounded font-bold mt-8 dark:border-gray-600 hover:border-2"
          onClick={() => {
            router.replace("/register");
            setRegister(true);
          }}
        >
          Create Account
        </button>
        <div className="w-[250px] flex justify-between text-xs mt-20">
          <p>Tesla 2025</p>
          <p>Privacy and Legal</p>
          <p>Contact</p>
        </div>
      </div>
    </div>
  );
}
