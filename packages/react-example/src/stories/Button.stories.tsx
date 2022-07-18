import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "my-awesome-package";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const DefaultButton = Template.bind({});
DefaultButton.args = {
  label: "Default button",
  onClick: () => console.info("Click event!"),
  onBlur: () => console.warn("Blur event!"),
  variant: "default"
};

export const JoyfulButton = Template.bind({});
JoyfulButton.args = {
  label: "Joyful button",
  onClick: () => console.info("Click event!"),
  onBlur: () => console.warn("Blur event!"),
  variant: "joyful"
};

export const SadButton = Template.bind({});
SadButton.args = {
  label: "Sad button",
  onClick: () => console.info("Click event!"),
  onBlur: () => console.warn("Blur event!"),
  variant: "sad"
};

export const DisabledButton = Template.bind({});
DisabledButton.args = {
  label: "Disabled button",
  onClick: () => console.info("Click event!"),
  onBlur: () => console.warn("Blur event!"),
  variant: "default",
  disabled: true
};
