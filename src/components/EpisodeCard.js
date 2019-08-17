import React from "react";

export default function EpisodeCard(props) {
    return <div>
        <h3>{props.name}</h3>
        <h4>{props.episode}</h4>
        <p>Air Date: {props.air_date}</p>

    </div>;
}
