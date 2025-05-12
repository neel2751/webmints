import { Textarea } from "@/components/ui/textarea";
import FormLabel from "../form-label";
function TextareaWithCount({ field, label, value, onChange, props }) {
  return (
    <div className="space-y-2">
      {label && <FormLabel name={field?.name} labelText={field?.labelText} />}
      <Textarea
        id={field?.name}
        value={value}
        maxLength={field?.maxLength || 1000}
        onChange={onChange}
        placeholder={field?.placeholder}
        aria-describedby="characters-left-textarea"
        {...props}
        rows={field?.rows || 4}
        className="ring-inset focus-visible:ring-1 focus-visible:ring-indigo-600 focus:ring-indigo-600 focus:ring-1 outline-none appearance-none"
      />
      <p
        id="characters-left-textarea"
        className="mt-2 text-right text-xs text-muted-foreground"
        role="status"
        aria-live="polite"
      >
        <span className="tabular-nums">
          {value?.length > 0
            ? field?.maxLength
              ? field.maxLength - value.length
              : 1000 - value.length
            : field?.maxLength || 1000}
        </span>{" "}
        characters left
      </p>
    </div>
  );
}

export { TextareaWithCount };
