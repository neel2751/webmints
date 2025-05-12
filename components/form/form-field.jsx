"use client";
import { useFormContext, Controller, useFieldArray } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { EyeIcon, EyeOffIcon, Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Image from "next/image";
import FormLabel from "./form-label";
import {
  MultipleSelectWithSearch,
  SelectOnly,
  SelectWithSearch,
} from "./fields/select-with-search";
import { SelectDate, SelectDateRange } from "./fields/select-date";
import { TextareaWithCount } from "./fields/textareawithcount";
import { Label } from "../ui/label";

// export const FormInput = ({ field, ...props }) => {
//   const {
//     control,
//     formState: { errors },
//   } = useFormContext();

//   return (
//     <div className="space-y-2">
//       <FormLabel name={field.name} labelText={field.labelText} />
//       <Controller
//         name={field.name}
//         control={control}
//         rules={field.validationOptions}
//         render={({ field: { onChange, value } }) => (
//           <InputField
//             value={value}
//             onChange={onChange}
//             field={field}
//             props={props}
//           />
//         )}
//       />
//       {field.helperText && (
//         <p className="text-xs text-muted-foreground">{field.helperText}</p>
//       )}
//       {errors[field.name] && (
//         <p className="text-sm text-destructive">
//           {errors[field.name]?.message}
//         </p>
//       )}
//     </div>
//   );
// };

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
          className="h-11 ring-inset focus-visible:ring-1 focus-visible:ring-indigo-600 focus:ring-indigo-600 focus:ring-1 outline-none appearance-none"
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
      {errors[field.name] && (
        <p className="text-sm text-destructive">
          {errors[field.name]?.message}
        </p>
      )}
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
      {errors[field.name] && (
        <p className="text-sm text-destructive">
          {errors[field.name]?.message}
        </p>
      )}
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
      {errors[field.name] && (
        <p className="text-sm text-destructive">
          {errors[field.name]?.message}
        </p>
      )}
    </div>
  );
};

export const FormCheckbox = ({ field }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="flex items-center space-x-2">
      <Controller
        name={field.name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Checkbox
            id={field.name}
            checked={value}
            onCheckedChange={onChange}
          />
        )}
      />
      <Label htmlFor={field.name}>{field.labelText}</Label>
      {errors[field.name] && (
        <p className="text-sm text-destructive">
          {errors[field.name]?.message}
        </p>
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
      {errors[field.name] && (
        <p className="text-sm text-destructive">
          {errors[field.name]?.message}
        </p>
      )}
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
      {errors[field.name] && (
        <p className="text-sm text-destructive">
          {errors[field.name]?.message}
        </p>
      )}
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
      {errors[field.name] && (
        <p className="text-sm text-destructive">
          {errors[field.name]?.message}
        </p>
      )}
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
      {errors[field.name] && (
        <p className="text-sm text-destructive">
          {errors[field.name]?.message}
        </p>
      )}
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
      {errors[field.name] && (
        <p className="text-sm text-destructive">
          {errors[field.name]?.message}
        </p>
      )}
    </div>
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
      <Controller
        name={field.name}
        control={control}
        rules={field.validationOptions}
        render={({ field: { onChange, value } }) => (
          <Dropzone
            onDrop={(acceptedFiles) => {
              onChange(field.maxFiles === 1 ? acceptedFiles[0] : acceptedFiles);
            }}
            accept={field.acceptedFileTypes}
            maxSize={field.maxFileSize}
            maxFiles={field.maxFiles}
          >
            {({
              getRootProps,
              getInputProps,
              isDragActive,
              fileRejections,
            }) => (
              <div
                {...getRootProps()}
                className={cn(
                  "border-2 border-dashed rounded-md p-4 text-center cursor-pointer",
                  isDragActive ? "border-primary" : "border-gray-300"
                )}
              >
                <input {...getInputProps()} />
                {value ? (
                  <ImagePreview value={value} maxFiles={field.maxFiles} />
                ) : (
                  <p>
                    {isDragActive
                      ? "Drop the file here"
                      : `Drag 'n' drop ${
                          field.maxFiles > 1 ? "files" : "a file"
                        } here, or click to select`}
                  </p>
                )}
                {fileRejections?.length > 0 && (
                  <div className="text-red-500 mt-2">
                    {fileRejections.map(({ file, errors }) => (
                      <div key={file.name}>
                        {errors.map((e) => (
                          <p key={e.code}>{e.message}</p>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </Dropzone>
        )}
      />
      {errors[field?.name] && (
        <p className="text-sm text-destructive">
          {errors[field?.name]?.message}
        </p>
      )}
    </div>
  );
};

const ImagePreview = ({ value, maxFiles }) => {
  if (maxFiles === 1) {
    const file = value;
    return (
      <Avatar className="w-20 h-20 mx-auto">
        <AvatarImage src={URL.createObjectURL(file)} alt={file.name} />
        <AvatarFallback>{file.name.charAt(0).toUpperCase()}</AvatarFallback>
      </Avatar>
    );
  } else {
    const files = value;
    return (
      <div className="grid grid-cols-3 gap-2">
        {files.map((file, index) => (
          <div key={index} className="relative w-20 h-20">
            <Image
              src={URL.createObjectURL(file)}
              alt={file.name}
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
        ))}
      </div>
    );
  }
};

const Dropzone = ({ children, accept, maxSize, maxFiles, onDrop }) => {
  const { getRootProps, getInputProps, isDragActive, fileRejections } =
    useDropzone({
      accept,
      maxSize,
      maxFiles,
      onDrop,
    });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {children({ getRootProps, getInputProps, isDragActive, fileRejections })}
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
