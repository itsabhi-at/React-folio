# What to Share Next: UI Library & Reusable Components

The UI Library section is set up with **Headless UI** (Tabs), a **component registry**, and one example **Button** component. Here’s what would help next so we can add your components and refine the library.

---

## 1. Your existing components

Share any reusable components you already have. For each one, it helps to have:

- **Source** – File path or paste the component code (or the relevant parts).
- **What it does** – Short description (e.g. “Card with image, title, and CTA”).
- **Category** – One of: `Buttons`, `Forms`, `Feedback`, `Layout`, `Other` (we can add more categories if you want).
- **Props** – Main props (e.g. `title`, `variant`, `onClick`). You can list them in a sentence.

If they live in another repo or folder, tell me where and how they’re structured (e.g. “one folder per component” or “all in one file”).

---

## 2. New components you want

If you’d rather define new components from scratch, tell me:

- **Name** – e.g. “Card”, “Input”, “Badge”, “Modal”.
- **Purpose** – What it’s for and where you’ll use it (portfolio, UI library demo, etc.).
- **Behavior** – Any Headless UI primitives you want (e.g. Dialog for modal, Listbox for dropdown). I’ll use Headless UI + Tailwind to match your theme.
- **Variants** – e.g. “primary / secondary button” or “default / error / success badge”.

I can then propose the component API and add it to the registry and showcase.

---

## 3. Categories

Right now the registry uses: **All**, **Buttons**, **Forms**, **Feedback**, **Layout**, **Other**.

- Do you want to **rename** or **add** categories (e.g. “Data display”, “Navigation”)?
- If you have a list of categories you prefer, share it and we’ll align the tabs and registry.

---

## 4. Extra features for the UI Library page

Optional things we can add later:

- **Copy code** – “Copy JSX” or “Copy snippet” for each component.
- **Props table** – Show prop name, type, default, and short description.
- **Multiple demos per component** – e.g. “Default” vs “With icon” vs “Disabled”.
- **Dark/light preview** – Toggle to show the same component on a light background.

Tell me which of these you care about first (if any).

---

## 5. Where components live

Current layout:

- **Showcase** – `src/components/ui-library/`  
  - `UiLibrary.js` – section + Headless UI Tabs.  
  - `componentRegistry.js` – list of components and categories.  
  - `ui-library.css` – section styles.  
  - `components/` – reusable components (e.g. `Button.js`).

To add a component:

1. Add or move the component file under `src/components/ui-library/components/` (or a subfolder like `components/buttons/`).
2. In `componentRegistry.js`: import it and add an entry with `id`, `name`, `description`, `category`, and `Component` (a function that returns the demo JSX).

If you prefer a different folder (e.g. `src/ui/` or `src/design-system/`), say how you’d like it organized and we can adjust.

---

## Summary

**To move forward, the most useful things you can send are:**

1. **Existing components** – Code or path + short description + category + main props.  
2. **New component ideas** – Name, purpose, and any Headless UI / variants you want.  
3. **Category changes** – Any renames or new categories.  
4. **Optional** – Which extras (copy code, props table, multiple demos) you want first.

Once you share that, we can wire your components into the registry, add demos, and extend the UI Library section as needed.
