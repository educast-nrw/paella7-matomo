import MatomoTrackingData from './plugins/org.opencast.paella.matomoTrackingData';

export default function getMatomoPluginContext() {
    return require.context("./plugins", true, /\.js/);
}

export const MatomoTrackingDataPlugin = MatomoTrackingData;