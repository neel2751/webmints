"use client";
import { GlobalForm } from "@/components/form/globalForm";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";

const validationOptions = {
  minLength: {
    value: 3,
    message: "Minimum 3 characters required",
  },
  maxLength: {
    value: 20,
    message: "Maximum 20 characters allowed",
  },
};

const emailValidation = {
  required: "Email is required",
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: "Invalid email format. Please check and try again.",
  },
};
const phoneValidation = {
  required: "Phone No. is required",
  pattern: {
    value: /^\d{10}$/,
    message: "Must be exactly 10 digits.",
  },
};

const groupedFields = [
  {
    title: "Basic Info",
    fields: [
      {
        name: "firstName",
        type: "text",
        labelText: "First Name",
        placeholder: "Enter First Name",
        validationOptions: {
          required: "First Name is required",
          ...validationOptions,
        },
      },
      {
        name: "lastName",
        type: "text",
        labelText: "Last Name",
        placeholder: "Enter Last Name",
        validationOptions: {
          required: "Last Name is required",
          ...validationOptions,
        },
      },
      {
        name: "workEmail",
        type: "text",
        labelText: "Work Email",
        placeholder: "Enter Work Email",
        validationOptions: emailValidation,
      },
      {
        name: "workPhone",
        type: "text",
        labelText: "Phone Number",
        placeholder: "Enter Phone Number",
        validationOptions: phoneValidation,
      },
    ],
  },
  {
    title: "Company Information",
    fields: [
      {
        name: "companyName",
        type: "text",
        labelText: "Company Name",
        placeholder: "Enter Compnay Name",
        validationOptions: {
          required: "Company Name is required",
          ...validationOptions,
        },
      },
      {
        name: "jobTitle",
        type: "text",
        labelText: "Job Title",
        placeholder: "Enter Job Role",
        validationOptions: {
          required: "Job role is required",
          ...validationOptions,
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
          {
            label: "Other",
            value: "other",
          },
        ],
        validationOptions: {
          required: "Industry is required",
        },
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
        name: "companyWebsite",
        type: "url",
        labelText: "Company Website",
        placeholder: "Company Website",
        validationOptions: {
          required: "Website is required",
          ...validationOptions,
        },
      },
    ],
  },
  {
    title: "Project Information",
    fields: [
      {
        name: "CustomSaaSDevelopment",
        type: "checkbox",
        labelText: "Custom SaaS Development",
        value: true,
      },
      {
        name: "Enterprise Integration",
        type: "checkbox",
        labelText: "Enterprise Integration",
      },
      {
        name: "System Modernization",
        type: "checkbox",
        labelText: "System Modernization",
      },
      {
        name: "Consulting Services",
        type: "checkbox",
        labelText: "Consulting Services",
      },
      {
        name: "Industry-Specific Solutions",
        type: "checkbox",
        labelText: "Industry-Specific Solutions",
      },
      {
        name: "Data Migration",
        type: "checkbox",
        labelText: "Data Migration",
      },
      {
        name: "Maintenance & Support",
        type: "checkbox",
        labelText: "Maintenance & Support",
      },
      {
        name: "Training & Onboarding",
        type: "checkbox",
        labelText: "Training & Onboarding",
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
    ],
  },
  {
    title: "Additional Information",
    fields: [
      {
        name: "How did you hear about us?",
        type: "select",
        labelText: "How did you hear about us?",
        options: [
          {
            label: "Search Engine",
            value: "Search Engine",
          },
          {
            label: "Social Media",
            value: "Social Media",
          },
          {
            label: "Referral",
            value: "Referral",
          },
          {
            label: "Event of Conference",
            value: "Event of Conference",
          },
          {
            label: "Advertisement",
            value: "Advertisement",
          },
          {
            label: "Other",
            value: "Other",
          },
        ],
        size: true,
        validationOptions: {
          required: "Hear about-us required",
        },
      },
      {
        name: "subscribe",
        labelText:
          "Subscribe to our newsletter for industry insights and updates",
        type: "checkbox",
        size: true,
        // validationOptions: {
        //   required: "Please check this box",
        // },
      },
      {
        name: "privacy",
        type: "checkbox",
        labelJSX: (
          <>
            I have read and agree to the{" "}
            <a
              href="/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-indigo-600 hover:text-indigo-800"
            >
              Privacy Policy
            </a>{" "}
            and consent to the processing of my personal data.
          </>
        ),
        validationOptions: {
          required: "Please tick this box",
        },
      },
    ],
  },
];

export default function SalesForm({ params }) {
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
          formType: "contact-sales",
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
        "An error occurred while submitting the form. Please try again later.",
      );
      // Handle error (e.g., show notification)
    }
  };

  return (
    <div>
      <GlobalForm
        groupedFields={groupedFields}
        onSubmit={handleSubmit}
        btnName={"Submit Sales Inquiry"}
        resetForm={resetForm}
      />
    </div>
  );
}

export function PrivacyPolicyModal({ open, onOpenChange, title, content }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="space-y-2 text-sm text-gray-700 max-h-[60vh] overflow-y-auto">
          {content}
        </div>
      </DialogContent>
    </Dialog>
  );
}
