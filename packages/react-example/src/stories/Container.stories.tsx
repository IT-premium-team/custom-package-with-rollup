import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Container } from "my-awesome-package";

export default {
  title: "Example/Container",
  component: Container,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => <Container {...args} />;

export const DarkLargeRow = Template.bind({});
DarkLargeRow.args = {
  variant: "dark",
  paddings: "large",
  contentAlignment: "row",
  onBlur: () => console.info("Blur event!"),
  children: <>Rendered children 1</>
};

export const DefaultSmallRow = Template.bind({});
DefaultSmallRow.args = {
  variant: "default",
  paddings: "small",
  contentAlignment: "row",
  onBlur: () => console.info("Blur event!"),
  children: <>Rendered children 2</>
};

export const LightColWithNoPadding = Template.bind({});
LightColWithNoPadding.args = {
  variant: "light",
  paddings: "noPadding",
  contentAlignment: "col",
  onBlur: () => console.info("Blur event!"),
  children: <>Rendered children 3</>
};

