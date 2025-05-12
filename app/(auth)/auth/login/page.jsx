"use client";
import { HeroPill } from "@/components/animation/hero-pill";
import { GlobalForm } from "@/components/form/globalForm";
import { CardDescription, CardTitle } from "@/components/ui/card";
import {
  BotMessageSquareIcon,
  BuildingIcon,
  Globe,
  HomeIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  const field = [
    {
      name: "firstName",
      labelText: "First Name",
      type: "text",
      placeholder: "Enter First Name",
      validationOptions: {
        required: "First name is required",
        minLength: {
          value: 3,
          message: "Minimum 3 characters required",
        },
        maxLength: {
          value: 20,
          message: "Maximum 20 characters allowed",
        },
      },
    },
    {
      name: "latName",
      labelText: "Last Name",
      type: "text",
      placeholder: "Enter Last Name",
      validationOptions: {
        required: "Last name is required",
        minLength: {
          value: 3,
          message: "Minimum 3 characters required",
        },
        maxLength: {
          value: 20,
          message: "Maximum 20 characters allowed",
        },
      },
    },
    {
      name: "country",
      labelText: "Country",
      placeholder: "Select Country",
      options: [
        {
          label: "India",
          value: "India",
        },
        {
          label: "USA",
          value: "USA",
        },
      ],
      type: "select",
      validationOptions: { required: "Country is required" },
    },
    {
      name: "paymentType",
      labelText: "Employe Type",
      options: [
        { label: "Monthly", value: "Monthly" },
        { label: "Weekly", value: "Weekly" },
      ],
      // defaultValue: "Monthly",
      type: "radio",
      validationOptions: { required: "Employee Type is required" },
    },
    {
      name: "password",
      labelText: "Password",
      type: "password",
      placeholder: " Enter Password",
      size: true,
      validationOptions: {
        required: "password is required",
        minLength: {
          value: 3,
          message: "Minimum 3 characters required",
        },
        maxLength: {
          value: 20,
          message: "Maximum 20 characters allowed",
        },
      },
    },
    {
      name: "note",
      labelText: "Description",
      type: "textarea",
      placeholder: "Enter Description",
      maxLength: 100,
      size: true,
    },
  ];

  const handleSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-full flex">
      {/* Sidebar */}
      <div className="lg:w-[500px] lg:flex p-6 bg-indigo-600 justify-between flex-col min-h-screen hidden ">
        {/* Header */}
        <div className="flex justify-between items-center">
          <Link
            href={"/"}
            className="text-xl font-bold flex-none inline-block text-white"
          >
            Webmints
          </Link>
        </div>
        {/* Body */}
        <div className="space-y-2">
          <span className="text-neutral-100 font-medium text-2xl">
            Develop, launch, and grow your service with our platform
          </span>

          <Sidebar />
          {/* <Image
            src="https://notioly.com/wp-content/uploads/2022/01/41.Positive-News.png"
            width={500}
            height={500}
            alt="test"
          /> */}
        </div>
        {/* Footer */}
        {/* <div className="flex justify-center gap-x-8">
          <HomeIcon className="size-10" />
          <BotMessageSquareIcon className="size-10" />
          <BuildingIcon className="size-10" />
        </div> */}
      </div>
      {/* End Sidebar */}
      {/* Content */}
      <div className="px-5 flex-grow">
        <div className="sm:w-[450px] justify-center flex flex-col min-h-screen h-full mx-auto">
          {/* Title */}
          <HeroPill
            href=" https://www.google.com"
            label="We Improve Dashboard"
            announcement="🛠️ New"
            isExternal
            className="bg-[hsl(187,80.8%,34.7%)]/20 ring-[hsl(210,40%,96.1%)] [&_div]:bg-[hsl(210,40%,96.1%)] [&_div]:text-[hsl(187,80.8%,34.7%)] [&_p]:text-[hsl(187,80.8%,34.7%)] [&_svg_path]:fill-[hsl(187,80.8%,34.7%)]"
          />
          <div className="mt-4">
            <h1 className="sm:text-2xl text-neutral-800 font-semibold text-pretty">
              Set up your Webmints account
            </h1>
            <p className="text-sm text-neutral-500 mt-1">
              {" "}
              Build digital products with Webmints
            </p>
          </div>
          {/* Form */}
          <div className="mt-4"></div>
          <GlobalForm
            fields={field}
            onSubmit={handleSubmit}
            btnName={"Login"}
          />
        </div>
      </div>
      {/* End Content */}
    </div>
  );
};

export default page;

const Sidebar = () => (
  //   <div className="lg:grid-cols-2 md:grid-cols-2 bg-white border rounded-md overflow-hidden gap-px grid mt-8 border-gray-200">
  //     <div className="md:gap-6 p-5 bg-white gap-3 flex-col flex ">
  //       <Globe className="size-6 shrink-0" />
  //       <div>
  //         <CardTitle>Easy to use</CardTitle>
  //         <CardDescription className="w-full">
  //           Our dashboard is designed to be user-friendly and easy to navigate.
  //         </CardDescription>
  //       </div>
  //     </div>
  //   </div>
  <div className="flex justify-center items-center flex-col">
    <div className="w-full h-full aspect-[7/8] relative">
      <div className="bg-gray-200 border border-red-600 rounded-md justify-center w-1/4 aspect-square flex top-[12%] right-1/2 absolute hover:scale-105 transition duration-300 ease-linear" />
      <div className="bg-gray-200 border border-red-600 rounded-md justify-center w-[40%] aspect-square flex top-[36%] right-1/2 absolute hover:scale-105 transition duration-300 ease-linear" />
      <div className="bg-gray-200 border border-red-600 rounded-md justify-center w-[40%] aspect-square flex left-[54%] bottom-[36%] absolute hover:scale-105 transition duration-300 ease-linear" />
      <div className="bg-gray-200 border border-red-600 rounded-md justify-center w-1/4 aspect-square flex left-[54%] bottom-[12%] absolute hover:scale-105 transition duration-300 ease-linear" />
    </div>
  </div>
);
