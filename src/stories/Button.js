import React from 'react';
import PropTypes from 'prop-types';
import Button from "@material-ui/core/Button"
import './button.css';

/**
 * Primary UI component for user interaction
 */
export const Submit = ({ continues, primary, backgroundColor, size, ...props }) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <Button
    >
      {continues ? "Submit" : "Continue"}
    </Button>
  );
};

Submit.propTypes = {
  /**
   * Has the user already submitted an answer, making the button show continue?
   */
  continues: PropTypes.bool,
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Submit.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
