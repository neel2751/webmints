import Image from "next/image";
import { Button } from "../ui/button";

export default function Bento() {
  return (
    <div className="flex justify-center container mx-auto max-w-7xl">
      <div className="relative flex w-full flex-col md:w-1/2 lg:w-full gap-8">
        <div className="relative flex flex-col lg:flex-row gap-8">
          <div className="flex flex-col justify-between gap-8 p-10 h-auto lg:w-1/2 bg-[#fafafa] rounded-xl">
            <div>
              <h2 className="font-bold text-2xl text-[#222222] font-grotesk">
                Continuously evaluates potential security threats and impact
              </h2>
              <p className="text-muted-foreground mt-2 text-lg">
                Finally a CRM that's flexible enough to track the things your
                business cares about, not just accounts and contacts.
              </p>
            </div>
            <Image
              src="https://idolpro.indiebold.com/_astro/one.CjxjaseN.svg"
              alt="placeholder"
              height={400}
              width={400}
              className="h-full w-full object-contain border-2 border-gray-200 rounded-full bg-white"
            />
          </div>
          <div className="flex flex-col justify-between gap-8 p-10 h-auto lg:w-1/2 bg-[#fafafa] rounded-xl">
            <div>
              <h2 className="font-bold text-2xl text-[#222222] font-grotesk">
                Presents a consolidated view of your organization security
                posture
              </h2>
              <p className="text-muted-foreground mt-2 text-lg">
                Shape your workspace on your terms, with an intuitive data model
                that’s effortlessly coherent to users and AI alike.
              </p>
            </div>
            <div className="w-full">
              <Image
                src="https://idolpro.indiebold.com/_astro/two.CYjlN7qH.svg"
                alt="placeholder"
                height={400}
                width={400}
                className="w-full object-contain border-2 border-gray-200 rounded-full"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 p-10 lg:flex-row lg:items-center bg-[#fafafa] rounded-xl">
          <div className="lg:w-2/5 space-y-4">
            <h2 className="font-bold text-3xl tracking-tighter text-[#222222] font-grotesk">
              Share your flying with friends
            </h2>
            <p className="text-muted-foreground text-lg text-[#222222]">
              Lets you instantly share your flying with your loved ones, so they
              can monitor your trip status and get notified when you land
            </p>
            <Button className="rounded-full bg-[#222222] h-14 font-semibold text-base">
              Buy template — $19.99
            </Button>
          </div>
          <Image
            src="https://idolpro.indiebold.com/_astro/three.D48ZEt7i.svg"
            alt="placeholder"
            height={600}
            width={600}
            className="w-3/5"
          />
        </div>
      </div>
    </div>
  );
}
