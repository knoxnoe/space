import * as path from 'node:path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'S',
  // icon: '/rspress-icon.png',
  // logo: {
  //   light: '/rspress-light-logo.png',
  //   dark: '/rspress-dark-logo.png',
  // },
  outDir: "public",
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/knoxnoe/space',
      },
    ],
  },
});
