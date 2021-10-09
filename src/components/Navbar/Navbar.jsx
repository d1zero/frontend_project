import React from "react";
import { Link } from "react-router-dom";
import logo from "../../logo.svg";
import news from "../../store/news";
import comments from "../../store/comments";
import {
    AppBar,
    Toolbar,
    Link as MUILink,
    Typography,
    Container,
} from "@mui/material";
import { useStyles } from "./navbarStyles";

const Navbar = () => {
    const classes = useStyles();

    React.useEffect(() => {
        news.setLoading(true);
        fetch("/articles.json")
            .then((res) => res.json())
            .then((data) => {
                setTimeout(() => {
                    news.setNews(data);
                    news.setLoading(false);
                }, 1000);
            });
    }, []);

    React.useEffect(()=>{
        comments.setLoading(true)
        fetch("/comments.json")
            .then((res) => res.json())
            .then((data) => {
                setTimeout(() => {
                    comments.setComments(data);
                    comments.setLoading(false);
                }, 1000);
            });
    },[])

    return (
        <AppBar position="static">
            <Container fixed>
                <Toolbar disableGutters>
                    <img src={logo} alt="logo" height="64px" width="64px" />
                    <MUILink
                        style={{ marginLeft: "10px" }}
                        component={Link}
                        to="/"
                        className={classes.navLink}
                    >
                        <Typography variant="h6">Home</Typography>
                    </MUILink>
                    <MUILink
                        component={Link}
                        to="/news"
                        className={classes.navLink}
                    >
                        <Typography variant="h6">News</Typography>
                    </MUILink>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;
