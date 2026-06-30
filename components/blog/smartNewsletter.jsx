// components/blog/SmartNewsletter.tsx
"use client";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { subscribeEmail } from "@/lib/subscriber";

export default function SmartNewsletter({ category, postTitle, id, slug }) {
  const [isVisible, setIsVisible] = useState(false);
  const [offer, setOffer] = useState("Our Weekly Newsletter");
  const [email, setEmail] = useState("");

  useEffect(() => {
    // 1. Fetch AI-generated offer based on category
    const fetchOffer = async () => {
      //   const res = await fetch("http://localhost:3000/api/ai/lead-magnet", {
      //     method: "POST",
      //     body: JSON.stringify({ category, title: postTitle }),
      //   });
      //   const data = await res.json();
      setOffer(postTitle || "Our Weekly Newsletter");
    };

    // 2. Trigger popup on scroll
    const handleScroll = () => {
      if (
        window.scrollY > window.innerHeight &&
        !localStorage.getItem("subscribed")
      ) {
        setIsVisible(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    fetchOffer();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [category, postTitle]);

  if (!isVisible) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await subscribeEmail({
        email,
        id,
        source: `blog-${slug}`,
        postTitle,
      });
      if (res.success) {
        localStorage.setItem("subscribed", "true");
        setIsVisible(false);
      }
    } catch (error) {
      console.error("Subscription error:", error);
    }
  };

  return (
    <div className="fixed bottom-10 right-10 w-96 bg-white shadow-2xl rounded-2xl p-6 border border-zinc-200 z-50 animate-in slide-in-from-bottom-10">
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-4 right-4"
      >
        <X size={18} />
      </button>

      <span className="text-indigo-600 font-bold text-xs uppercase tracking-widest">
        Special Offer
      </span>
      <h3 className="text-xl font-bold mt-2 leading-tight">
        Get your free "{offer}" PDF
      </h3>
      <p className="text-gray-500 text-sm mt-2">
        Join 5,000+ readers getting exclusive {category} insights.
      </p>

      <form className="mt-4 flex flex-col gap-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="border rounded-lg p-2 outline-none focus:ring-2 focus:ring-blue-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          onClick={handleSubmit}
          className="bg-black text-white font-bold py-2 rounded-lg hover:bg-zinc-800 transition"
        >
          Send me the PDF
        </button>
      </form>
    </div>
  );
}
