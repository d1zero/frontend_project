import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    navLink: {
        color: "#fff !important",
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
    search: {
        color: '#fff !important'
    },
    textField: {
    },
}));
