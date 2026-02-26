import React, { useState, useCallback } from "react";

/**
 * Reusable input field for text, tel, or number. Handles label, optional icon,
 * validation, and error message. No Next.js dependency.
 *
 * @param {string} [type] - "text" | "tel" | "number" (default "text")
 * @param {string} [labelText] - Label text above the input
 * @param {string} [labelColor] - Label text color (CSS value)
 * @param {string} [errorMessage] - Shown when validation fails or field is required and invalid
 * @param {string} [placeholder] - Input placeholder
 * @param {string} [placeholderImage] - Optional icon URL shown inside the input on the left
 * @param {boolean} [isFieldRequired] - If true, field is required and validate() is used for error state
 * @param {string} [htmlFor] - Label htmlFor (defaults to name)
 * @param {string} name - Input name and id
 * @param {string} value - Controlled value
 * @param {function} handleInputChange - (e) => void
 * @param {boolean} [isSubmitted] - When true, show error if required and validate(value) is false
 * @param {function} [validate] - (value: string) => boolean
 * @param {string} [margin] - Input marginBottom
 * @param {boolean} [readOnly] - Input readOnly
 * @param {number} [maxLength] - Max length (for text/tel; number input uses min/max instead)
 * @param {number} [min] - Min value (for type="number")
 * @param {number} [max] - Max value (for type="number")
 * @param {number|string} [step] - Step (for type="number")
 * @param {string} [className] - Extra Tailwind/custom classes for the root wrapper
 * @param {string} [inputClassName] - Extra Tailwind/custom classes for the input
 * @param {string} [labelClassName] - Extra Tailwind/custom classes for the label
 * @param {string} [errorClassName] - Extra Tailwind/custom classes for the error message
 */
function MutateInputField({
  type = "text",
  labelText,
  labelColor = "var(--color-light)",
  errorMessage = "This field is invalid",
  placeholder,
  placeholderImage,
  isFieldRequired = false,
  htmlFor: htmlForProp,
  name,
  value = "",
  handleInputChange,
  isSubmitted = false,
  validate = () => true,
  margin,
  readOnly = false,
  maxLength,
  min,
  max,
  step,
  className,
  inputClassName: inputClassNameProp,
  labelClassName,
  errorClassName,
}) {
  const [nativeInvalid, setNativeInvalid] = useState(false);

  const inputId = htmlForProp ?? name;

  const isValid = useCallback(
    (val) => (isFieldRequired ? validate(val) : true),
    [isFieldRequired, validate]
  );

  const showError =
    (isSubmitted && isFieldRequired && !isValid(value)) || nativeInvalid;

  const handleInvalid = useCallback((e) => {
    e.preventDefault();
    setNativeInvalid(true);
    e.target.setCustomValidity("");
  }, []);

  const handleInput = useCallback(() => {
    setNativeInvalid(false);
  }, []);

  const inputClassName = [
    "w-full border bg-white/10 p-4 rounded-lg outline-none text-white text-sm placeholder:text-white/40 transition-colors",
    "focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[var(--color-bg)]",
    showError
      ? "border-red-500 focus:border-red-500 focus:ring-red-500/50"
      : "border-white/20 focus:border-primary",
    placeholderImage ? "pl-12" : "",
    inputClassNameProp || "",
  ].filter(Boolean).join(" ");

  const labelStyle = {
    color: showError ? "#ef4444" : labelColor,
  };

  const inputProps = {
    readOnly,
    type: type === "number" ? "number" : type === "tel" ? "tel" : "text",
    id: inputId,
    name,
    value,
    onChange: handleInputChange,
    onInvalid: handleInvalid,
    onInput: handleInput,
    placeholder,
    required: isFieldRequired,
    "aria-invalid": showError,
    "aria-describedby": showError ? `${name}-error` : undefined,
    style: margin != null ? { marginBottom: margin } : undefined,
    className: inputClassName,
  };

  if (type === "number") {
    if (min != null) inputProps.min = min;
    if (max != null) inputProps.max = max;
    if (step != null) inputProps.step = step;
  }
  if (maxLength != null && (type === "text" || type === "tel")) {
    inputProps.maxLength = maxLength;
  }

  return (
    <div className={["relative space-y-2", className].filter(Boolean).join(" ")}>
      {labelText != null && labelText !== "" && (
        <label
          htmlFor={inputId}
          style={labelStyle}
          className={["block text-sm text-white", labelClassName].filter(Boolean).join(" ")}
        >
          {labelText}
          {isFieldRequired && (
            <span className="text-primary" aria-hidden="true">
              *
            </span>
          )}
        </label>
      )}
      <div className="relative">
        <input {...inputProps} />
        {placeholderImage && (
          <img
            src={placeholderImage}
            alt=""
            className="pointer-events-none absolute left-3 top-1/2 h-6 w-6 -translate-y-1/2 opacity-60"
            aria-hidden
          />
        )}
      </div>
      {showError && (
        <p
          id={`${name}-error`}
          role="alert"
          className={["text-red-500 text-[13px] mt-1", errorClassName].filter(Boolean).join(" ")}
        >
          {errorMessage}
        </p>
      )}
    </div>
  );
}

export default MutateInputField;

export function MutateTextInputField(props) {
  return <MutateInputField {...props} type="text" />;
}

export function MutateNumberInputField(props) {
  return <MutateInputField {...props} type="number" />;
}
