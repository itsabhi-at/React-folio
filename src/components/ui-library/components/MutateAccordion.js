import React, { useState } from "react";

const svgProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  className: "mutate-accordion__chevron",
  "aria-hidden": true,
};
const pathProps = {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2,
};

const AngleRightIcon = () => (
  <svg {...svgProps}>
    <path {...pathProps} d="m9 5 7 7-7 7" />
  </svg>
);

const AngleDownIcon = () => (
  <svg {...svgProps}>
    <path {...pathProps} d="m19 9-7 7-7-7" />
  </svg>
);

/**
 * Accordion with optional single or multiple open panels.
 * Uses project CSS variables and Tailwind; no external icon dependency.
 *
 * @param {Array<{ id: string, title: string, content: React.ReactNode }>} items - Panels to render
 * @param {boolean} [allowMultiple] - If true, multiple panels can be open; otherwise only one at a time
 * @param {number | number[]} [defaultOpen] - Initial open index (number) or indices (array when allowMultiple)
 * @param {function} [onToggle] - (index, isOpen) => void when a panel is toggled
 * @param {React.ReactNode} [icon] - Optional custom icon for the trigger. When provided, the icon rotates 180° when open. Omit to use default angle-right (closed) / angle-down (open).
 * @param {string} [className] - Extra Tailwind/custom classes for the root accordion wrapper
 * @param {string} [itemClassName] - Extra Tailwind/custom classes for each accordion item
 * @param {string} [triggerClassName] - Extra Tailwind/custom classes for the trigger button
 * @param {string} [iconClassName] - Extra Tailwind/custom classes for the trigger icon wrapper
 * @param {string} [panelClassName] - Extra Tailwind/custom classes for the panel wrapper
 * @param {string} [panelContentClassName] - Extra Tailwind/custom classes for the panel content inner div
 */
function MutateAccordion({
  items = [],
  allowMultiple = false,
  defaultOpen = null,
  onToggle,
  icon,
  className,
  itemClassName,
  triggerClassName,
  iconClassName,
  panelClassName,
  panelContentClassName,
}) {
  const getInitialOpen = () => {
    if (defaultOpen == null) return allowMultiple ? [] : null;
    return allowMultiple
      ? Array.isArray(defaultOpen)
        ? defaultOpen
        : [defaultOpen]
      : defaultOpen;
  };

  const [openState, setOpenState] = useState(getInitialOpen);

  const isOpen = (index) =>
    allowMultiple ? openState.includes(index) : openState === index;

  const toggle = (index) => {
    if (allowMultiple) {
      const next = openState.includes(index)
        ? openState.filter((i) => i !== index)
        : [...openState, index];
      setOpenState(next);
      onToggle?.(index, next.includes(index));
    } else {
      const next = openState === index ? null : index;
      setOpenState(next);
      onToggle?.(index, next === index);
    }
  };

  const renderTriggerIcon = (index) => {
    if (icon !== undefined && icon !== null) {
      return <span className={isOpen(index) ? "rotate-180 inline-block" : "inline-block"}>{icon}</span>;
    }
    return isOpen(index) ? <AngleDownIcon /> : <AngleRightIcon />;
  };

  return (
    <div
      className={["mutate-accordion space-y-2", className].filter(Boolean).join(" ")}
      role="region"
      aria-label="Accordion"
    >
      {items.map((item, index) => (
        <div
          key={item.id ?? index}
          className={[
            "mutate-accordion__item rounded-xl border border-white/10 bg-white/5 overflow-hidden transition-colors hover:bg-white/10",
            itemClassName,
          ].filter(Boolean).join(" ")}
        >
          <button
            type="button"
            onClick={() => toggle(index)}
            aria-expanded={isOpen(index)}
            aria-controls={`mutate-accordion-panel-${item.id ?? index}`}
            id={`mutate-accordion-button-${item.id ?? index}`}
            className={[
              "mutate-accordion__trigger w-full flex items-center justify-between gap-3 px-4 py-3 text-left text-[15px] font-medium text-white/90 hover:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[var(--color-bg)]",
              triggerClassName,
            ].filter(Boolean).join(" ")}
          >
            <span className="flex-1">{item.title}</span>
            <span
              className={[
                "mutate-accordion__icon flex-shrink-0 rounded-full flex items-center justify-center text-white transition-transform duration-300 ease-out",
                isOpen(index) ? "bg-primary" : "bg-primary",
                iconClassName,
              ].filter(Boolean).join(" ")}
              aria-hidden
            >
              {renderTriggerIcon(index)}
            </span>
          </button>
          <div
            id={`mutate-accordion-panel-${item.id ?? index}`}
            role="region"
            aria-labelledby={`mutate-accordion-button-${item.id ?? index}`}
            aria-hidden={!isOpen(index)}
            className={[
              "mutate-accordion__panel",
              isOpen(index) ? "mutate-accordion__panel--open" : "",
              panelClassName,
            ].filter(Boolean).join(" ")}
          >
            <div className="mutate-accordion__panel-inner">
              <div
                className={[
                  "px-4 pb-4 pt-1 text-sm text-white/80 border-t border-white/5",
                  panelContentClassName,
                ].filter(Boolean).join(" ")}
              >
                {typeof item.content === "string" ? (
                  <span className="block">{item.content}</span>
                ) : (
                  item.content
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MutateAccordion;
