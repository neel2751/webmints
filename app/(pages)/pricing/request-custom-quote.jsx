"use client";
import { GlobalForm } from "@/components/form/globalForm";
import React, { useState } from "react";
import { toast } from "sonner";

const groupedFields = [
  {
    fields: [
      {
        name: "fullName",
        type: "text",
        labelText: "Full Name",
        placeholder: "Enter Full Name",
        validationOptions: {
          required: "Full Name is required",
        },
      },
      {
        name: "companyName",
        type: "text",
        labelText: "Company Name",
        placeholder: "Enter Compnay Name",
        validationOptions: {
          required: "Company Name is required",
        },
      },
      {
        name: "workEmail",
        type: "text",
        labelText: "Work Email",
        placeholder: "Enter Work Email",
      },
      {
        name: "workPhone",
        type: "text",
        labelText: "Phone Number",
        placeholder: "Enter Phone Number",
      },
      {
        name: "companySize",
        type: "select",
        labelText: "Company Size",
        options: [
          {
            label: "1-10 employees",
            value: "1-10",
          },
          {
            label: "11-50 employees",
            value: "11-50",
          },
          {
            label: "51-200 employees",
            value: "51-200",
          },
          {
            label: "201-500 employees",
            value: "201-500",
          },
          {
            label: "501-1000 employees",
            value: "501-1000",
          },
          {
            label: "1000+ employeees",
            value: "1000+",
          },
        ],
        validationOptions: {
          required: "Company Size is required",
        },
      },
      {
        name: "industry",
        type: "select",
        labelText: "Indusrty",
        options: [
          {
            label: "Enterprise",
            value: "Enterprise",
          },
          {
            label: "E-commerce",
            value: "E-commerce",
          },
          {
            label: "Education",
            value: "Education",
          },
          {
            label: "Healthcare",
            value: "Healthcare",
          },
          {
            label: "Construction",
            value: "Construction",
          },
        ],
        validationOptions: {
          required: "Industry is required",
        },
      },
      {
        name: "Project Requirement",
        type: "textarea",
        size: true,
        labelText: "Project Requirements",
        placeholder: "Enter your Project Requirement",
        validationOptions: {
          required: "Requirement is required",
        },
      },
      {
        name: "Project Timeline",
        type: "radio",
        options: [
          { label: "1-3 Month", value: "1-3" },
          { label: "3-6 Month", value: "3-6" },
          { label: "6-12 Month", value: "6-12" },
          { label: "12+ Month", value: "12+" },
          // { label: "2+ Year", value: "2 year" },
        ],
        size: true,
        labelText: "Project Timeline",
        validationOptions: {
          required: "Timeline is reqired",
        },
      },
      {
        name: "Estimated Budget Range",
        type: "select",
        options: [
          {
            label: "$10,000 - $25,000",
            value: "10,000-25,000",
          },
          {
            label: "$25,000 - $50,000",
            value: "25,000-50,000",
          },
          {
            label: "$50,000 - $100,000",
            value: "50000-100,000",
          },
          {
            label: "$100,000 - $250,000",
            value: "100,000-250,000",
          },
          {
            label: "$250,000+",
            value: "250,000+",
          },
        ],
        labelText: "Estimated Budget Range",
        validationOptions: {
          required: "Budget is required",
        },
      },
    ],
  },
];

export default function RequestCustomQuote({ params }) {
  const [resetForm, setResetForm] = useState();

  const handleSubmit = async (data) => {
    try {
      const response = await fetch(`http://localhost:3001/api/submit-form`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.NEXT_PUBLIC_API_KEY, // or hardcoded temporarily
        },
        body: JSON.stringify({
          formType: "request-quote",
          ...data,
          ...params,
        }),
      });
      if (!response.ok) {
        toast.error(" Failed to submit form. Please try again later.");
      }
      const result = await response.json();
      if (result.success) {
        setResetForm(true);
        toast.success("Form submitted successfully!");
        // Reset form or redirect user
      } else {
        toast.error("Failed to submit form. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(
        "An error occurred while submitting the form. Please try again later."
      );
      // Handle error (e.g., show notification)
    }
  };

  return (
    <section id="request-quote" className="container scroll-mt-16 mx-auto">
      <div className="mx-auto max-w-4xl p-8 shadow-md md:p-12">
        <div className="mb-2 pb-4 border-b border-dashed border-neutral-400">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 font-grotesk">
            {/* Request Your Custom Quote */}
            Tell us a bit about yourself
          </h2>
          <p className="text-muted-foreground font-sans">
            Fill out the form below, and our team will prepare a personalized
            quote based on your specific requirements.
          </p>
        </div>

        <GlobalForm
          groupedFields={groupedFields}
          onSubmit={handleSubmit}
          resetForm={resetForm}
        />
      </div>
    </section>
  );
}
