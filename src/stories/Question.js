import React, { useState } from "react"
import Box from "@material-ui/core/Box"
import Button from "./Button"
import Choice from "./Choice"

export const Question = ({ title, type, choices, correct, correctCaption, incorrectCaption}) => {
    const [select, setSelect] = useState(choices.map(() => false))
    let choiceList = choices.map((choice, idx) => <Choice label={choice} />)
    return (
        <Box>
            <Box> {title} </Box>
        </Box>
    );
}