"use client";
import { useState } from "react";
import React from "react";
import Link from "next/link";
import {
  Menu,
  ChevronDown,
  LayoutGrid,
  PlaySquare,
  LineChart,
  GraduationCap,
  Users,
  Smartphone,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";
import Image from "next/image";

const products = [
  {
    title: "Point of Sale",
    description: "Process payments and manage your business operations",
  },
  {
    title: "Payments",
    description: "Accept payments anywhere, anytime",
  },
  {
    title: "Online Store",
    description: "Build and manage your online presence",
  },
];
const businessTypes = [
  {
    title: "Retail",
    description: "Solutions for retail businesses",
  },
  {
    title: "Restaurants",
    description: "Solutions for food service businesses",
  },
  {
    title: "Services",
    description: "Solutions for service-based businesses",
  },
];
const NAV_ITEMS = [
  {
    id: 1,
    label: "Home",
    link: "/",
  },
  {
    id: 2,
    label: "Features",
    link: "/features",
  },
  {
    id: 3,
    label: "Solution",
    link: "/solution",
  },
  {
    id: 4,
    label: "Pricing",
    link: "/pricing",
  },
  {
    id: 5,
    label: "About Us",
    link: "/about-us",
  },
  {
    id: 6,
    label: "Contact Us",
    link: "/contact-us",
  },
];

export function SiteHeader() {
  const paraam = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="max-w-7xl mx-auto flex h-16 items-center">
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

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex ml-auto">
          <NavigationMenuList>
            {NAV_ITEMS.map((item, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href={item.link}>
                    <span
                      className={`font-grotesk text-base
                        ${
                          paraam === item?.link
                            ? "text-indigo-600 font-bold"
                            : "font-semibold text-neutral-700"
                        }
                      `}
                    >
                      {item.label}
                    </span>
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4 ml-auto">
          <Button className="text-white bg-indigo-600">Book a Call</Button>
          <Button asChild variant="ghost">
            <Link href="/auth/login">Login</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex flex-1 justify-end md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-4 mt-6">
                {products.map((product) => (
                  <Link
                    key={product.title}
                    href="#"
                    className="block px-2 py-1 hover:bg-accent rounded-md"
                  >
                    {product.title}
                  </Link>
                ))}
                <div className="h-px bg-border" />
                {businessTypes.map((type) => (
                  <Link
                    key={type.title}
                    href="#"
                    className="block px-2 py-1 hover:bg-accent rounded-md"
                  >
                    {type.title}
                  </Link>
                ))}
                <div className="h-px bg-border" />
                <Link
                  href="#"
                  className="block px-2 py-1 hover:bg-accent rounded-md"
                >
                  Why Us?
                </Link>
                <Link
                  href="#"
                  className="block px-2 py-1 hover:bg-accent rounded-md"
                >
                  Pricing
                </Link>
                <Link
                  href="#"
                  className="block px-2 py-1 hover:bg-accent rounded-md"
                >
                  Resources
                </Link>
                <div className="h-px bg-border" />
                <Link
                  href="#"
                  className="block px-2 py-1 hover:bg-accent rounded-md"
                >
                  Sign In
                </Link>
                <Link
                  href="#"
                  className="block px-2 py-1 hover:bg-accent rounded-md"
                >
                  Support
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export function DropdownNavigationWithLinks() {
  return <DropdownNavigation navItems={NAV_ITEMS} />;
}

export function DropdownNavigation({ navItems }) {
  const [openMenu, setOpenMenu] = useState(null);

  const handleHover = (menuLabel) => {
    setOpenMenu(menuLabel);
  };

  const [isHover, setIsHover] = useState(null);
  return (
    <main className="relative w-full flex items-start md:items-center justify-center px-4 py-10">
      <div className="relative gap-5 flex flex-col items-center justify-center">
        <ul className="relative flex items-center space-x-0">
          {navItems.map((navItem) => (
            <li
              key={navItem.label}
              className="relative"
              onMouseEnter={() => handleHover(navItem.label)}
              onMouseLeave={() => handleHover(null)}
            >
              <button
                className="text-sm py-1.5 px-4 flex cursor-pointer group transition-colors duration-300 items-center justify-center gap-1 text-muted-foreground hover:text-foreground relative"
                onMouseEnter={() => setIsHover(navItem.id)}
                onMouseLeave={() => setIsHover(null)}
              >
                <span>{navItem.label}</span>
                {navItem.subMenus && (
                  <ChevronDown
                    className={`h-4 w-4 group-hover:rotate-180 duration-300 transition-transform
                      ${openMenu === navItem.label ? "rotate-180" : ""}`}
                  />
                )}
                {(isHover === navItem.id || openMenu === navItem.label) && (
                  <motion.div
                    layoutId="hover-bg"
                    className="absolute inset-0 size-full bg-primary/10"
                    style={{ borderRadius: 99 }}
                  />
                )}
              </button>

              <AnimatePresence>
                {openMenu === navItem.label && navItem.subMenus && (
                  <div className="w-auto absolute left-0 top-full pt-2">
                    <motion.div
                      className="bg-background border border-border p-4 w-max"
                      style={{ borderRadius: 16 }}
                      layoutId="menu"
                    >
                      <div className="w-fit shrink-0 flex space-x-9 overflow-hidden">
                        {navItem.subMenus.map((sub) => (
                          <motion.div layout className="w-full" key={sub.title}>
                            <h3 className="mb-4 text-sm font-medium capitalize text-muted-foreground">
                              {sub.title}
                            </h3>
                            <ul className="space-y-6">
                              {sub.items.map((item) => {
                                const Icon = item.icon;
                                return (
                                  <li key={item.label}>
                                    <a
                                      href="#"
                                      className="flex items-start space-x-3 group"
                                    >
                                      <div className="border border-border text-foreground rounded-md flex items-center justify-center size-9 shrink-0 group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                                        <Icon className="h-5 w-5 flex-none" />
                                      </div>
                                      <div className="leading-5 w-max">
                                        <p className="text-sm font-medium text-foreground shrink-0">
                                          {item.label}
                                        </p>
                                        <p className="text-xs text-muted-foreground shrink-0 group-hover:text-foreground transition-colors duration-300">
                                          {item.description}
                                        </p>
                                      </div>
                                    </a>
                                  </li>
                                );
                              })}
                            </ul>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export function WhyUS() {
  const cardData = [
    {
      Icon: LayoutGrid,
      title: "Personalized learning paths",
      desc: "Tailor your learning experience with custom tracks based on your goals, skill level, and preferred learning pace. Get recommendations designed just for you.",
      color: "red",
    },
    {
      Icon: PlaySquare,
      title: "Interactive learning experiences",
      desc: "Engage with high-quality, interactive video content that brings learning to life. Practice as you go with embedded quizzes and live demonstrations.",
      color: "blue",
    },
    {
      Icon: LineChart,
      title: "Data-driven insights",
      desc: "Track your progress and stay motivated with real-time analytics and insights. Identify areas for improvement and adjust your learning plan accordingly.",
      color: "green",
    },
    {
      Icon: GraduationCap,
      title: "Expert instructors",
      desc: "Learn from experienced professionals who have a deep understanding of the subject matter. Get personalized feedback and guidance to help you achieve your goals.",
      color: "purple",
    },
    {
      Icon: Users,
      title: "Community support",
      desc: "Connect with fellow learners and industry experts through discussion forums, live events, and social media groups. Get support and encouragement when you need it most.",
      color: "amber",
    },
    {
      Icon: Smartphone,
      title: "Mobile accessibility",
      desc: "Take your learning on the go with our mobile-friendly platform. Access course materials, track your progress, and connect with others from anywhere, at any time.",
      color: "indigo",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl  p-8 md:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left side - Dashboard Image */}
            <div className="relative">
              <div className="bg-gray-100 rounded-xl p-4 relative z-10">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%2013.png-hUivDzumMuIYszA8dRGhi6YI4mMnef.jpeg"
                  alt="Learning platform dashboard"
                  width={600}
                  height={450}
                  className="rounded-lg w-full"
                />
              </div>
            </div>

            {/* Right side - Content */}
            <div>
              <p className="mb-4 text-sm font-semibold text-indigo-600">
                Why Chapter?
              </p>
              <h2 className="text-3xl md:text-2xl font-semibold text-gray-900 mb-2">
                Unlock Your Unique Potential with a Platform Built for You
              </h2>
              <p className="text-gray-600 mb-6">
                Stop settling for off-the-shelf solutions. We empower your
                business with a fully customizable SaaS platform, providing the
                exact tools and flexibility you need to thrive in today's
                dynamic environment. Discover why choosing us means choosing a
                solution as unique as your business.
              </p>
              {/* Feature highlights */}
              <div className="space-y-6">
                <div className="border-l-2 border-indigo-600 px-4 py-1">
                  <p className="text-gray-600">
                    <strong className="text-gray-900 font-semibold text-base">
                      Our courses
                    </strong>{" "}
                    are designed by experts, ensuring you gain real-world skills
                    that are relevant, impactful, and immediately applicable.
                  </p>
                </div>

                <div className="border-l-2 border-indigo-600 px-4 py-1">
                  <p className="text-gray-600">
                    <strong className="text-gray-900 text-base font-semibold">
                      Engage with a community
                    </strong>{" "}
                    of passionate learners, track your progress in real-time,
                    and access your materials anytime, anywhere.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Feature grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {cardData?.map((item, index) => (
              <WebminstCard key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
const WebminstCard = ({ Icon, title, desc, color }) => (
  <div className="flex flex-col">
    <div className="flex items-center gap-3 mb-4">
      <div className={`bg-${color}-50 p-2 rounded-lg`}>
        <Icon className={`text-${color}-600 h-6 w-6`} />
      </div>
      <h3 className="font-semibold text-gray-900">{title}</h3>
    </div>
    <p className="text-gray-600 text-sm">{desc}</p>
  </div>
);
