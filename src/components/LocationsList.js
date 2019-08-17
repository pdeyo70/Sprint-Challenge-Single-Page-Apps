import React, { useEffect, useState } from "react";
import axios from 'axios';
import LocationCard from './LocationCard'

export default function LocationsList(props) {
    const [locList, setLocList] = useState();

    useEffect(() => {
        // TODO: Add AJAX/API Request here - must run in `useEffect`
        //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
        axios
            .get(`https://rickandmortyapi.com/api/location/`)
            .then(res => {
                setLocList(res.data)
            })
            .catch(error => {
                console.error('Server Error', error);
            })
    }, [locList]);

    return (
        <section className="location-list grid-view">
            {locList.map(loc => <LocationCard loc={loc.name} key={loc.id} />)}
        </section>)
}