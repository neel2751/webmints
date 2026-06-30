// components/blog/SocialShare.tsx
"use client";
import { Twitter, Linkedin, MessageCircle, Share2 } from "lucide-react";

export default function SocialShare({ blogUrl, guideTitle }) {
  const shareText = encodeURIComponent(
    `I just grabbed this free "${guideTitle}"! You can get yours here: `
  );
  const encodedUrl = encodeURIComponent(blogUrl);

  // Modern Mobile Sharing (Native Share Sheet)
  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: guideTitle,
          text: `I just grabbed this free "${guideTitle}"!`,
          url: blogUrl,
        });
      } catch (err) {
        console.log("Error sharing:", err);
      }
    }
  };

  return (
    <div className="flex flex-col gap-4 p-6 bg-zinc-50 rounded-xl border border-zinc-200">
      <h4 className="font-bold text-sm text-zinc-500 uppercase tracking-tight">
        Help others learn
      </h4>
      <div className="flex flex-wrap gap-3">
        {/* X (Twitter) */}
        <a
          href={`https://x.com/intent/post?text=${shareText}&url=${encodedUrl}`}
          target="_blank"
          className="p-3 bg-black text-white rounded-full hover:opacity-80 transition"
        >
          <Twitter size={20} />
        </a>

        {/* LinkedIn */}
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
          target="_blank"
          className="p-3 bg-[#0077b5] text-white rounded-full hover:opacity-80 transition"
        >
          <Linkedin size={20} />
        </a>

        {/* WhatsApp */}
        <a
          href={`https://wa.me/?text=${shareText}${encodedUrl}`}
          target="_blank"
          className="p-3 bg-[#25D366] text-white rounded-full hover:opacity-80 transition"
        >
          <MessageCircle size={20} />
        </a>

        {/* Mobile Native Share */}
        <button
          onClick={handleNativeShare}
          className="flex items-center gap-2 px-5 py-3 bg-zinc-200 text-zinc-800 font-bold rounded-full hover:bg-zinc-300 transition md:hidden"
        >
          <Share2 size={20} /> Share Now
        </button>
      </div>
    </div>
  );
}
