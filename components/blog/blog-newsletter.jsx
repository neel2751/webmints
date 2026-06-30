"use client";
import { subscribeEmail } from "@/lib/subscriber";
import React from "react";

export default function BlogNewsletter() {
  const [email, setEmail] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    try {
      const res = await subscribeEmail({
        email,
        source: `blog`,
      });
      if (res.success) {
        alert("Subscribed successfully!");
        setEmail("");
      }
    } catch (error) {
      console.error("Subscription error:", error);
    }
  };

  return (
    <form method="post" className="max-w-md w-full">
      <label
        htmlFor="email"
        className="text-base font-medium text-gray-600 tracking-tight"
      >
        Subscribe to our newsletter
      </label>
      <div className="flex flex-col gap-2 mt-1">
        <input
          type="email"
          id="email"
          placeholder="email@example.com"
          required
          className="block w-full h-10 px-4 py-2 text-sm text-indigo-700 duration-300 border border-transparent rounded-lg appearance-none bg-gray-200 placeholder-gray-400 focus:bg-transparent focus:outline-none focus:ring-indigo-500 focus:ring-offset-2 focus:ring-2 focus:ring-offset-indigo-200"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          onClick={handleSubmit}
          className="flex ring border relative ease-in-out text-center font-medium duration-300 items-center shadow-bottom justify-center transition-all overflow-hidden focus:outline-2 inset-shadow-xs outline-offset-4 hover:opacity-90 hover:shadow-none border-transparent focus:outline-indigo-300 inset-shadow-white/30 focus-visible:outline-none active:inset-shadow-transparent text-white bg-indigo-800 hover:bg-indigo-900 ring-indigo-800 h-10 px-4 py-3 text-base rounded-lg w-full"
          type="submit"
        >
          Subscribe
        </button>
      </div>
      <p className="text-xs mt-2 font-medium text-gray-500">
        By subscribing, you agree to receive our latest updates. No spam,
        promise!
      </p>
    </form>
  );
}
