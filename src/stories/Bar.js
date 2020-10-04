import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import AnimateHeight from 'react-animate-height';
import "./bar.css";

/**
 * Primary UI component for user interaction
 */
export const Bar = ({ continues, isCorrect, correctCaption, incorrectCaption, correctChoices }) => {
  // const [props, setHeight, _] = useSpring(() => ({ height: "20vh", config: { mass: 200, tension: 350, friction: 400 } }))
  // useEffect(() => {
  //   if (continues) set({ height: "20vh" });
  //   else set({ height: "0vh" });
  // }, [continues, set]);
  // useEffect(() => {
  //   console.log("yooo")
  //   setHeight({ height: "20vh" })
  // }, [setHeight])
  
  const [ height, setHeight ] = useState("0vh")
  useEffect(() => {
    if (continues) setHeight("20vh");
    else setHeight("0vh")
  }, [continues])
  let correctChoicesMapped = correctChoices;
  if (correctChoices.length > 1) {
    correctChoicesMapped = correctChoices.map((item, idx) => { if (idx < correctChoices.length - 1) { return `${item}, ` } else { return item } })
  }
  return (
      <AnimateHeight
        id="bottom-bar"
        height={height}
        duration={ 500 }
        style={{
          backgroundColor: isCorrect ? "#d4e6ae" : "#cf6428",
          flexShrink: 0,
          zIndex: 2, 
          position: "absolute",
          bottom: 0,
          left: 0,
          marginTop: "3vh",
          width: "100vw"
        }}
      >
        {continues && (
          <Box ml={"5vw"} mt={"1vh"}>
            {isCorrect ? <Typography variant="h5">{correctCaption}</Typography> : ""}
          </Box>
        )}
        {continues && !isCorrect && (
          <Box ml={"5vw"}>
            <Typography variant="h4" style={{ color: "white" }}>Correct Answer:</Typography>
            <Typography variant="h5">{correctChoicesMapped}</Typography>
          </Box>
        )}
      </AnimateHeight>
  );
};  



