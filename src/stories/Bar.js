import React from "react";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { useSpring, animated } from "react-spring";
import "./bar.css";

/**
 * Primary UI component for user interaction
 */
export const Bar = ({ continues, isCorrect, correctCaption, incorrectCaption, correctChoices }) => {
  return (
    <Box
      mt={"3vh"}
      position="absolute"
      bottom={0}
      left={0}
      width="100vw"
      height="14vh"
      className="bar-box"
    >
      {continues && <Box ml={"5vw"} mt={"1vh"}>{isCorrect ? correctCaption : ""}</Box>}
      {continues && !isCorrect && (
        <Box ml={"5vw"}>
          <Typography>Correct Answer:</Typography>
          <Typography>{correctChoices}</Typography>
        </Box>
      )}
    </Box>
  );
};

Bar.propTypes = {
  /**
   * Has the user already submitted an answer, making the button show continue?
   */
  continues: PropTypes.bool,
  isCorrect: PropTypes.bool,
  correctCaption: PropTypes.string,
  incorrectCaption: PropTypes.string,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Bar.defaultProps = {
  continues: false,
  isCorrect: true,
  correctCaption: "",
  incorrectCaption: "",
};
