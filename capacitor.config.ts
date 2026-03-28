import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.aquapoolco.admin.app',
  appName: 'Aquapoolco Admin',
  webDir: 'dist',
  server: {
    url: 'https://aquapoolco-admin.onrender.com/',
    allowNavigation: ['aquapoolco-admin.onrender.com']
  }
};

export default config;
