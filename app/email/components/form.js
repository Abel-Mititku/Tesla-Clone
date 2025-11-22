"use client";
import { supabase } from "@/app/lib/supabaseClient";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { RSC_ACTION_CLIENT_WRAPPER_ALIAS } from "next/dist/lib/constants";
import { SupabaseAuthClient } from "@supabase/supabase-js/dist/module/lib/SupabaseAuthClient";

export default function ChangePassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const hash = window.location.hash;
    const params = new URLSearchParams(hash.replace("#", ""));
    const accessToken = params.get("access_token");
    if (accessToken) setToken(accessToken);
    setLoading(false);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newPassword.trim()) {
      setError("required");
      return;
    }
    if (newPassword !== confirmPassword) {
      setError("The passwords don't match");
      return;
    }
    if (newPassword.length < 8) {
      setError("Password must be have more than eight character");
      return;
    }

    if (!token) {
      alert("Invalid or expired link!");
      return;
    }
    await supabase.auth.setSession({ access_token: token });

    const { error: updateError } = await supabase.auth.updateUser({
      password: newPassword,
    });
    if (updateError) {
      alert(updateError.message);
      return;
    }

    alert("✅ Password updated successfully! You can now log in.");
    window.location.href = "/";
  };

  if (loading) return <p>Loading</p>;
  if (!token) return <p>Invalid or expired link</p>;

  return (
    <div className="flex justify-center mt-16">
      <div className="w-[350px] flex flex-col">
        <p className="text-3xl font-bold">Change Password</p>
        <form className="flex flex-col mt-8" onSubmit={handleSubmit}>
          <label htmlFor="new-password">New Password</label>
          <input
            type="password"
            id="new-password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="mt-2 bg-gray-100 h-10 mb-4 dark:text-black dark:focus:border-black-600 focus:border-gray-600/80 focus:ring-1 focus:ring-gray-400 outline-none transition-all duration-300 rounded p-2 "
          />
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="mt-2 bg-gray-100 h-10 mb-4 dark:text-black dark:focus:border-black-600 focus:border-gray-600/80 focus:ring-1 focus:ring-gray-400 outline-none transition-all duration-300 rounded p-2 "
          />
          {error && <p className="text-xs text-red-500">{error}</p>}
          <button
            type="submit"
            className={`bg-blue-800/50 mt-4 h-10 text-white font-bold hover:bg-blue-800/80 
              }`}
          >
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
}
