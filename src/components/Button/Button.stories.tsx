import Button from './index';

import type { StoryObj } from '@storybook/react';

export default {
  title: 'Components/Button',
  component: Button
};

type ButtonStory = StoryObj<typeof Button>;

export const Index: ButtonStory = {};
