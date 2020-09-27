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

export const TrueFalse = Template.bind({});
TrueFalse.args = {
    title: "Voting rules are the same in every state",
    type: "TF",
    choices: ["True", "False"],
    correct: [1],
    correctCaption: "Nice Bro!",
    incorrectCaption: "Ur a bum",
    incrementQuestion: () => console.log("incremented"),
};

export const MultipleChoice = Template.bind({});
MultipleChoice.args = {
    title: "Where do you sign your absentee ballot?",
    type: "MC",
    choices: ["Bottom of ballot", "Top of ballot", "Back of envelope", "Front of envelope"],
    correct: [2],
    correctCaption: "Nice bro!!!!",
    incorrectCaption: "Ur a bum",
}

export const SelectAll = Template.bind({});
SelectAll.args = {
    title: "Absentee Voting is another name for (check all that apply)",
    type: "SA",
    choices: ["voting by mail", "voting early", "voting at home"],
    correct: [0, 1, 2],
    correctCaption: "Nice bro!!!!",
    incorrectCaption: "Ur a bum",
}

