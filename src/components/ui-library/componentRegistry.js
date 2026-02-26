import React, { useState } from "react";
import MutateInputField from "./components/MutateInputField";
import MutateAccordion from "./components/MutateAccordion";

/**
 * Registry of reusable UI components for the showcase.
 * All components use the "Mutate" prefix to avoid naming conflicts.
 */
export const CATEGORIES = ["All", "Forms", "Feedback", "Layout", "Other"];

export const COMPONENTS = [
  {
    id: "text-input",
    name: "Text Input",
    description: "Text field with label, optional icon, validation, and error message. Use MutateInputField with type=\"text\".",
    category: "Forms",
    sourceKey: "MutateInputField",
    usageSnippet: `import { MutateInputField } from "mutate-ui";

const [value, setValue] = useState("");
const [submitted, setSubmitted] = useState(false);

<MutateInputField
  type="text"
  labelText="Username"
  name="username"
  value={value}
  handleInputChange={(e) => setValue(e.target.value)}
  placeholder="Min 2 characters"
  isFieldRequired
  isSubmitted={submitted}
  validate={(v) => v.trim().length >= 2}
  errorMessage="Enter at least 2 characters"
/>`,
    props: [
      { name: "type", type: "'text' | 'tel' | 'number'", default: "'text'", description: "Input type" },
      { name: "name", type: "string", default: "-", description: "Input name and id" },
      { name: "value", type: "string", default: "''", description: "Controlled value" },
      { name: "handleInputChange", type: "(e) => void", default: "-", description: "Change handler" },
      { name: "labelText", type: "string", default: "-", description: "Label above input" },
      { name: "labelColor", type: "string", default: "var(--color-light)", description: "Label text color (CSS value)" },
      { name: "placeholder", type: "string", default: "-", description: "Placeholder text" },
      { name: "placeholderImage", type: "string", default: "-", description: "Optional icon URL shown inside the input on the left" },
      { name: "htmlFor", type: "string", default: "-", description: "Label htmlFor (defaults to name)" },
      { name: "maxLength", type: "number", default: "-", description: "Max length (type=\"text\" or \"tel\")" },
      { name: "margin", type: "string", default: "-", description: "Input marginBottom (CSS value)" },
      { name: "readOnly", type: "boolean", default: "false", description: "Input readOnly" },
      { name: "isFieldRequired", type: "boolean", default: "false", description: "Marks field required" },
      { name: "isSubmitted", type: "boolean", default: "false", description: "When true, show error if invalid" },
      { name: "validate", type: "(value) => boolean", default: "() => true", description: "Validation function" },
      { name: "errorMessage", type: "string", default: "'This field is invalid'", description: "Shown when invalid" },
      { name: "className", type: "string", default: "-", description: "Extra Tailwind/custom classes for the root wrapper" },
      { name: "inputClassName", type: "string", default: "-", description: "Extra Tailwind/custom classes for the input" },
      { name: "labelClassName", type: "string", default: "-", description: "Extra Tailwind/custom classes for the label" },
      { name: "errorClassName", type: "string", default: "-", description: "Extra Tailwind/custom classes for the error message" },
    ],
    Component: function TextInputDemo() {
      const [value, setValue] = useState("");
      const [submitted, setSubmitted] = useState(false);
      const validate = (v) => v.trim().length >= 2;
      return (
        <div className="w-full max-w-xs space-y-4">
          <MutateInputField
            type="text"
            labelText="Username"
            name="demo-username"
            value={value}
            handleInputChange={(e) => setValue(e.target.value)}
            placeholder="Min 2 characters"
            isFieldRequired
            isSubmitted={submitted}
            validate={validate}
            errorMessage="Enter at least 2 characters"
          />
          <button
            type="button"
            className="ui-library-demo-btn"
            onClick={() => setSubmitted(true)}
          >
            Submit to validate
          </button>
        </div>
      );
    },
  },
  {
    id: "number-input",
    name: "Number Input",
    description: "MutateInputField with type=\"number\". Supports min, max, step and optional maxLength for type=\"tel\".",
    category: "Forms",
    sourceKey: "MutateInputField",
    usageSnippet: `import { MutateInputField } from "mutate-ui";

const [value, setValue] = useState("");
const [submitted, setSubmitted] = useState(false);

<MutateInputField
  type="number"
  labelText="Age"
  name="age"
  value={value}
  handleInputChange={(e) => setValue(e.target.value)}
  placeholder="0"
  min={0}
  max={120}
  isFieldRequired
  isSubmitted={submitted}
  validate={(v) => !isNaN(Number(v)) && Number(v) >= 0 && Number(v) <= 120}
  errorMessage="Enter a valid age (0–120)"
/>`,
    props: [
      { name: "type", type: "'text' | 'tel' | 'number'", default: "'text'", description: "Input type" },
      { name: "name", type: "string", default: "-", description: "Input name and id" },
      { name: "value", type: "string", default: "''", description: "Controlled value" },
      { name: "handleInputChange", type: "(e) => void", default: "-", description: "Change handler" },
      { name: "labelText", type: "string", default: "-", description: "Label above input" },
      { name: "placeholder", type: "string", default: "-", description: "Placeholder text" },
      { name: "min", type: "number", default: "-", description: "Min value (type=\"number\")" },
      { name: "max", type: "number", default: "-", description: "Max value (type=\"number\")" },
      { name: "step", type: "number | string", default: "-", description: "Step (type=\"number\")" },
      { name: "maxLength", type: "number", default: "-", description: "Max length (type=\"text\" or \"tel\")" },
      { name: "isFieldRequired", type: "boolean", default: "false", description: "Marks field required" },
      { name: "isSubmitted", type: "boolean", default: "false", description: "When true, show error if invalid" },
      { name: "validate", type: "(value) => boolean", default: "() => true", description: "Validation function" },
      { name: "errorMessage", type: "string", default: "'This field is invalid'", description: "Shown when invalid" },
      { name: "className", type: "string", default: "-", description: "Extra Tailwind/custom classes for the root wrapper" },
      { name: "inputClassName", type: "string", default: "-", description: "Extra Tailwind/custom classes for the input" },
      { name: "labelClassName", type: "string", default: "-", description: "Extra Tailwind/custom classes for the label" },
      { name: "errorClassName", type: "string", default: "-", description: "Extra Tailwind/custom classes for the error message" },
    ],
    Component: function NumberInputDemo() {
      const [value, setValue] = useState("");
      const [submitted, setSubmitted] = useState(false);
      const validate = (v) => {
        const n = Number(v);
        return !isNaN(n) && n >= 0 && n <= 120;
      };
      return (
        <div className="w-full max-w-xs space-y-4">
          <MutateInputField
            type="number"
            labelText="Age"
            name="demo-age"
            value={value}
            handleInputChange={(e) => setValue(e.target.value)}
            placeholder="0"
            min={0}
            max={120}
            isFieldRequired
            isSubmitted={submitted}
            validate={validate}
            errorMessage="Enter a valid age (0–120)"
          />
          <button
            type="button"
            className="ui-library-demo-btn"
            onClick={() => setSubmitted(true)}
          >
            Submit to validate
          </button>
        </div>
      );
    },
  },
  {
    id: "accordion",
    name: "Accordion",
    description: "Expandable panels with open/close animation. Optional custom icon; default chevron is inline SVG (no react-icons).",
    category: "Layout",
    sourceKey: "MutateAccordion",
    usageSnippet: `import { MutateAccordion } from "mutate-ui";

const items = [
  { id: "1", title: "First panel", content: "Content for the first panel." },
  { id: "2", title: "Second panel", content: "Content for the second panel." },
];

<MutateAccordion items={items} />
<MutateAccordion items={items} allowMultiple defaultOpen={[0]} />
<MutateAccordion items={items} onToggle={(index, isOpen) => console.log(index, isOpen)} />

{/* Custom icon (optional) */}
<MutateAccordion
  items={items}
  icon={<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 10l5 5 5-5H7z" /></svg>}
/>`,
    props: [
      { name: "items", type: "Array<{ id: string, title: string, content: ReactNode }>", default: "[]", description: "Accordion panels" },
      { name: "allowMultiple", type: "boolean", default: "false", description: "Allow multiple panels open at once" },
      { name: "defaultOpen", type: "number | number[]", default: "null", description: "Initial open index or indices" },
      { name: "onToggle", type: "(index, isOpen) => void", default: "-", description: "Called when a panel is toggled" },
      { name: "icon", type: "ReactNode", default: "-", description: "Custom trigger icon (e.g. SVG). Default is inline chevron." },
      { name: "className", type: "string", default: "-", description: "Extra Tailwind/custom classes for the root accordion wrapper" },
      { name: "itemClassName", type: "string", default: "-", description: "Extra Tailwind/custom classes for each accordion item" },
      { name: "triggerClassName", type: "string", default: "-", description: "Extra Tailwind/custom classes for the trigger button" },
      { name: "iconClassName", type: "string", default: "-", description: "Extra Tailwind/custom classes for the trigger icon wrapper" },
      { name: "panelClassName", type: "string", default: "-", description: "Extra Tailwind/custom classes for the panel wrapper" },
      { name: "panelContentClassName", type: "string", default: "-", description: "Extra Tailwind/custom classes for the panel content inner div" },
    ],
    Component: function AccordionDemo() {
      const items = [
        { id: "a1", title: "What is Mutate UI?", content: "A set of reusable React components with the Mutate prefix, built with Tailwind. No react-icons dependency." },
        { id: "a2", title: "How do I install it?", content: "Run npm install mutate-ui. You need React and Tailwind; CSS variables from the theme are used for styling." },
        { id: "a3", title: "Can I use a custom icon?", content: "Yes. Pass the icon prop with your own SVG or element; it rotates when the panel opens." },
      ];
      return (
        <div className="w-full max-w-md">
          <MutateAccordion items={items} />
        </div>
      );
    },
  },
];
