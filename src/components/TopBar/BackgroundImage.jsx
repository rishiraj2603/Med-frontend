import React from "react";
import styles from "./BackgroundImage.module.css";
import Navbar from "./Navbar";
import LinkBar from "./LinkBar";

const BackgroundImage = ({ getData }) => {
  return (
    <div className={`${styles.BgImage}`}>
      <Navbar getData={getData}></Navbar>
      {/* <LinkBar></LinkBar> */}
      <img className={styles.leftImage} src="/HeroGraphicLeft.png" alt="" />
      <img className={styles.rightImage} src="/HeroGraphicRight.png" alt="" />
      <center className={`${styles.content}`}>
        <h1 className="font-serif text-4xl font-bold text-gray-950">
          Indian Medicine<span className="text-lime-600"> Database</span>
        </h1>
        <h1 className="text-gray-950">
          Trusted Health Information for you + med
          <span className="text-gray-50">
            icine Database with relevant details
          </span>
        </h1>
      </center>
    </div>
  );
};

export default BackgroundImage;
