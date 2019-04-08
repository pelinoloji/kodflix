import angelsInAmerica from "./images/angels-in-america.jpg";
import boJackHorseman from "./images/bojack-horseman.jpg";
import mrRobot from "./images/mr-robot.jpg";
import russianDoll from "./images/russian-doll.jpg";
import sixFeetUnder from "./images/six-feet-under.jpg";
import westWorld from "./images/westworld.jpg";


export default function getTechnologies() {
  return [
    { id: "angelsinamerica", name: "Angels in America", logo: angelsInAmerica },
    { id: "bojackhorseman", name: "BoJack Horseman", logo: boJackHorseman },
    { id: "mrrobot", name: "Mr Robot", logo: mrRobot },
    { id: "russiandoll", name: "Russian Doll", logo: russianDoll },
    { id: "sixfeetunder", name: "Six Feet Under", logo: sixFeetUnder },
    { id: "westworld", name: "Westworld", logo: westWorld }
  ];
}
