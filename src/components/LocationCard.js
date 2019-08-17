import React from "react";

export default function LocationCard({ name, type, dimension, residents }) {
  return (<div>
            <h3>{name}</h3>
            <p>{type} - {dimension}</p>
            <p>{residents} residents</p>
  </div>);
}
