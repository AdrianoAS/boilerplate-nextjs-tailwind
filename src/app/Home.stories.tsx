import type { StoryObj } from "@storybook/react";

import Home from "./page";

export default {
  title: "Pages/Home",
  component: Home,
};

type HomeStory = StoryObj<typeof Home>;

export const Page: HomeStory = {};
