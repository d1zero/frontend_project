import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    navLink: {
        color: "#fff",
        paddingRight: '20px',
        textDecoration: 'none !important',
        "&:hover": {
            color: "#fff",
            textDecoration: 'none',
        },
        "&:visited": {
            color: "#fff",
            textDecoration: 'none',
        },
    },
}));
