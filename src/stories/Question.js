import React, { useState, useEffect } from "react"
import Box from "@material-ui/core/Box"
import { Submit } from "./Button"
import { Choice } from "./Choice"

function checkCorrect(select, correct) {
    let correctSelect = [];
    for (let i = 0; i < select.length; ++i) {
        if (select[i]) {
            correctSelect.push(i);
        }
    }
    return JSON.stringify(correctSelect) === JSON.stringify(correct);
}

export const Question = ({ title, type, choices, correct, correctCaption, incorrectCaption, incrementQuestion}) => {
    const [select, setSelect] = useState(choices.map(() => false));
    const [continues, setContinues] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    
    useEffect(() => { setSelect(choices.map(() => false)); setContinues(false); setIsCorrect(false);}, [choices]);

    let choiceList = choices.map((choice, idx) => <Choice label={choice} key={idx} index={idx} select={select[idx]} onClick={() => {
        if (continues)
            return;
        let newSelect;
        if (type === "TF" || type === "MC") {
            newSelect = select.map(() => false);
            newSelect[idx] = true;
        }
        else if (type === "SA") {
            newSelect = select.map(el => el);
            newSelect[idx] = !newSelect[idx];
        }
        setSelect(newSelect);
    }}/>)
    const correctChoices = choices.filter((_, idx) => correct.includes(idx)).map(choice => choice)
    return (
        <Box>
            <Box> {title} </Box>
            <Box display="flex" flexWrap="wrap"> {choiceList} </Box>
            <Box> <Submit disabled={type !== "SA" && JSON.stringify(select) === JSON.stringify(choices.map(() => false))} continues={continues} onClick={() => {if(continues) incrementQuestion(); setContinues(true); setIsCorrect(checkCorrect(select, correct))}} /></Box>
            {continues  && 
                <Box>
                    {isCorrect ? correctCaption :  incorrectCaption}
                </Box>
            }
            {
                continues && !isCorrect && <Box> The correct answer is {correctChoices}</Box>
            }
        </Box>
    );
}