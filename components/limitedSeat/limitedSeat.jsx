import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { addDays, format } from "date-fns";

export default function LimitedSeat() {
  return (
    <div className="mx-auto max-w-3xl">
      <div className="relative overflow-hidden rounded-lg border-2 border-indigo-600 bg-white px-6 py-6 shadow-md">
        <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-indigo-100"></div>
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-indigo-600 md:text-2xl font-grotesk">
              Limited Availability
            </h3>
            <p className="mt-2 text-muted-foreground font-sans">
              Due to our commitment to quality and personalized service, we only
              take on a limited number of custom projects each month.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="relative flex h-32 w-32 items-center justify-center rounded-full border-8 border-indigo-100 bg-white">
              <div className="absolute inset-0 rounded-full border-t-8 border-indigo-600"></div>
              <div className="text-center">
                <span className="block text-3xl font-bold text-indigo-600 font-grotesk">
                  2
                </span>
                <span className="text-sm font-medium text-muted-foreground font-sans">
                  slots remaining
                </span>
              </div>
            </div>
            <Button
              asChild
              className="mt-4 bg-indigo-600 hover:bg-indigo-700 font-grotesk"
            >
              <Link href="/pricing/#request-quote">Reserve Your Slot</Link>
            </Button>
          </div>
        </div>
        <p className="mt-4 text-sm text-muted-foreground font-sans">
          Next availability window opens:{" "}
          <span className="font-semibold font-grotesk text-indigo-600">
            {format(addDays(new Date(), 20), "PPP")}
          </span>
        </p>
      </div>
    </div>
  );
}
