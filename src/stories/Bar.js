import React from "react";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import "./bar.css";

/**
 * Primary UI component for user interaction
 */
export const Bar = ({ continues, isCorrect, correctCaption, incorrectCaption, correctChoices }) => {
  return (
    <Box
      position="absolute"
      bottom={0}
      height="10vh"
      className="bar-box"
    >
      {continues && <Box>{isCorrect ? correctCaption : incorrectCaption}</Box>}
      {continues && !isCorrect && (
        <Box> The correct answer is {correctChoices}</Box>
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
