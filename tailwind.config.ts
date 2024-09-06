import type { Config } from 'tailwindcss';

const config: Config = {
  content: {
    relative: true,
    files: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.stories.{js,ts,jsx,tsx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}'
    ]
  },
  theme: {
    extend: {}
  },
  plugins: []
};
export default config;
