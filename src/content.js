const questions = [
    {
        title: "Voting rules are the same in every state",
        type: "TF",
        choices: ["True", "False"], 
        correct: [1],
        correctCaption: "Nice!",
        incorrectCaption: "For Michigan's rules, check out michigan.gov/vote"
    },
    {
        title: "You need to update your registration whenever you move",
        type: "TF",
        choices: ["True", "False"], 
        correct: [0],
        correctCaption: "Awesome!",
        incorrectCaption: "Do so at michigan.gov/vote or your city clerk's office"
    },
    {
        title: "Where can you find a clerk's office in Ann Arbor? (check all that apply)",
        type: "SA",
        choices: ["Ann Arbor City Hall", "UMich Museum of Art (UMMA)", "Angell Hall", "Pierpont Commons"],
        correct: [0, 1],
        correctCaption: "Great!",
        incorrectCaption: ""
    },
    {
        title: "Absentee Voting is another name for (check all that apply)",
        type: "SA",
        choices: ["Voting by mail", "Voting early", "Voting at home"], 
        correct: [0, 1, 2],
        correctCaption: "Amazing!",
        incorrectCaption: ""
    },
    {
        title: "In Michigan you have the right to register to vote up to and on election day",
        type: "TF",
        choices: ["True", "False"], 
        correct: [0],
        correctCaption: "Nice job! However, deadline to register online is 10/19",
        incorrectCaption: "However, deadline to register online is 10/19"
    },
    {
        title: "Where do you sign your absentee ballot?",
        type: "MC",
        choices: ["Bottom of ballot", "Top of ballot", "Back of envelope"], 
        correct: [2],
        correctCaption: "Nice!",
        incorrectCaption: ""
    },
    {
        title: "You have to vote on everything on the ballot in order for your vote to count",
        type: "TF",
        choices: ["True", "False"], 
        correct: [1],
        correctCaption: "Perfect!",
        incorrectCaption: ""
    }
];

export {questions};