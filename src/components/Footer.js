import React, { useContext, useState } from "react";
import dig from "object-dig";
import { signInWithGoogle, logOut } from "../service/firebase";
import { AuthContext} from "../providers/AuthProvider";
import {makeStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { CallMissedSharp } from "@material-ui/icons";
import { mergeClasses } from "@material-ui/styles";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(() =>({
    root:{
        width: "100%",
        height: 56,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#FFF",
        backgroundColor: "#3f51b5",
        position: "flexed",
        bottom: 0,

    },
}));


const Footer = () =>{
    const classes = useStyles();

    return(
        <Box className={classes.root}>copyright shuheilocale</Box>
    )

};

export default Footer;