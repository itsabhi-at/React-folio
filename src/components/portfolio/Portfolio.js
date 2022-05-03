import React from "react";
import "./portfolio.css";
import POOCS from "../../assets/poocs.png";

const data = [
  {
    id: 1,
    // image: IMG1,
    title: "title",
    github: "linktogithub",
    demo: "demo-link",
  },
  {
    id: 2,
    // image: IMG2,
    title: "title",
    github: "linktogithub",
    demo: "demo-link",
  },
  {
    id: 3,
    // image: IMG3,
    title: "title",
    github: "linktogithub",
    demo: "demo-link",
  },
  {
    id: 4,
    // image: IMG4,
    title: "title",
    github: "linktogithub",
    demo: "demo-link",
  },
  {
    id: 5,
    // image: IMG5,
    title: "title",
    github: "linktogithub",
    demo: "demo-link",
  },
  {
    id: 6,
    // image: IMG5,
    title: "title",
    github: "linktogithub",
    demo: "demo-link",
  },
];

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map((dataset) => {
          return (
            <article key={dataset.id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={POOCS} alt="poocs" />
                <h3>{dataset.title}</h3>
                <div className="portfolio__item-cta">
                  <a href="#1" className="btn">
                    {dataset.github}
                  </a>
                  <a href="#1" className="btn btn-primary" target="_blank">
                    {dataset.demo}
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
