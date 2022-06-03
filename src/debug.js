import { Paella } from 'paella-core';
import getTutorialPluginContext from './index';

const initParams = {
    customPluginContext: [
        getTutorialPluginContext()
    ]
};

let paella = new Paella('player-container', initParams);

paella.loadManifest()
    .then(() => console.log("done"))
    .catch(e => console.error(e));