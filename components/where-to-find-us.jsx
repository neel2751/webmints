import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import InteractiveMap from "@/components/interactive-map";

const locations = [
  {
    id: 1,
    name: "North West",
    company: "The XYZ Corp.",
    address: [
      "Suite 2-5 Riverdale Park",
      "Greenway Drive",
      "Bristol",
      "BS4 5CD",
    ],
    hours: ["Weekends by appointment only."],
    coordinates: { lat: 51.4545, lng: -2.5879 },
    directionsUrl: "https://maps.google.com/?q=Bristol,UK",
  },
  {
    id: 2,
    name: "Yorkshire",
    company: "The XYZ Corp.",
    address: [
      "Suite 9 Meadow Lane",
      "Springfield Rd, Brookside",
      "Manchester",
      "M12 3AB",
    ],
    hours: ["Monday to Friday 8am to 4:15pm.", "Weekends by appointment only."],
    coordinates: { lat: 53.4808, lng: -2.2426 },
    directionsUrl: "https://maps.google.com/?q=Manchester,UK",
  },
];

const contactInfo = {
  phone: "55(0) 222 333 4445",
  phoneHref: "tel:550222333445",
  email: "info@xyzcompany.com",
  emailHref: "mailto:info@xyzcompany.com",
};

export default function WhereToFindUs() {
  const apiKey = "YOUR_GOOGLE_MAPS_API_KEY"; // Replace with your actual Google Maps API key

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8 lg:p-16">
      <div className="mx-auto container">
        <div className="overflow-hidden rounded-2xl md:rounded-3xl bg-[#1f0e0e] shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-8">
            {/* Left side - Contact Info */}
            <div className="text-white p-6 sm:p-8 md:p-10 lg:p-16">
              <p className="text-xs tracking-[0.2em] text-gray-400 uppercase mb-3 md:mb-4">
                OUR WORKSHOPS
              </p>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
                WHERE TO{" "}
                <span
                  className="text-transparent bg-clip-text"
                  style={{
                    WebkitTextStroke: "1.5px white",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  FIND US
                </span>
              </h1>
              <p className="text-gray-400 text-sm md:text-base mb-6 md:mb-8 max-w-lg leading-relaxed">
                You're welcome to visit our facility, meet the team, explore
                swatches, and view our current projects. Just give us a call to
                arrange an appointment.
              </p>

              {/* Contact Details */}
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mb-8 md:mb-12">
                <a
                  href={contactInfo.phoneHref}
                  className="flex items-center gap-2 text-white hover:text-yellow-400 transition-colors text-sm md:text-base"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span className="underline">{contactInfo.phone}</span>
                </a>
                <a
                  href={contactInfo.emailHref}
                  className="flex items-center gap-2 text-white hover:text-yellow-400 transition-colors text-sm md:text-base"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span className="underline break-all">
                    {contactInfo.email}
                  </span>
                </a>
              </div>

              {/* Locations - dynamically rendered */}
              <div className="flex">
                {locations.map((location) => (
                  <div key={location.id}>
                    <h3 className="flex items-center gap-2 text-lg md:text-xl font-semibold mb-3">
                      <MapPin className="w-5 h-5 flex-shrink-0" />
                      {location.name}
                    </h3>
                    <div className="text-gray-300 text-sm md:text-base space-y-1 mb-4">
                      <p>{location.company}</p>
                      {location.address.map((line, index) => (
                        <p key={index}>{line}</p>
                      ))}
                    </div>
                    <div className="mb-4">
                      <p className="text-xs uppercase tracking-wider text-gray-400 mb-1">
                        OPENING HOURS
                      </p>
                      {location.hours.map((hour, index) => (
                        <p
                          key={index}
                          className="text-gray-300 text-sm md:text-base"
                        >
                          {hour}
                        </p>
                      ))}
                    </div>
                    <Button
                      variant="outline"
                      className="bg-transparent border-gray-600 text-white hover:bg-white hover:text-black transition-all text-sm md:text-base"
                      asChild
                    >
                      <a
                        href={location.directionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Get directions
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Interactive Google Map */}
            <div className="relative h-[400px] md:h-[500px] lg:h-auto lg:min-h-[700px]">
              <InteractiveMap locations={locations} apiKey={apiKey} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
