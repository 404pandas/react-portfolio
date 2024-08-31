import React from "react";
import "./style.css";
import alligator from "../../assets/images/alligator.svg";
import graveyard from "../../assets/images/graveyard.svg";
import hills from "../../assets/images/hills.svg";
import octopus from "../../assets/images/octopus.svg";
import plains from "../../assets/images/plains.svg";
import seaMonster from "../../assets/images/sea-monster.svg";
import tornado from "../../assets/images/tornado.svg";
import tree from "../../assets/images/tree.svg";
const RandomMapIcons = () => {
  const randomIcons = [
    {
      id: "alligator",
      src: alligator,
    },
    {
      id: "graveyard",
      src: graveyard,
    },
    {
      id: "hills",
      src: hills,
    },
    {
      id: "octopus",
      src: octopus,
    },
    {
      id: "plains",
      src: plains,
    },
    {
      id: "sea-monster",
      src: seaMonster,
    },
    {
      id: "tornado",
      src: tornado,
    },
    {
      id: "tree",
      src: tree,
    },
  ];

  return (
    <div className="random-icon-container" id="rIcons-z">
      {randomIcons.map(({ id, src }) => (
        <div key={id} className={`random-icon ${id}`}>
          <img src={src} alt={`${id} icon`} className="random-icon-img" />
        </div>
      ))}
    </div>
  );
};

export default RandomMapIcons;
