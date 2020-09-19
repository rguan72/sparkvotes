import React from 'react';
import PropTypes from 'prop-types';
import Card from "@material-ui/core/Card"
import Box from "@material-ui/core/Box"
// import './button.css';

/**
 * Primary UI component for user interaction
 */
export const Choice = ({ label, index, select }) => {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <Card
          style={{
            padding: "10vw",
            fontSize: 20,
            boxShadow: "#ADD8E6",
            backgroundColor: select[index] ? "#ADD8E6" : "#D3D3D3",
          }}
        >
          {label}
        </Card>
      </Box>
    );
};

Choice.propTypes = {
    selected: PropTypes.bool.isRequired,
    /**
     * Button contents
     */
    label: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    /**
     * Optional click handler
     */
    onClick: PropTypes.func,
};
