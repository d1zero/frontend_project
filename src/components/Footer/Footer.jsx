import React from "react";
import { Typography } from "@mui/material";
import { useStyles } from "./footerStyles";

const Footer = () => {
    const classes = useStyles();
    return (
        <footer className={classes.footer} style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <Typography variant="h6"  >
                Made by&nbsp;
                <a href="https://t.me/d1z3ro" rel="noreferrer" target="_blank" className={classes.navLink}>
                    d1zero
                </a>
            </Typography>
        </footer>
    );
};

export default Footer;
