import { PluginModule } from 'paella-core';
import packageData from '../../package.json';

export default class matomoTracking extends PluginModule {
    get moduleName() {
        return 'paella-matomo-plugin';
    }

    get moduleVersion() {
        return packageData.version;
    }
}