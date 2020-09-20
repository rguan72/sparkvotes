import React from 'react';
import PropTypes from 'prop-types';
import Button from "@material-ui/core/Button"
import './button.css';

/**
 * Primary UI component for user interaction
 */
export const Submit = ({ continues, onClick}) => {
  return (
    <Button
      onClick={onClick}
    >
      {continues ? "Continue" : "Submit"}
    </Button>
  );
};

Submit.propTypes = {
  /**
   * Has the user already submitted an answer, making the button show continue?
   */
  continues: PropTypes.bool,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Submit.defaultProps = {
  continues: false,
  onClick: undefined,
};
