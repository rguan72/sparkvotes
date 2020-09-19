import React, { useState } from "react"
import Box from "@material-ui/core/Box"
import { Submit } from "./Button"
import { Choice } from "./Choice"

function getTrue(arr) {
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i]) {
            return i;
        }
    }
}

export const Question = ({ title, type, choices, correct, correctCaption, incorrectCaption}) => {
    const [select, setSelect] = useState(choices.map(() => false))
    const [continues, setContinues] = useState(false)
    const [isCorrect, setIsCorrect] = useState(false)
    let choiceList = choices.map((choice, idx) => <Choice label={choice} key={idx} index={idx} selected={select[idx]} onClick={() => {
        const newSelect = select.map(() => false);
        newSelect[idx] = true;
        setSelect(newSelect);
    }}/>)
    return (
        <Box>
            <Box> {title} </Box>
            <Box display="flex" flexWrap="wrap"> {choiceList} </Box>
            <Box> <Submit continues={continues} onClick={() => {setContinues(true); setIsCorrect(getTrue(select) === correct) }} /></Box>
            {continues  && 
                <Box>
                    {isCorrect ? correctCaption : incorrectCaption}
                </Box>
            }
        </Box>
    );
}