import React from "react"
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Confetti from "react-confetti";
import { useWindowSize } from "@react-hook/window-size";

export const CelebrationPage = () => {
    const [width, height] = useWindowSize()
    return (
        <Box display={"flex"} justifyContent={"center"} p={"2vw"}>
            <Typography variant={"h4"}> Make Your Voice Count! </Typography>
            <Confetti width={width} height={height}/>
        </Box>
    )
}