import React, { useEffect } from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { useSpring, animated } from "react-spring";
import "./bar.css";


const trans = (y) => `translate(0vh, ${y})`;
/**
 * Primary UI component for user interaction
 */
export const Bar = ({ continues, isCorrect, correctCaption, incorrectCaption, correctChoices }) => {
  const endHeight = "37vh"
  const [props, set] = useSpring(() => ({ y: endHeight}))
  useEffect(() => {
    if (continues) set({ y: "0vh" })
    else set({ y: endHeight })
  }, [continues, set])
  let correctChoicesMapped = correctChoices;
  if (correctChoices.length > 1) {
    correctChoicesMapped = correctChoices.map((item, idx) => { if (idx < correctChoices.length - 1) { return `${item}, ` } else { return item } })
  }
  return (
    <animated.div
      style={{
        backgroundColor: isCorrect ? "#d4e6ae" : "rgb(232, 187, 214)",
        opacity: .9,
        flexShrink: 0,
        zIndex: 2,
        position: "absolute",
        height: endHeight,
        bottom: 0,
        left: 0,
        marginTop: "3vh",
        width: "100vw",
        transform: props.y.interpolate(trans),
        display: continues ? "block" : "none",
      }}
    >
      {continues && (
        <Box ml={"5vw"} mt={"1vh"}>
          {isCorrect ? (
            <Typography variant="h4">{correctCaption}</Typography>
          ) : (
            ""
          )}
        </Box>
      )}
      {continues && !isCorrect && (
        <Box ml={"5vw"}>
          <Typography variant="h5">Correct Answer:</Typography>
          <Typography variant="h5" style={{ fontWeight: "bold" }}>
            {correctChoicesMapped}
          </Typography>
          <Typography variant="body1">
            {incorrectCaption}
          </Typography>
        </Box>
      )}
    </animated.div>
  );
};  



