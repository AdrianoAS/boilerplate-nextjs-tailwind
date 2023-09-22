import Home from './page';

import type { StoryObj } from '@storybook/react';

export default {
  title: 'Pages/Home',
  component: Home
};

type HomeStory = StoryObj<typeof Home>;

export const Page: HomeStory = {};
