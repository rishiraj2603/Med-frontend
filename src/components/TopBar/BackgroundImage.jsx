import React from "react";
import styles from "./BackgroundImage.module.css";

const BackgroundImage = () => {
  return (
    <div className={`${styles.BgImage}`}>
      {/* <LinkBar></LinkBar> */}
      <img className={styles.leftImage} src="/HeroGraphicLeft.png" alt="" />
      <img className={styles.rightImage} src="/HeroGraphicRight.png" alt="" />
      <center className={`${styles.content}`}>
        <h1 className="font-serif text-xl font-bold text-gray-950">
          Indian Medicine<span className="text-lime-600"> Database</span>
        </h1>
        <h1 className="text-gray-950">
          Trusted Health Information for you + medicine Database with relevant
          details
        </h1>
      </center>
    </div>
  );
};

export default BackgroundImage;
