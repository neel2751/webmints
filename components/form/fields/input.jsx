"use client";
import { Input } from "@/components/ui/input";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import React, { useState } from "react";

function InputField({ field, onChange, value, props }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <Input
        name={field?.name}
        id={field.name}
        type={
          field?.type === "password"
            ? showPassword
              ? "text"
              : "password"
            : field?.type
        }
        value={value}
        onChange={onChange}
        placeholder={field?.placeholder}
        {...props}
      />
      {field?.type === "password" && (
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          aria-label={showPassword ? "Hide password" : "Show password"}
          className="absolute right-3 top-1/2 -translate-y-1/2
                    text-zinc-400 hover:text-zinc-900 
                    dark:text-zinc-500 dark:hover:text-zinc-100
                    transition-colors"
        >
          {showPassword ? (
            <EyeOffIcon className="w-4 h-4" />
          ) : (
            <EyeIcon className="w-4 h-4" />
          )}
        </button>
      )}
    </div>
  );
}

export { InputField };
