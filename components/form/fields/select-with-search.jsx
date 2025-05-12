"use client";
import { Check, ChevronsUpDown, XIcon } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import FormLabel from "../form-label";
import { Badge } from "../../ui/badge";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

function SelectOnly({ onChange, value, field, label }) {
  return (
    <div className="space-y-2">
      {label && <FormLabel name={field?.name} labelText={field?.labelText} />}
      <Select onValueChange={onChange} value={value}>
        <SelectTrigger>
          <SelectValue placeholder={field?.placeholder} />
        </SelectTrigger>
        <SelectContent>
          {field?.options.map((option) => (
            <SelectItem key={option?.value} value={option?.value}>
              {option?.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

function SelectWithSearch({ options, field, value, setValue, label }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-2 w-full">
      {label && <FormLabel name={field?.name} labelText={field?.labelText} />}
      <Popover
        open={open}
        onOpenChange={setOpen}
        className="ring-inset focus-visible:ring-1 focus-visible:ring-indigo-600 focus:ring-indigo-600 focus:ring-1 outline-none appearance-none"
      >
        <PopoverTrigger asChild>
          <Button
            id={field?.name}
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between bg-background px-3 font-normal outline-offset-0 hover:bg-background focus-visible:border-ring focus-visible:outline-[3px] focus-visible:outline-ring/20"
          >
            <span className={cn("truncate", !value && "text-muted-foreground")}>
              {value
                ? options?.find((framework) => framework?.value === value)
                    ?.label
                : field?.placeholder || "Select an option"}
            </span>
            <ChevronsUpDown
              size={16}
              strokeWidth={2}
              className="shrink-0 text-muted-foreground/80"
              aria-hidden="true"
            />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="w-full min-w-[var(--radix-popper-anchor-width)] border-input p-0"
          align="start"
        >
          <Command>
            <CommandInput placeholder="Search..." />
            <CommandList>
              <CommandEmpty>No data found.</CommandEmpty>
              <CommandGroup>
                {options?.map((framework) => (
                  <CommandItem
                    key={framework?.value}
                    value={framework?.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                  >
                    {framework?.label}
                    {value === framework?.value && (
                      <Check size={16} strokeWidth={2} className="ml-auto" />
                    )}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}

function MultipleSelectWithSearch({ options, field, value, setValue, label }) {
  const [open, setOpen] = useState(false);
  const handleRemove = (item) => {
    setValue(value?.filter((val) => val !== item));
  };
  return (
    <div className="space-y-2">
      {label && <FormLabel name={field?.name} labelText={field?.labelText} />}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            id={field?.name}
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between h-auto bg-background px-3 font-normal outline-offset-0 hover:bg-background focus-visible:border-ring focus-visible:outline-[3px] focus-visible:outline-ring/20"
          >
            <div className="flex gap-2 justify-start w-full flex-wrap">
              {Array.isArray(value) && value?.length > 0
                ? value.map((item, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className={"h-6 gap-1"}
                    >
                      {
                        options.find((framework) => framework?.value === item)
                          ?.label
                      }
                      <div
                        className="-mr-1.5 h-4 w-4 shadow-none"
                        onClick={() => handleRemove(item)}
                      >
                        <XIcon className="w-3 h-3" />
                      </div>
                    </Badge>
                  ))
                : field.placeholder || "Select options"}
            </div>
            <ChevronsUpDown
              size={16}
              strokeWidth={2}
              className="shrink-0 text-muted-foreground/80"
              aria-hidden="true"
            />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="w-full min-w-[var(--radix-popper-anchor-width)] border-input p-0"
          align="start"
        >
          <Command>
            <CommandInput placeholder="Search..." />
            <CommandList>
              <CommandEmpty>No data found.</CommandEmpty>
              <CommandGroup>
                {options?.map((framework) => (
                  <CommandItem
                    key={framework?.value}
                    value={framework?.value}
                    onSelect={() => {
                      if (Array.isArray(value)) {
                        setValue(
                          value.includes(framework?.value)
                            ? value.filter((v) => v !== framework?.value)
                            : [...value, framework?.value]
                        );
                      } else {
                        setValue([framework?.value]);
                      }
                      setOpen(false);
                    }}
                  >
                    {framework?.label}
                    <Check
                      size={16}
                      strokeWidth={2}
                      className={cn(
                        "ml-auto",
                        Array.isArray(value) && value.includes(framework?.value)
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export { SelectWithSearch, MultipleSelectWithSearch, SelectOnly };
