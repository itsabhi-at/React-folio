# Using component source code & publishing as npm

## 1. How users get the **source code** in the portfolio

In the **UI Library** section, each component card now has:

- **Copy code** – Copies a **usage snippet** (import + example JSX) to the clipboard.
- **Copy source** – Copies the **full component source code** (the `.js` file) to the clipboard.
- **View source** – Expands an inline code block showing the component source.

Source code is embedded at **build time** so it works without loading external files.

### Build-time generation

- **Script:** `scripts/embed-component-sources.js`
- **Runs:** Automatically before `npm run build` (via `prebuild`), or manually:  
  `npm run generate:sources`
- **Output:** `src/components/ui-library/componentSources.generated.js` (object keyed by component name, e.g. `Button`, `TextInputField`).

Each registry entry needs a **`sourceKey`** that matches one of those keys (e.g. `sourceKey: "Button"`). Add `sourceKey` when you add a new component and ensure a file with that name exists in `src/components/ui-library/components/`.

---

## 2. How users **install via npm**

The repo includes a publishable package so users can install your components in their own project.

### Package layout

- **`packages/ui-library/`** – The npm package (do not edit `index.js` or `components/*.js` by hand; they are generated).
- **`scripts/prepare-package.js`** – Copies the latest component sources from `src/components/ui-library/components/` into `packages/ui-library/components/` and regenerates `packages/ui-library/index.js`.

### Install (for consumers)

After you publish, users run:

```bash
npm install mutate-ui
```

Then in their app:

```jsx
import { Button, TextInputField } from "mutate-ui";
```

They need **React** and **Tailwind** (and the same or overridden CSS variables). See `packages/ui-library/README.md` for details.

### Publishing the package (you)

1. **From repo root**, generate the package files:
   ```bash
   npm run prepare-package
   ```

2. **Optional:** Edit `packages/ui-library/package.json`:
   - Set **`version`** (e.g. `1.0.0`).
   - Set **`author`** and **`repository`** if you like.

3. **Publish:**
   ```bash
   cd packages/ui-library
   npm login
   npm publish
   ```
   If the name is later changed to a scoped package (e.g. `@yourusername/mutate-ui`), use `npm publish --access public`.

### Updating after you change components

1. From repo root: `npm run prepare-package`
2. Bump **version** in `packages/ui-library/package.json`
3. `cd packages/ui-library && npm publish`

---

## Summary

| Goal | What to do |
|------|------------|
| **Show/copy source in the portfolio** | Run `npm run generate:sources` (or rely on `prebuild` before `npm run build`). Ensure each component has `sourceKey` in the registry. |
| **Let users install via npm** | Run `npm run prepare-package`, then publish from `packages/ui-library` (`npm publish`). |
| **Add a new component** | Add the component under `src/components/ui-library/components/`, add an entry with `sourceKey` in `componentRegistry.js`, then run `npm run generate:sources` and `npm run prepare-package` before building/publishing. |
