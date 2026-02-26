# Mutate UI

Reusable UI components with **Mutate** prefix to avoid naming conflicts. Built with **Tailwind CSS** and **Headless UI**.

## Install

```bash
npm install mutate-ui
```

Your project should have **React** and **Tailwind** (with the same or compatible theme). The components use Tailwind classes and CSS variables. No icon library is required; accordion uses an inline SVG by default.

## Usage

```jsx
import { MutateInputField } from "mutate-ui";

// Text input (default type="text")
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
/>

// Number input
<MutateInputField
  type="number"
  labelText="Age"
  name="age"
  value={age}
  handleInputChange={(e) => setAge(e.target.value)}
  placeholder="0"
  min={0}
  max={120}
  isFieldRequired
  isSubmitted={submitted}
  validate={(v) => !isNaN(Number(v)) && Number(v) >= 0 && Number(v) <= 120}
  errorMessage="Enter a valid age (0–120)"
/>
```

Convenience wrappers:

```jsx
import { MutateTextInputField, MutateNumberInputField } from "mutate-ui";

<MutateTextInputField name="username" value={v} handleInputChange={...} ... />
<MutateNumberInputField name="age" value={v} min={0} max={120} ... />
```

### Accordion

```jsx
import { MutateAccordion } from "mutate-ui";

const items = [
  { id: "1", title: "First", content: "First panel content." },
  { id: "2", title: "Second", content: "Second panel content." },
];

<MutateAccordion items={items} />
<MutateAccordion items={items} allowMultiple defaultOpen={[0]} />
<MutateAccordion items={items} onToggle={(index, isOpen) => {}} />
```

## CSS / Tailwind

- Include **Tailwind** in your app and ensure the same (or overridden) **CSS variables** are available, e.g. `--color-primary`, `--color-bg`, `--color-light`, `--shadow-glow`.

## Components

| Component                | Description                                                                                                                                                                               |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `MutateInputField`       | Text, tel, or number input with label, validation, error. Use `type="text"` (default), `type="tel"`, or `type="number"`. Optional: `min`, `max`, `step` (number), `maxLength` (text/tel). |
| `MutateTextInputField`   | Same as `MutateInputField` with `type="text"`.                                                                                                                                            |
| `MutateNumberInputField` | Same as `MutateInputField` with `type="number"`.                                                                                                                                          |
| `MutateAccordion`        | Expandable panels. `items`: `[{ id, title, content }]`. Optional: `allowMultiple`, `defaultOpen`, `onToggle`. Requires `react-icons`.                                                     |
