import React, {useState} from "react";
import { Link } from "@reach/router";
import { Container} from "@material-ui/core";
// import { Container } from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import {TypeBackground as classes} from "@material-ui/core/styles/createPalette";
import Typography from "@material-ui/core/Typography";
// import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignIn() {
    const classes = useStyles();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const signInHandler = (event, email, password) => {
        event.preventDefault();
    };

    const onChangeHandler = (event) => {
        const {name, value} = event.currentTarget;

        if (name === 'userEmail'){
            setEmail(value);
        }
        else if (name === 'userPassword'){
            setPassword(value);
        }
    }


    return (
        <Container>
            <CssBaseline></CssBaseline>
            <div className={classes.paper}>
            <Typography>SIGN IN</Typography>
            <form className={classes.form}>
                <TextField
                    variant={"outlined"}
                    margin = "normal"
                    required
                    fullwidth
                    name={"userEmail"}
                    label={"e.g. alpacas@gmail.com"}
                    type={"email"}
                    id={"userEmail"}
                    autoComplete="email"
                    autoFocus
                />
                <TextField
                    variant={"outlined"}
                    margin = "normal"
                    required
                    fullwidth
                    name={"userPassword"}
                    label={"Your password"}
                    type={"password"}
                    id={"userPassword"}
                    autoComplete="password"
                    autoFocus
                />
                <FormControlLabel
                    control={<Checkbox value={"remember"} color={"primary"}/>}
                    label={"Remember me"}
                    className={classes.submit}
                />
                <Button
                    type={"submit"}
                    fullWidth
                    variant={"contained"}
                    color={"primary"}
                    className={classes.submit}
                >
                Sign In
                </Button>
                <Grid container>
                    <Grid item xs>
                        {/*<Link>*/}
                        {/*    Forgot Password?*/}
                        {/*</Link>*/}
                    </Grid>
                </Grid>
            </form>
            </div>
        </Container>
    )
}