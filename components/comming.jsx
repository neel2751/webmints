"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";
import { ArrowRight, CheckCircle, Mail, Rocket } from "lucide-react";
import { Input } from "./ui/input";
import { sendMail } from "@/server/mail.server";
export default function CommingSoon() {
  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background">
        <div className="max-w-7xl mx-auto flex h-16 items-center justify-center">
          <div className="mr-4 flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src={"/images/webmints.svg"}
                alt="Webmints Logo"
                width={100}
                height={100}
                className="h-10 w-auto"
              />
              <span className="text-xl font-semibold text-indigo-600 font-grotesk tracking-tight">
                Webmints
              </span>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1 container mx-auto px-4 py-12 flex flex-col items-center justify-center">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Decorative elements */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -top-20 -left-20 w-40 h-40 bg-cyan-300/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-indigo-600/20 rounded-full blur-3xl"></div>
              <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-lg">
                <div className="inline-block p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl mb-4">
                  <Rocket className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4 font-grotesk">
                  We're{" "}
                  <span className="text-indigo-600 dark:text-indigo-400">
                    Launching Soon
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto font-sans">
                  We're building a powerful SaaS platform to create custom
                  solutions that transform how businesses operate. Be the first
                  to know when we launch.
                </p>

                <div className="flex w-full flex-col overflow-hidden rounded-lg bg-white md:rounded-xl lg:flex-row lg:items-center border">
                  <div className="w-full shrink-0 self-stretch lg:w-1/2 border-r p-1">
                    <img
                      src="/images/comming.svg"
                      alt="placeholder hero"
                      className="aspect-[3/2] w-full rounded-t-md object-contain md:rounded-t-none md:rounded-l-md"
                    />
                  </div>
                  <div className="w-full shrink-0 px-4 py-6 md:p-8 lg:w-1/2 lg:px-16 space-y-3">
                    <h2 className="font-grotesk font-semibold text-2xl tracking-tighter text-black">
                      Transform your workflow with our enterprise solution
                    </h2>
                    <SubscriptionForm />
                  </div>
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-4 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2 font-grotesk">
                      Custom Solutions
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 font-sans">
                      Tailored SaaS applications built specifically for your
                      business needs
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2 font-grotesk">
                      Scalable Architecture
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 font-sans">
                      Built to grow with your business from startup to
                      enterprise
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2 font-grotesk">
                      Expert Support
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 font-sans">
                      Dedicated team to ensure your success every step of the
                      way
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

function SubscriptionForm() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Basic email validation
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    try {
      // In a real app, you would send this to your API
      const info = await sendMail(email);
      if (info.success) {
        setIsSubmitted(true);
        setEmail("");
      }
      // await new Promise((resolve) => setTimeout(resolve, 1000));
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="max-w-md mx-auto">
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Mail className="h-5 w-5 text-slate-400" />
            </div>
            <Input
              type="email"
              placeholder="Enter your email"
              className="pl-10 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 focus:border-indigo-600 focus:ring-indigo-600"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isSubmitting}
            />
          </div>

          <Button
            type="submit"
            className="w-full hover:bg-indigo-600 text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Subscribing...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                Notify Me <ArrowRight className="h-4 w-4" />
              </span>
            )}
          </Button>

          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

          <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </form>
      ) : (
        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg text-center">
          <div className="flex justify-center mb-2">
            <CheckCircle className="h-8 w-8 text-green-500" />
          </div>
          <h3 className="text-lg font-medium text-green-800 dark:text-green-300">
            Thank you for subscribing!
          </h3>
          <p className="text-sm text-green-600 dark:text-green-400 mt-1">
            We'll notify you when we launch.
          </p>
          <Button
            className="mt-4 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700"
            onClick={() => setIsSubmitted(false)}
          >
            Subscribe another email
          </Button>
        </div>
      )}
    </div>
  );
}
