import Heading from './index';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'não sei',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => <Heading {...args} />;
