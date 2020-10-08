import React from 'react';
import PropTypes from 'prop-types';
import Card from "@material-ui/core/Card"
import Typography from "@material-ui/core/Typography"

/**
 * Primary UI component for user interaction
 */
export const Choice = ({ style, label, index, select, onClick}) => {
    return (
        <Card
          style={{
            width: "40vw",
            height: "20vh",
            marginRight: (index % 2 === 0) ? "1vw" : 0,
            marginBottom: "vw",
            fontSize: 20,
            boxShadow: "#ADD8E6",
            backgroundColor: select ? "#ADD8E6" : "#D3D3D3",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
          onClick={onClick}
        >
          <Typography variant="h5" style={{ margin: "3vw" }}>{label}</Typography>
        </Card>
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
