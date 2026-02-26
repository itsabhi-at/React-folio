# Tailwind CSS & Base UI in This Project

## Tailwind is set up

- **Version:** Tailwind v4 (with `@tailwindcss/postcss`).
- **Config:** `postcss.config.js` at project root.
- **Entry:** `src/index.css` starts with `@import "tailwindcss"` and keeps all existing portfolio CSS below it.

You can use Tailwind utility classes anywhere: `className="flex gap-4 p-4 text-primary"`.

### Using your existing design tokens with Tailwind

Custom theme variables are defined in `src/index.css` via `@theme` so Tailwind can use them:

| Token        | Tailwind examples        |
|-------------|---------------------------|
| Primary     | `text-primary`, `bg-primary`, `border-primary` |
| Background  | `bg-bg`, `bg-bg-variant`  |
| Accent      | `text-accent`, `bg-accent` |
| Secondary   | `text-secondary`, `bg-secondary` |

Your existing `:root` variables (e.g. `var(--color-primary)`) still work in plain CSS. New components can use either Tailwind classes or CSS vars.

---

## Is adding a “base UI” library helpful?

**Short answer: yes, for the UI library section and complex components.**

A **base UI** (headless/unstyled) library gives you:

- **Behavior & accessibility:** keyboard nav, focus management, ARIA, modals/dropdowns that don’t trap focus.
- **No visual lock-in:** you style everything with Tailwind (or your CSS) so it matches the portfolio.
- **Less custom code:** you don’t reimplement modals, tabs, listboxes, etc. from scratch.

### Recommended: Headless UI (by Tailwind Labs)

- Pairs naturally with Tailwind.
- Covers: Dialog/Modal, Listbox, Combobox, Tab, Disclosure, Menu, Switch, RadioGroup, Transition.
- Install: `npm install @headlessui/react`

Use it for the **UI library** section (e.g. modal demo, tabs for component categories, dropdowns) and anywhere you need accessible, interactive patterns. Style the parts with Tailwind classes.

### Alternative: Radix UI

- More primitives (e.g. Accordion, Tooltip, Toast, Slider).
- Also unstyled; you add Tailwind (or CSS).
- Install specific packages, e.g. `npm install @radix-ui/react-dialog @radix-ui/react-tabs`.

---

## Suggested approach

1. **Keep existing sections as-is** – no need to convert current CSS to Tailwind unless you want to.
2. **Use Tailwind for new work** – especially the UI library section and new components.
3. **Headless UI is installed** – `npm install @headlessui/react` is done; the UI Library section uses Headless UI Tabs. Add more primitives (Dialog, Listbox, etc.) as needed for modals, dropdowns, and other interactive components.
