import React from 'react';
import PropTypes from 'prop-types';
import Card from "@material-ui/core/Card"
import Box from "@material-ui/core/Box"
// import './button.css';

/**
 * Primary UI component for user interaction
 */
export const Choice = ({ style, label, index, select, onClick}) => {
    return (
      <Box style={style} display="flex" justifyContent="center" alignItems="center">
        <Card
          style={{
            width: "40vw",
            height: "20vh",
            margin: "1vw",
            padding: "1vw",
            fontSize: 20,
            boxShadow: "#ADD8E6",
            backgroundColor: select ? "#ADD8E6" : "#D3D3D3",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={onClick}
        >
          {label}
        </Card>
      </Box>
    );
};

Choice.propTypes = {
    select: PropTypes.bool.isRequired,
    /**
     * Button contents
     */
    label: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    /**
     * Optional click handler
     */
    onClick: PropTypes.func,
    /**
     * Optional style object
     */
    style: PropTypes.object,
};
