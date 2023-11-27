import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'pokemonApp',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
