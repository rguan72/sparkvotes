const questions = [
    {
        title: "Voting rules are the same in every state",
        type: "TF",
        choices: ["True", "False"], 
        correct: [1],
        correctCaption: "Nice!",
        incorrectCaption: "Ur a bum"
    },
    {
        title: "You need to update your registration whenever you move",
        type: "TF",
        choices: ["True", "False"], 
        correct: [0],
        correctCaption: "Awesome!",
        incorrectCaption: "Ur a bum"
    },
    {
        title: "Absentee Voting is another name for (check all that apply)",
        type: "SA",
        choices: ["Voting by mail", "Voting early", "Voting at home"], 
        correct: [0, 1, 2],
        correctCaption: "Amazing!",
        incorrectCaption: "Ur a bum"
    },
    {
        title: "In Michigan you have the right to register to vote up to and on election day",
        type: "TF",
        choices: ["True", "False"], 
        correct: [0],
        correctCaption: "Nice job!",
        incorrectCaption: "Ur a bum"
    },
    {
        title: "Where do you sign your absentee ballot?",
        type: "MC",
        choices: ["Bottom of ballot", "Top of ballot", "Back of envelope"], 
        correct: [2],
        correctCaption: "Nice!",
        incorrectCaption: "Ur a bum"
    },
    {
        title: "You have to vote on everything on the ballot in order for your vote to count.",
        type: "TF",
        choices: ["True", "False"], 
        correct: [1],
        correctCaption: "Perfect!",
        incorrectCaption: "Ur a bum"
    }
];

export {questions};