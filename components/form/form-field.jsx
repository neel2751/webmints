"use client";
import { useFormContext, Controller, useFieldArray } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { EyeIcon, EyeOffIcon, Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import FormLabel from "./form-label";
import {
  MultipleSelectWithSearch,
  SelectOnly,
  SelectWithSearch,
} from "./fields/select-with-search";
import { SelectDate, SelectDateRange } from "./fields/select-date";
import { TextareaWithCount } from "./fields/textareawithcount";
import { Label } from "../ui/label";
import { PrivacyPolicyModal } from "@/app/(pages)/contact-sales/sales-form";

export const FormInputNew = ({ field, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="space-y-2">
      <FormLabel name={field.name} labelText={field.labelText} />
      <div className="relative">
        <Input
          id={field.name}
          className={`h-11 ring-inset focus-visible:ring-1 focus-visible:ring-indigo-600 focus:ring-indigo-600 focus:ring-1 outline-none appearance-none font-medium font-grotesk ${
            errors[field.name] && "border-red-500"
          }`}
          type={
            field?.type === "password"
              ? showPassword
                ? "text"
                : "password"
              : field?.type
          }
          placeholder={field.placeholder}
          {...register(field.name, {
            ...field.validationOptions,
            // valueAsNumber: field.type === "number",
          })}
          {...props}
        />
        {field?.type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? "Hide password" : "Show password"}
            className="absolute right-3 top-1/2 -translate-y-1/2
                    text-zinc-400 hover:text-indigo-600 
                    dark:text-zinc-500 dark:hover:text-zinc-100
                    transition-colors"
          >
            {showPassword ? (
              <EyeIcon className="w-4 h-4" />
            ) : (
              <EyeOffIcon className="w-4 h-4" />
            )}
          </button>
        )}
      </div>
      {field.helperText && (
        <p className="text-xs text-muted-foreground">{field.helperText}</p>
      )}
      {errors[field.name] && <ErrorText field={field} errors={errors} />}
    </div>
  );
};

export const URLInput = ({ field, ...props }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="space-y-2">
      <FormLabel name={field.name} labelText={field.labelText} />
      <div className="flex rounded-lg">
        <span className="inline-flex items-center rounded-s-md border border-input border-r-0 bg-background px-3 text-sm text-muted-foreground font-grotesk font-medium">
          https://
        </span>
        <Input
          id={field.name}
          // className="h-11 ring-inset focus-visible:ring-1 focus-visible:ring-indigo-600 focus:ring-indigo-600 focus:ring-1 outline-none appearance-none"
          className="h-10 ring-inset focus-visible:ring-1 focus-visible:ring-indigo-600 focus:ring-indigo-600 focus:ring-1 outline-none appearance-none rounded-s-none font-grotesk font-medium text-sm"
          type="text"
          placeholder={field.placeholder}
          {...register(field.name, {
            ...field.validationOptions,
            // valueAsNumber: field.type === "number",
          })}
          {...props}
        />
      </div>

      {field.helperText && (
        <p className="text-xs text-muted-foreground">{field.helperText}</p>
      )}
      {errors[field.name] && <ErrorText errors={errors} field={field} />}
    </div>
  );
};

export const FormSelect = ({ field }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="space-y-2">
      <FormLabel name={field?.name} labelText={field?.labelText} />
      <Controller
        name={field.name}
        control={control}
        rules={field.validationOptions}
        render={({ field: { onChange, value } }) => (
          <SelectOnly
            onChange={onChange}
            value={value}
            field={field}
            label={false}
          />
        )}
      />
      {errors[field.name] && <ErrorText errors={errors} field={field} />}
    </div>
  );
};

export const FormRadio = ({ field }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="space-y-2">
      <FormLabel name={field.name} labelText={field.labelText} />
      <Controller
        name={field.name}
        control={control}
        rules={field.validationOptions}
        render={({ field: { onChange, value } }) => (
          <div className="border mt-1 rounded-md p-2.5 shadow-sm">
            <RadioGroup
              onValueChange={onChange}
              value={value}
              className="flex space-x-4"
            >
              {field.options.map((option) => (
                <div key={option.value} className="flex items-center space-x-2">
                  <RadioGroupItem
                    value={option.value}
                    id={`${field.name}-${option.value}`}
                    // className="border-indigo-600"
                    className={` ${
                      value === option.value ? "border-indigo-600" : ""
                    }`}
                    fill={"fill-indigo-600 text-indigo-600"}
                  />
                  <Label
                    className="text-neutral-700"
                    htmlFor={`${field.name}-${option.value}`}
                  >
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        )}
      />
      {errors[field.name] && <ErrorText errors={errors} field={field} />}
    </div>
  );
};

export const FormCheckbox = ({ field }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const [open, setOpen] = useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  const labelContent = field.labelJSX
    ? typeof field.labelJSX === "function"
      ? field.labelJSX(openModal)
      : field.labelJSX
    : field.labelText;

  return (
    <div className="space-y-2 mt-0.5">
      <div className="flex items-center space-x-2">
        <Controller
          name={field.name}
          control={control}
          rules={field.validationOptions}
          render={({ field: { onChange, value } }) => (
            <Checkbox
              id={field.name}
              checked={!!value}
              // onCheckedChange={onChange}
              onCheckedChange={(checked) => onChange(!!checked)}
              className="
              w-4 h-4 
              border border-indigo-600 
              rounded 
              data-[state=checked]:bg-indigo-600 
              data-[state=checked]:border-indigo-600
              focus:ring-1 focus:ring-indigo-400
            "
            />
          )}
        />

        <Label
          htmlFor={field.name}
          className="text-sm leading-snug tracking-tight font-grotesk text-slate-700"
        >
          {labelContent}
        </Label>
      </div>
      {errors[field.name] && <ErrorText errors={errors} field={field} />}
      {field.labelJSX && (
        <PrivacyPolicyModal
          open={open}
          onOpenChange={setOpen}
          title={field.labelText}
          content={field.modalContent}
        />
      )}
    </div>
  );
};

export const FormDate = ({ field }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="space-y-2">
      <FormLabel name={field?.name} labelText={field?.labelText} />
      <Controller
        name={field.name}
        control={control}
        rules={field.validationOptions}
        render={({ field: { onChange, value } }) => {
          <SelectDate
            field={field}
            value={value}
            onChange={onChange}
            label={false}
          />;
        }}
      />
      {errors[field.name] && <ErrorText errors={errors} field={field} />}
    </div>
  );
};

export const FormDateRange = ({ field }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="space-y-2">
      <FormLabel name={field?.name} labelText={field?.labelText} />
      <Controller
        name={field.name}
        control={control}
        rules={field.validationOptions}
        render={({ field: { onChange, value } }) => {
          <SelectDateRange
            field={field}
            value={value}
            onChange={onChange}
            label={false}
          />;
        }}
      />
      {errors[field.name] && <ErrorText errors={errors} field={field} />}
    </div>
  );
};

export const SearchableSelect = ({ field }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const options = field?.options || [];

  return (
    <div className="space-y-2">
      <FormLabel name={field?.name} labelText={field?.labelText || "Select"} />
      <Controller
        name={field?.name}
        control={control}
        rules={field?.validationOptions}
        render={({ field: { onChange, value } }) => (
          <SelectWithSearch
            options={options}
            value={value}
            setValue={onChange}
            field={field}
            label={false}
          />
        )}
      />
      {errors[field.name] && <ErrorText errors={errors} field={field} />}
    </div>
  );
};

export const FormTextarea = ({ field, ...props }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="space-y-2">
      <FormLabel name={field.name} labelText={field.labelText} />
      <Controller
        name={field.name}
        control={control}
        rules={field.validationOptions}
        render={({ field: { onChange, value } }) => (
          <TextareaWithCount
            value={value}
            onChange={onChange}
            field={field}
            label={false}
            props={props}
          />
        )}
      />
      {field.helperText && (
        <p className="text-sm text-muted-foreground">{field.helperText}</p>
      )}
      {errors[field.name] && <ErrorText errors={errors} field={field} />}
    </div>
  );
};

export const FormMultipleSelect = ({ field }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const options = field.options;

  return (
    <div className="space-y-2">
      <FormLabel name={field.name} labelText={field.labelText} />
      <Controller
        name={field.name}
        control={control}
        rules={field.validationOptions}
        render={({ field: { onChange, value = [] } }) => (
          <MultipleSelectWithSearch
            options={options}
            value={value}
            field={field}
            setValue={onChange}
            label={false}
          />
        )}
      />
      {errors[field.name] && <ErrorText errors={errors} field={field} />}
    </div>
  );
};

export const FormMultiInput = ({ field }) => {
  const {
    control,
    formState: { errors },
    getValues,
    trigger,
  } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: field.name,
  });

  React.useEffect(() => {
    if (fields.length === 0) {
      append(""); // Initialize with one empty field if none exist
    }
  }, [fields, append]);

  const validateUniqueEmail = (email, index) => {
    const emails = getValues(field?.name);
    const isUnique = emails.every((e, i) => i === index || e !== email);
    return (
      isUnique ||
      ` ${
        field?.name.charAt(0).toUpperCase() + field?.name.slice(1)
      } must be unique`
    );
  };

  return (
    <div className="space-y-4">
      {fields.map((item, index) => (
        <div key={item?.id} className="flex items-center space-x-2">
          <div className="flex-grow">
            <Controller
              name={`${field?.name}.${index}`}
              control={control}
              rules={{
                ...field?.validationOptions,
                validate: (value) => validateUniqueEmail(value, index),
              }}
              render={({ field: { onChange, value, name } }) => (
                <div className="space-y-1">
                  {/* <Label
                    className="text-sm font-medium text-neutral-500"
                    htmlFor={field?.name}
                  >
                    {field?.labelText}
                  </Label> */}
                  <FormLabel name={field.name} labelText={field.labelText} />
                  <Input
                    type={field.inputType}
                    placeholder={field?.placeholder}
                    value={value}
                    onChange={(e) => {
                      onChange(e.target.value);
                      trigger(field?.name);
                    }}
                    name={name}
                    id={field?.name}
                  />
                </div>
              )}
            />
            {errors[field?.name]?.[index] && (
              <p className="text-sm text-destructive mt-1">
                {errors[field?.name][index]?.message}
              </p>
            )}
          </div>
          {fields.length > 1 && (
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={() => remove(index)}
            >
              <Minus className="h-4 w-4" />
            </Button>
          )}
        </div>
      ))}
      {field?.helperText && (
        <p className="text-sm text-muted-foreground">{field?.helperText}</p>
      )}
      {errors[field?.name] && (
        <p className="text-sm text-destructive">
          {errors[field?.name]?.message}
        </p>
      )}
      {fields.length < field?.max && (
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => append("")}
        >
          <Plus className="h-4 w-4" />
          Add {field?.labelText}
        </Button>
      )}
      {errors[field?.name] &&
        typeof errors[field?.name].message === "string" && (
          <p className="text-sm text-destructive">
            {errors[field?.name].message}
          </p>
        )}
    </div>
  );
};

export const ErrorText = ({ errors, field }) => {
  return (
    <p className="text-sm text-destructive font-grotesk tracking-tight font-medium test-sm">
      {errors[field.name]?.message}
    </p>
  );
};

export const FormImageUpload = ({ field }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="space-y-2">
      <FormLabel name={field.name} labelText={field.labelText} />
      {/* Image Preview */}
      <div className="mb-2">
        <Controller
          name={`${field.name}Preview`}
          control={control}
          render={({ field: { value } }) => {
            return (
              value && (
                <img
                  src={URL.createObjectURL(value)}
                  alt="Preview"
                  className="w-full h-32 object-cover rounded-md mb-2"
                />
              )
            );
          }}
        />
      </div>
      <Controller
        name={field.name}
        control={control}
        rules={field.validationOptions}
        render={({ field: { onChange, value } }) => (
          <Input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                onChange(file);
              }
            }}
            className={`h-11 ring-inset focus-visible:ring-1 text-center focus-visible:ring-indigo-600 focus:ring-indigo-600 focus:ring-1 outline-none appearance-none font-medium font-grotesk ${
              errors[field.name] && "border-red-500"
            }`}
          />
        )}
      />
      {errors[field.name] && <ErrorText errors={errors} field={field} />}
    </div>
  );
};
