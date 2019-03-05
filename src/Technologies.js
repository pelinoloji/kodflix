import React from "react";
import angelsInAmerica from "./images/angels-in-america.jpg";
import boJackHorseman from "./images/bojack-horseman.jpg";
import mrRobot from "./images/mr-robot.jpg";
import russianDoll from "./images/russian-doll.jpg";
import sixFeetUnder from "./images/six-feet-under.jpg";
import westWorld from "./images/westworld.jpg";
import Tvshows from "./Tvshows";

export default function Technologies() {
  return (
    <div>
      <div className="container">
        <Tvshows name="Angels in America" logo={angelsInAmerica} />
        <Tvshows name="BoJack Horseman" logo={boJackHorseman} />
        <Tvshows name="Mr Robot" logo={mrRobot} />
      </div>
      <div className="container">
        <Tvshows name="Russian Doll" logo={russianDoll} />
        <Tvshows name="Six Feet Under" logo={sixFeetUnder} />
        <Tvshows name="Westworld" logo={westWorld} />
      </div>
    </div>
  );
}
