import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect

  const [charList, setCharList] = useState([]);

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(res => {
        setCharList(res.data.results)})
      .catch(error => {
        console.error('Server Error', error);
      })
  }, [charList]);

  console.log("Char List: ", charList);

  return (
    <section className="character-list grid-view">
      {charList.map(char => <CharacterCard char={char.name} key={char.id} /> )}
    </section>
  );
}
