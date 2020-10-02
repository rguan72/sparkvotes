import React from 'react';

import { CelebrationPage } from './Celebration';

export default {
    title: 'Example/CelebrationPage',
    component: CelebrationPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args) => <CelebrationPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

