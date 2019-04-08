import React from "react";
import angelsInAmerica from "./images/angels-in-america.jpg";
import boJackHorseman from "./images/bojack-horseman.jpg";
import mrRobot from "./images/mr-robot.jpg";
import russianDoll from "./images/russian-doll.jpg";
import sixFeetUnder from "./images/six-feet-under.jpg";
import westWorld from "./images/westworld.jpg";
import Tvshows from "./Tvshows";

export default function Gallery() {
  return (
    <div>
      <div className="container">
        <Tvshows id='angelsinamerica' name="Angels in America" logo={angelsInAmerica} />
        <Tvshows id='bojackhorseman' name="BoJack Horseman" logo={boJackHorseman} />
        <Tvshows id='mrrobot' name="Mr Robot" logo={mrRobot} />
      </div>
      <div className="container">
        <Tvshows id='russiandoll' name="Russian Doll" logo={russianDoll} />
        <Tvshows id='sixfeetunder' name="Six Feet Under" logo={sixFeetUnder} />
        <Tvshows id='westworld' name="Westworld" logo={westWorld} />
      </div>
    </div>
  );
}
