import React, { useEffect, useState } from "react";
import axios from 'axios';
import EpisodeCard from './EpisodeCard';

export default function EpisodeList(props) {
    // TODO: Add useState to track data from useEffect

    const [epiList, setEpiList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            console.log('fetchData is firing!');
            // TODO: Add AJAX/API Request here - must run in `useEffect`
            //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
            await axios
                .get(`https://rickandmortyapi.com/api/episode/`)
                .then(res => setEpiList(res.data.results))
                .catch(error => console.error('Server Error', error));
        };
        fetchData();
    }, [])
    

console.log(epiList);

return (
    <section className="episode-list grid-view">
        {epiList.map(epi => <EpisodeCard char={epi.name} key={epi.id} />)}
    </section>
)
    }