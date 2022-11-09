import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Button from "../components/Button";

export default {
	title: "Tasty-kit/Button",
	component: Button,
};

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	type: "primary",
	title: "button primary",
};
