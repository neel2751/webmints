"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function RequestQuotePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    useCase: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-gray-50 py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Talk to Our Sales Team</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Let us know how we can help you build your custom SaaS solution. Fill
          out the form and our team will get in touch shortly.
        </p>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-12">
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="company">Company Name</Label>
            <Input
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label htmlFor="useCase">What are you building?</Label>
            <Input
              id="useCase"
              name="useCase"
              value={formData.useCase}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label htmlFor="message">Additional Details</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>

        {/* Info Panel */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Why Work With Us?</h2>
          <ul className="space-y-4 text-gray-700">
            <li>✅ Custom-built SaaS platforms tailored to your needs</li>
            <li>✅ Fast and reliable development cycles</li>
            <li>✅ Scalable architecture and modern tech stack</li>
            <li>✅ Dedicated support and onboarding</li>
          </ul>
          <div className="mt-8">
            <h3 className="text-lg font-medium">Prefer to email?</h3>
            <p className="text-gray-600">
              Reach us at{" "}
              <a
                href="mailto:sales@customsaasco.com"
                className="text-blue-600 underline"
              >
                sales@customsaasco.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
