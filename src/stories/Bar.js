import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { useSpring, animated } from "react-spring";
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
  const props = useSpring({ height: "20vh", from: {height: "0vh"}})
  const AnimatedBox = animated(Box)
  let correctChoicesMapped = correctChoices;
  if (correctChoices.length > 1) {
    correctChoicesMapped = correctChoices.map((item, idx) => { if (idx < correctChoices.length - 1) { return `${item}, ` } else { return item } })
  }
  return (
    <AnimatedBox
      mt={"3vh"}
      position="absolute"
      bottom={0}
      left={0}
      width="100vw"
      height={props.height}
      style = {{
        backgroundColor: isCorrect ? "#d4e6ae" : "#cf6428",
        zIndex: 2,
        marginTop: "3vh",
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100vw",
        height: "20vh",
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
    </AnimatedBox>
  );
};



