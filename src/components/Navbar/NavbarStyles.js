import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    navLink: {
        color: "#fff",
        paddingRight: '20px',
        textDecoration: 'none',
        "&:hover": {
            color: "inherit",
            textDecoration: 'none',
        },
        "&:visited": {
            color: "inherit",
        },
    },
}));
