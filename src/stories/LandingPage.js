import React from "react"
import Button from "@material-ui/core/Button"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";

export const LandingPage = ({ next }) => {
    return (
        <Box>
            <AppBar style={{ backgroundColor: "#612d7a" }} position={"static"}> <Box my={"3vh"}><Typography align={"center"} variant={"h5"}> Michigan Voting Quiz </Typography></Box> </AppBar>
            <Box mx={"5vw"} mt={"17vh"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                <Typography align={"center"} variant={"h4"}> Learn to vote in Michigan!  </Typography>
            </Box>
            <Box mx={"5vw"} mt={"17vh"} display={"flex"} justifyContent={"center"}>
                <Button variant={"contained"} onClick={next}> <Box mx={"3vw"}> Take the Quiz </Box> </Button>
            </Box>
        </Box>
    );
}