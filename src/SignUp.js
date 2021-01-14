import React, { useState } from "react";
import { Link } from "@reach/router";
import { Container } from '@material-ui/core/Container';


// import {makeStyles} from '@material-ui/core/styles';
// import {toast} from "react-toastify";
// import {loginUser} from "../business/FirebaseCommunicator";
// import {useHistory} from "react-router-dom";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [error, setError] = useState("");

    const createUserHandler = (event, emaill, password) => {
        event.preventDefault();
        setEmail("");
        setPassword("");
        setDisplayName("");
    };

    const onChangeHandler = event => {
        const { name, value } = event.currentTarget;
        if (name === "userEmail") {
            setEmail(value);
        }
        else if (name === "userPassword"){
            setPassword(value);
        }
        else if (name === "displayName"){
            setDisplayName(value);
        }
    }
};

