"use client";
import { FormProvider, useForm } from "react-hook-form";
import {
  FormCheckbox,
  FormDate,
  FormImageUpload,
  FormInputNew,
  FormMultiInput,
  FormMultipleSelect,
  FormRadio,
  FormTextarea,
  SearchableSelect,
} from "./form-field";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";

export function GlobalForm({
  fields,
  initialValues,
  onSubmit,
  isLoading,
  btnName,
}) {
  const method = useForm({
    defaultValues: initialValues || {},
    shouldUnregister: true,
  });
  const watchField = method.watch();
  return (
    <FormProvider {...method}>
      <form onSubmit={method.handleSubmit(onSubmit)}>
        <div className="grid grid-cols-6 gap-4">
          {fields.map((field, index) => {
            if (field.showIf) {
              const { field: dependentField, value } = field?.showIf;
              if (watchField[dependentField] !== value) {
                return null;
              }
            }
            return (
              <div
                key={index}
                className={`col-span-6 sm:col-span-3 ${
                  field.size ? "sm:col-span-6" : "sm:col-span-3"
                }`}
              >
                {(field.type === "text" ||
                  field.type === "email" ||
                  field.type === "password" ||
                  field.type === "tel" ||
                  field.type === "number") && (
                  <FormInputNew key={field?.name} field={field} />
                )}
                {field.type === "select" && (
                  <SearchableSelect key={field?.name} field={field} />
                )}
                {field.type === "multipleSelect" && (
                  <FormMultipleSelect key={field?.name} field={field} />
                )}
                {field.type === "radio" && (
                  <FormRadio key={field?.name} field={field} />
                )}
                {field.type === "checkbox" && (
                  <FormCheckbox key={field?.name} field={field} />
                )}
                {field.type === "textarea" && (
                  <FormTextarea key={field?.name} field={field} />
                )}
                {field.type === "date" && (
                  <FormDate key={field?.name} field={field} />
                )}
                {field.type === "image" && (
                  <FormImageUpload key={field?.name} field={field} />
                )}
                {field.type === "multiple" && (
                  <FormMultiInput key={field?.name} field={field} />
                )}
              </div>
            );
          })}
        </div>
        <div className="mt-8">
          <Button
            disabled={isLoading}
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 w-full"
          >
            {isLoading ? (
              <>
                <Loader2 className="animate-spin" />
                <span>Please wait...</span>
              </>
            ) : (
              <span>{btnName ? btnName : "Submit"}</span>
            )}
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}
