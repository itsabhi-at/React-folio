import React, { useState, useCallback, useRef, useEffect } from "react";
import { Tab } from "@headlessui/react";
import { motion } from "framer-motion";
import { scrollReveal } from "../animation";
import { COMPONENTS, CATEGORIES } from "./componentRegistry";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function ComponentCard({ item }) {
  const [flipped, setFlipped] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showProps, setShowProps] = useState(false);
  const propsTableWrapRef = useRef(null);

  const hasSnippet = item.usageSnippet && item.usageSnippet.trim().length > 0;
  const hasProps = item.props && item.props.length > 0;

  const openProps = useCallback(() => {
    document.activeElement?.blur();
    setShowProps(true);
  }, []);

  useEffect(() => {
    if (showProps && hasProps) {
      const t = setTimeout(() => propsTableWrapRef.current?.focus(), 50);
      return () => clearTimeout(t);
    }
  }, [showProps, hasProps]);

  const handleCopySnippet = useCallback(async () => {
    if (!item.usageSnippet) return;
    try {
      await navigator.clipboard.writeText(item.usageSnippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = item.usageSnippet;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [item.usageSnippet]);

  return (
    <div
      className={classNames(
        "ui-library-card-flip",
        flipped && "ui-library-card-flip--flipped"
      )}
    >
      <div className="ui-library-card-inner">
        {/* Front: demo + meta + Usage & Props buttons */}
        <div className="ui-library-card-face ui-library-card-face--front">
          <div className="ui-library-card">
            <div className="ui-library-card__demo">
              <item.Component />
            </div>
            <div className="ui-library-card__meta">
              <h3 className="ui-library-card__title">{item.name}</h3>
              <p className="ui-library-card__desc text-light">
                {item.description}
              </p>

              <div className="ui-library-card__actions">
                {hasSnippet && (
                  <button
                    type="button"
                    onClick={() => setFlipped(true)}
                    className="ui-library-usage-btn"
                    aria-label="Show usage code"
                  >
                    Usage
                  </button>
                )}
                {hasProps && (
                  <button
                    type="button"
                    onClick={openProps}
                    className="ui-library-usage-btn"
                    aria-label="Show props"
                  >
                    Props
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Full-card props overlay */}
          {hasProps && showProps && (
            <div
              className="ui-library-props-overlay"
              role="dialog"
              aria-modal="true"
              aria-label={`${item.name} props`}
            >
              <div className="ui-library-props-overlay__inner">
                <div className="ui-library-props-overlay__header">
                  <h3 className="ui-library-props-overlay__title">
                    {item.name} — Props
                  </h3>
                  <button
                    type="button"
                    onClick={() => setShowProps(false)}
                    className="ui-library-usage-btn"
                    aria-label="Close props"
                  >
                    Close
                  </button>
                </div>
                <div
                  ref={propsTableWrapRef}
                  tabIndex={0}
                  className="ui-library-props-overlay__table-wrap"
                  role="region"
                  aria-label="Props table"
                >
                  <table className="ui-library-props__table">
                    <thead>
                      <tr>
                        <th>Prop</th>
                        <th>Type</th>
                        <th>Default</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {item.props.map((p) => (
                        <tr key={p.name}>
                          <td>
                            <code>{p.name}</code>
                          </td>
                          <td>
                            <code className="ui-library-props__type">
                              {p.type}
                            </code>
                          </td>
                          <td>
                            <code>{p.default}</code>
                          </td>
                          <td>{p.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Back: usage snippet + Back button */}
        <div className="ui-library-card-face ui-library-card-face--back">
          <div className="ui-library-card-back">
            <pre className="ui-library-usage-snippet">
              <code>{hasSnippet ? item.usageSnippet : ""}</code>
            </pre>
            <div className="ui-library-card-back__actions">
              <button
                type="button"
                onClick={() => setFlipped(false)}
                className="ui-library-usage-btn"
              >
                Preview
              </button>
              {hasSnippet && (
                <button
                  type="button"
                  onClick={handleCopySnippet}
                  className="ui-library-usage-btn ui-library-usage-btn--copy"
                  aria-label={copied ? "Copied" : "Copy code"}
                >
                  {copied ? "✓ Copied" : "Copy"}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function UiLibrary({ element, controls }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <motion.section
      ref={element}
      variants={scrollReveal}
      initial="show"
      animate="show"
      id="ui-library"
      className="ui-library-section"
    >
      <h5>Mutate</h5>
      <h2 className="center-align">UI Library</h2>
      <p className="ui-library-intro text-light">
        Components built with Tailwind and Headless UI. Copy the code below each
        component to use them in your project, or install the package:
      </p>
      <p className="ui-library-install">
        <code>npm i mutate-ui</code>
      </p>

      <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
        <Tab.List className="ui-library-tabs">
          {CATEGORIES.map((cat) => (
            <Tab
              key={cat}
              className={({ selected }) =>
                classNames(
                  "ui-library-tab",
                  selected ? "ui-library-tab--active" : ""
                )
              }
            >
              {cat}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="ui-library-panels">
          {CATEGORIES.map((cat, panelIndex) => {
            const filtered =
              panelIndex === 0
                ? COMPONENTS
                : COMPONENTS.filter((c) => c.category === cat);
            return (
              <Tab.Panel key={cat} className="ui-library-panel">
                <div className="ui-library-grid">
                  {filtered.length === 0 ? (
                    <p className="text-light col-span-full text-center py-8">
                      No components in this category yet.
                    </p>
                  ) : (
                    filtered.map((item) => (
                      <ComponentCard key={item.id} item={item} />
                    ))
                  )}
                </div>
              </Tab.Panel>
            );
          })}
        </Tab.Panels>
      </Tab.Group>
    </motion.section>
  );
}

export default UiLibrary;
