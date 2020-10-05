import React, { useState, useEffect } from "react"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography";
import useSound from "use-sound"
import dingSfx from "../sounds/correct.mp3"
import boopSfx from "../sounds/incorrect.mp3"
import { Submit } from "./Button"
import { Choice } from "./Choice"
import { Bar } from "./Bar"

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
    const [playRight] = useSound(dingSfx);
    const [playWrong] = useSound(boopSfx);
    
    useEffect(() => { setSelect(choices.map(() => false)); setContinues(false); setIsCorrect(false);}, [choices]);

    let choiceList = choices.map((choice, idx) => <Choice style={{flexBasis: 1}} label={choice} key={idx} index={idx} select={select[idx]} onClick={() => {
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

    const onSubmit = () => {
        if (continues) { incrementQuestion(); return;  };
        setContinues(true);
        const newIsCorrect = checkCorrect(select, correct);
        setIsCorrect(newIsCorrect);
        if (newIsCorrect) playRight();
        else playWrong();
    }

    const correctChoices = choices.filter((_, idx) => correct.includes(idx)).map(choice => choice)
    return (
        <Box height={"80vh"} display={"flex"} flexDirection={"column"}>
            <Box display={"flex"} justifyContent={"center"}> <Typography variant={"h5"}> {title} </Typography></Box>
            <Box display="flex" flexWrap="wrap" mt={"-5vh"} justifyContent={"space-between"} flexGrow={1} alignItems="center" alignContent="space-evenly" width={"100%"}> 
                {choiceList}
            </Box>
            <Box display={"flex"} justifyContent={"center"}>
                <Submit disabled={type !== "SA" && JSON.stringify(select) === JSON.stringify(choices.map(() => false))} continues={continues} onClick={onSubmit} />
            </Box>
            <Bar continues={continues} isCorrect={isCorrect} correctCaption={correctCaption} incorrectCaption={incorrectCaption} correctChoices={correctChoices}/>
        </Box>
    );
}