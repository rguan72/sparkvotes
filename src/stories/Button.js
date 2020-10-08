import React from 'react';
import PropTypes from 'prop-types';
import Button from "@material-ui/core/Button"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import './button.css';

/**
 * Primary UI component for user interaction
 */
export const Submit = ({ continues, onClick, disabled}) => {
  return (
    <Button
      variant={"contained"}
      onClick={onClick}
      disabled={disabled}
      style={{ zIndex: 3}}
    >
      <Box mx={"30vw"} my={".2vh"}>
        <Typography variant="h5">{continues ? "Continue" : "Submit"}</Typography>
      </Box>
    </Button>
  );
};

Submit.propTypes = {
  /**
   * Has the user already submitted an answer, making the button show continue?
   */
  continues: PropTypes.bool,
  disabled: PropTypes.bool,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Submit.defaultProps = {
  continues: false,
  onClick: undefined,
};
