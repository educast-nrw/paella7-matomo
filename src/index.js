export default function getMatomoPluginContext() {
    return require.context("./plugins", true, /\.js/);
}