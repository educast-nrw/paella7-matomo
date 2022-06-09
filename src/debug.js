import { Paella } from 'paella-core';
import getMatomoPluginContext from './index';

const initParams = {
    customPluginContext: [
        getMatomoPluginContext()
    ]
};

let paella = new Paella('player-container', initParams);

paella.loadManifest()
    .then(() => console.log("done"))
    .catch(e => console.error(e));