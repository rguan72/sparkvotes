import React from 'react';

import { Choice } from './Choice';

export default {
    title: 'Example/Choice',
    component: Choice,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args) => <Choice {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    selected: true,
    label: 'Button',
};

