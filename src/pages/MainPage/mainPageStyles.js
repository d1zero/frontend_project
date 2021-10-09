import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    slide: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    navLink: {
        color: "#ff7961",
        textDecoration: 'none !important',
        "&:hover": {
            color: "#ff7961",
            textDecoration: 'none',
        },
        "&:visited": {
            color: "#ff7961",
        },
    },
}));
