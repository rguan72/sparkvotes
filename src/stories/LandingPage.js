import React from "react"
import Button from "@material-ui/core/Button"

export const LandingPage = ({ next }) => {
    return (
        <Button onClick={next}> Start game </Button>
    );
}