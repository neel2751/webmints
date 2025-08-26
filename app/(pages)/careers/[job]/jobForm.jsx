"use client";
import { GlobalForm } from "@/components/form/globalForm";
import React from "react";
import { toast } from "sonner";

export default function JobForm({ jobId }) {
  const [resetForm, setResetForm] = React.useState(false);

  const fields = [
    {
      fields: [
        {
          name: "firstName",
          labelText: "First Name",
          type: "text",
          placeholder: "John",
          validationOptions: { required: " First name is required" },
        },
        {
          name: "lastName",
          labelText: "Last Name",
          type: "text",
          placeholder: "Doe",
          validationOptions: { required: "Last name is required" },
        },
        {
          name: "email",
          labelText: "Email Address",
          type: "email",
          placeholder: "johndoe@example.com",
          validationOptions: {
            required: "Email address is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Please enter a valid email address",
            },
          },
        },
        {
          name: "phone",
          labelText: "Phone Number",
          type: "number",
          placeholder: "+1 (123) 456-7890",
          validationOptions: {
            required: "Phone number is required",
            pattern: {
              value: /^\+?[1-9]\d{1,14}$/,
              message: "Please enter a valid phone number",
            },
          },
        },
        {
          name: "location",
          labelText: "Current Location",
          type: "text",
          size: true,
          placeholder: "City, Country",
          validationOptions: {
            required: "Current location is required",
          },
        },
        {
          name: "linkedin",
          labelText: "LinkedIn Profile (optional)",
          type: "url",
          placeholder: "https://www.linkedin.com/in/your-profile",
          validationOptions: {
            pattern: {
              value: /^(https?:\/\/)?([\w.-]+)+(:\d+)?(\/[\w.-]*)*\/?$/,
              message: "Please enter a valid URL",
            },
          },
        },
        {
          name: "portfolio",
          labelText: "Portfolio or Website (optional)",
          type: "url",
          placeholder: "https://www.yourportfolio.com",
          validationOptions: {
            pattern: {
              value: /^(https?:\/\/)?([\w.-]+)+(:\d+)?(\/[\w.-]*)*\/?$/,
              message: "Please enter a valid URL",
            },
          },
        },
        {
          name: "resume",
          labelText: "Upload Resume",
          type: "image",
          placeholder: "Upload your resume",
          validationOptions: {
            required: "Resume is required",
            pattern: {
              value: /\.(pdf|docx|txt)$/,
              message: "Please upload a valid file (PDF, DOCX, TXT)",
            },
          },
        },
        {
          name: "coverLetterFile",
          labelText: "Upload Cover Letter (optional)",
          type: "image",
          placeholder: "Upload your cover letter",
          validationOptions: {
            pattern: {
              value: /\.(pdf|docx|txt)$/,
              message: "Please upload a valid file (PDF, DOCX, TXT)",
            },
          },
        },
        {
          name: "additionalInfo",
          labelText: "Additional Information (optional)",
          type: "textarea",
          placeholder: "Write your cover letter here...",
        },
      ],
    },
  ];

  const handleSubmit = async (data) => {
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (value instanceof FileList) {
          Array.from(value).forEach((file) => {
            formData.append(key, file);
          });
        } else {
          formData.append(key, value);
        }
      });
      formData.append("jobId", jobId);
      const response = await fetch("https://portal.webmints.com/api/job", {
        method: "POST",
        body: formData,
        headers: {
          "x-api-key": process.env.NEXT_PUBLIC_API_KEY, // or hardcoded temporarily
        },
      });
      const result = await response.json();
      if (result.success) {
        toast.success("Application submitted successfully!");
        setResetForm(true);
      } else {
        toast.error(result.message || "Failed to submit application.");
      }
    } catch (error) {
      console.log("Error submitting application:", error);
      toast.error(
        "An error occurred while submitting your application. Please try again."
      );
    }
  };

  return (
    <GlobalForm
      groupedFields={fields}
      onSubmit={handleSubmit}
      btnName={"Submit Application"}
      resetForm={resetForm}
    />
  );
}
