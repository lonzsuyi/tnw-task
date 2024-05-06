import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  video: true,
  videoCompression: 32,
  videosFolder: 'cypress/videos',
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: { default: 'nx run info:start' },
      ciWebServerCommand: 'nx run info:serve-static',
    }),
    baseUrl: 'http://localhost:3000',
  },
});
