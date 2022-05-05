import React from "react";
import "./portfolio.css";
import POOCS from "../../assets/poocs.png";
import WAVES from "../../assets/wave-music.png";

const data = [
  {
    id: 1,
    // image: POOCS,
    title: "Complete E-commerce Website",
    github: "linktogithub",
    demo: "demo-link",
  },
  {
    id: 2,
    image: WAVES,
    title: "React Music Player",
    github: "https://github.com/itsabhi-at/music-player-react",
    demo: "https://react-wavesplayer.netlify.app/",
  },
  {
    id: 3,
    // image: IMG3,
    title: "Photon Gallery",
    github: "linktogithub",
    demo: "demo-link",
  },
  {
    id: 4,
    // image: IMG4,
    title: "Instagram Fluter",
    github: "linktogithub",
    demo: "demo-link",
  },
  {
    id: 5,
    // image: IMG5,
    title: "Vanilla Portfolio",
    github: "Vanilla Portfolio",
    demo: "demo-link",
  },
  {
    id: 6,
    // image: IMG5,
    title: "Consultancy Website",
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
                <img src={dataset.image} alt="poocs" />
                <h3>{dataset.title}</h3>
                <div className="portfolio__item-cta">
                  <a target={"_blank"} href={dataset.github} className="btn">
                    Github
                  </a>
                  <a
                    target={"_blank"}
                    href={dataset.demo}
                    className="btn btn-primary"
                  >
                    Demo Live
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
