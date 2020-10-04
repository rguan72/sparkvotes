import React from "react";

import { Bar } from "./Bar";

export default {
  title: "Example/Bar",
  component: Bar,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Bar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  continues: true,
  isCorrect: true,
  correctCaption: "Nice!",
  correctChoices: ["True"]
};
