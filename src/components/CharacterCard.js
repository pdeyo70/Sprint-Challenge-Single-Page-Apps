import React from "react";

export default function CharacterCard(props) {
  return <div>
          <img src={props.char.image} />
          <h3>{props.char.name}</h3>
          <h4>{props.char.species} {props.char.staus}</h4>
          <p>Location: {props.char.location}</p>
          <p>Origin: {props.char.origin}</p>

        </div>;
}
