import React from 'react';

import { Question } from './Question';

export default {
    title: 'Example/Question',
    component: Question,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args) => <Question {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    selected: true,
    label: 'Button',
};

