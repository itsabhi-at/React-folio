import React from "react";
import "./portfolio.css";
const WAVES = require("../../assets/wave-music.png");
const CRYPTO = require("../../assets/cryptoverse.png");
const INSTA = require("../../assets/insta-clone.png");
const INDINC = require("../../assets/indInc.png");
const data = [
  // {
  //   id: 1,
  //   // image: POOCS,
  //   title: "Complete E-commerce Website",
  //   github: "linktogithub",
  //   demo: "demo-link",
  // },
  {
    id: 2,
    image: WAVES,
    title: "React Music Player",
    github: "https://github.com/itsabhi-at/music-player-react",
    demo: "https://react-wavesplayer.netlify.app/",
  },
  {
    id: 3,
    image: CRYPTO,
    title: "CryptoVerse",
    github: "https://github.com/itsabhi-at/Cryptoverse",
    demo: "https://reactfolio-cryptoverse.netlify.app/",
  },
  {
    id: 4,
    image: INSTA,
    title: "Instagram Flutter",
    github: "https://github.com/itsabhi-at/insta-clone",
    demo: "https://flutter-insta.netlify.app/#/",
  },
  {
    id: 5,
    image: INDINC,
    title: "Independent Inc.",
    github: "https://github.com/itsabhi-at/independent-web",
    demo: "https://independent-web.vercel.app",
  },
  // {
  //   id: 6,
  //   // image: IMG5,
  //   title: "Consultancy Website",
  //   github: "linktogithub",
  //   demo: "demo-link",
  // },
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
                  <a
                    target={"_blank"}
                    href={dataset.github}
                    rel="noreferrer"
                    className="btn"
                  >
                    Github
                  </a>
                  <a
                    rel="noreferrer"
                    target={"_blank"}
                    href={dataset.demo ? dataset.demo : void 0}
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
