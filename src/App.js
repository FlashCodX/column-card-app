import styles from "./styles/App.module.css";
const sedans = require("./assets/icon-sedans.svg").default;
const suvs = require("./assets/icon-suvs.svg").default;
const luxury = require("./assets/icon-luxury.svg").default;
const { app, card, contentContainer, learnMoreBtn, attribution } = styles;
function App() {
  return (
    <div className={app}>
      <main className={card}>
        <div className={contentContainer}>
          <img src={sedans} alt="carimage" />
          <h1>Sedans</h1>
          <p>
            Choose a sedan for its affordability and excellent fuel economy.
            Ideal for cruising in the city or on your next road trip.
          </p>
          <button className={learnMoreBtn}>Learn More</button>
        </div>
        <div className={contentContainer}>
          <img src={suvs} alt="carimage" />
          <h1>Suvs</h1>
          <p>
            Take an SUV for its spacious interior, power, and versatility.
            Perfect for your next family vacation and off-road adventures.
          </p>
          <button className={learnMoreBtn}>Learn More</button>
        </div>
        <div className={contentContainer}>
          <img src={luxury} alt="carimage" />
          <h1>Luxury</h1>
          <p>
            Cruise in the best car brands without the bloated prices. Enjoy the
            enhanced comfort of a luxury rental and arrive in style.
          </p>
          <button className={learnMoreBtn}>Learn More</button>
        </div>
      </main>

      <footer className={attribution}>
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io/challenges/3column-preview-card-component-pH92eAR2-"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://www.linkedin.com/in/luispintodev/"
          target="_blank"
          rel="noreferrer"
        >
          Luís Pinto
        </a>
        .
      </footer>
    </div>
  );
}

export default App;
