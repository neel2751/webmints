import React from "react";
import { Label } from "../ui/label";

export default function FormLabel({ name, labelText }) {
  return (
    <Label
      className="text-base tracking-tight font-medium text-black/75"
      htmlFor={name}
    >
      {labelText}
    </Label>
  );
}
