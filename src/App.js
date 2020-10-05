import React, {useState} from 'react';
import './App.css';
import {questions} from "./content.js"
import {Question} from "./stories/Question.js"
import { CelebrationPage } from "./stories/Celebration.js"
import { LandingPage } from "./stories/LandingPage.js"
import {withStyles} from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import Box from "@material-ui/core/Box";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 30,
    borderRadius: 20,
  },
  colorPrimary: {
    backgroundColor:
        theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "#1a90ff",
  },
}))(LinearProgress);

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Raleway", "Arial"].join(","),
  },
});

function App() {
  const [questionIndex, setQuestionIndex] = useState(-1);
  let currentQuestion = questions[questionIndex];
  let main;
  if(questionIndex === -1) {
    main = <LandingPage next={() => setQuestionIndex(questionIndex + 1)} />
  }
  else if (questionIndex >= questions.length) {
    main = <CelebrationPage />
  }
  else {
    main = (
      <Box>
        <Box mt={"3vh"} px={"5vw"}>
          <BorderLinearProgress
            variant="determinate"
            value={(questionIndex / questions.length) * 100.0}
          />
        </Box>
        <Box mt={"3vh"} px={"5vw"}>
          <Question
            incrementQuestion={() => setQuestionIndex(questionIndex + 1)}
            title={currentQuestion.title}
            type={currentQuestion.type}
            correct={currentQuestion.correct}
            choices={currentQuestion.choices}
            correctCaption={currentQuestion.correctCaption}
            incorrectCaption={currentQuestion.incorrectCaption}
          ></Question>
        </Box>
      </Box>
    );
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {main}
    </ThemeProvider>
  )
}

export default App;
