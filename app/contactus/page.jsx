"use client";

import { useState } from "react";
import { MapPin, MessageCircle, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SiteHeader } from "@/components/web/site-header";

export default function ContactPage() {
  const [countryCode, setCountryCode] = useState("US");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  return (
    <>
      <SiteHeader />
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight">
                We would love to hear from you!
              </h1>
              <p className="text-muted-foreground text-lg tracking-tight">
                We're here to help. Chat to our friendly team 24/7 and get set
                up and ready to go in just 5 minutes.
              </p>
            </div>

            <div className="space-y-4">
              <Button
                variant="ghost"
                className="w-full justify-start gap-2 text-primary"
              >
                <MessageCircle className="h-5 w-5" />
                Start a live chat
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start gap-2 text-primary"
              >
                <Mail className="h-5 w-5" />
                Shoot us an email
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start gap-2 text-primary"
              >
                <Twitter className="h-5 w-5" />
                Message us on Twitter
              </Button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First name</Label>
                  <Input id="first-name" placeholder="First name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last name</Label>
                  <Input id="last-name" placeholder="Last name" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@company.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone number</Label>
                <div className="flex gap-2">
                  <Select value={countryCode} onValueChange={setCountryCode}>
                    <SelectTrigger className="w-[100px]">
                      <SelectValue placeholder="US" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="US">US</SelectItem>
                      <SelectItem value="UK">UK</SelectItem>
                      <SelectItem value="CA">CA</SelectItem>
                      <SelectItem value="AU">AU</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="flex-1"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <Label>Services</Label>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="website-design" />
                    <Label htmlFor="website-design" className="font-normal">
                      Website design
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="content-creation" />
                    <Label htmlFor="content-creation" className="font-normal">
                      Content creation
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="ux-design" />
                    <Label htmlFor="ux-design" className="font-normal">
                      UX design
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="strategy" />
                    <Label htmlFor="strategy" className="font-normal">
                      Strategy & consulting
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="user-research" />
                    <Label htmlFor="user-research" className="font-normal">
                      User research
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="other" />
                    <Label htmlFor="other" className="font-normal">
                      Other
                    </Label>
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700"
              >
                Send message
              </Button>
            </form>
          </div>

          <div className="h-[600px] rounded-lg overflow-hidden border relative">
            <div className="absolute inset-0 bg-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d79098.58474668863!2d-0.058792177038914206!3d51.5402856926281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d51.5675786!2d0.055705599999999994!4m5!1s0x487602ba7a12992f%3A0x4d821857a5e4a41!2scanary%20wharf%20london!3m2!1d51.5054306!2d-0.0235333!5e1!3m2!1sen!2suk!4v1745604644225!5m2!1sen!2suk"
               width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <iframe
                src="https://maps.app.goo.gl/HdFFqg5ZqFTEfSSw5"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
              ></iframe>
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                <div className="bg-white text-xs px-2 py-1 rounded-sm shadow-sm">
                  Map
                </div>
                <div className="bg-white text-xs px-2 py-1 rounded-sm shadow-sm">
                  Satellite
                </div>
              </div>
              <div className="absolute bottom-8 right-8 z-10">
                <div className="bg-indigo-600 text-white rounded-full p-2">
                  <MapPin className="h-6 w-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
