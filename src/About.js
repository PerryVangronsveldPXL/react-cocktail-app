import React from "react";
import boozeLab from "./images/booze-lab.jpg";

const About = () => {
  return (
    <div className="about-container clearfix">
      <img className="about-img" src={boozeLab} alt="Perry from Booze Lab" />
      <div className="about-content">
        <p>&nbsp;</p>
        <p>
          Hi there! My name's Perry and I'm passionate about cocktails. In my
          quest for true cocktail delight, I decided to record the recipes for
          my favorite cocktails here at my <strong>Booze Lab</strong>.
        </p>
        <p>&nbsp;</p>
        <p>
          Please note that every cocktail you find on here is made exactly how I
          like it best. Feel free to tweak any of the recipes to your liking.
          After all, that's an essential part of the art of cocktail making.
        </p>
        <p>&nbsp;</p>
        <p>
          Have fun browsing Booze Lab, and if any recipe grabs your attention,
          just add it to your favorites. Cheers!
        </p>
      </div>
    </div>
  );
};

export default About;
