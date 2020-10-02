import React, { useEffect } from "react"
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Confetti from "react-confetti";
import { useWindowSize } from "@react-hook/window-size";
import useSound from "use-sound"
import yaySfx from "../sounds/wining-bell-game-show-sound.mp3"

export const CelebrationPage = () => {
    const [width, height] = useWindowSize()
    const [playRight] = useSound(yaySfx);
    useEffect(() => {
        playRight()
    }, [playRight])
    return (
        <Box display={"flex"} justifyContent={"center"}>
            <Typography variant={"h4"}> Make Your Voice Count! </Typography>
            <Confetti width={width} height={height}/>
        </Box>
    )
}