import 'reflect-metadata';
import { loadConfig, InputControl, OutputControl } from '@teliagen/commons';
import { TeliagenApp } from '@teliagen/server';

import { HelloActions } from './src/modules/hello/actions/hello.actions.js';

export async function createApp() {
     console.log('[App] Starting createApp...');
     const { config } = await loadConfig();
     console.log('[App] Config loaded:', config.server?.name);

     const app = new TeliagenApp();

     // Features
     app.use(InputControl());
     app.use(OutputControl());

     // Actions
     app.registerActions(HelloActions);

     return app;
}
