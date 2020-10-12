import React from "react"
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Confetti from "react-confetti";
import { useWindowSize } from "@react-hook/window-size";
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, RedditShareButton, RedditIcon, LinkedinShareButton, LinkedinIcon, } from "react-share"
import "../App.css"

export const CelebrationPage = () => {
    const [width, height] = useWindowSize()
    const url = "michiganvotingquiz.org"
    return (
        <Box display={"flex"} justifyContent={"center"} p={"2vw"} flexDirection={"column"}>
            <Typography variant={"h4"}> Make Your Voice Count! </Typography>
            <Box display="flex" flexDirection="row" mt="2vh">
                <FacebookShareButton url={url} style={{ marginRight: "1vw" }}> <FacebookIcon round /> </FacebookShareButton>
                <TwitterShareButton url={url} style={{ marginRight: "1vw" }}> <TwitterIcon round /> </TwitterShareButton>
                <RedditShareButton url={url} style={{ marginRight: "1vw" }}> <RedditIcon round /> </RedditShareButton>
                <LinkedinShareButton url={url} style={{ marginRight: "1vw" }}> <LinkedinIcon round /> </LinkedinShareButton>
            </Box>
            <Box mt="2vh">
                <Typography variant="h5">Register online, check registration status, and get voting information for Michigan here:</Typography>
            </Box>
            <Link variant="h5" href="https://michigan.gov/vote">michigan.gov/vote</Link>
            <Confetti width={width} height={height}/>
        </Box>
    )
}