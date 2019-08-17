import React from 'react';
import { Route } from 'react-router-dom';
import WelcomePage from './WelcomePage';
import CharacterList from './CharacterList';
import LocationsList from './LocationsList';
import EpisodeList from './EpisodeList';

export default function AppRouter() {
    return (
        <div>
            <Route exact path="/" component={WelcomePage} />
            <Route exact path="/Characters" component={CharacterList} />
            <Route exact path="/Locations" component={LocationsList} />
            <Route exact path="/Episodes" component={EpisodeList} />
        </div>
    )
}
