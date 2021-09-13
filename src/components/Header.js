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

const useStyles = makeStyles(() =>({
    toolbar:{
        justifyContent: 'space-between'
    },
    button:{
        color:'#FFF'
    }
}));

const Header = () => {
    const currentUser = useContext(AuthContext);
    console.log(currentUser);
    const classes = useStyles();
    const buttonRender = () =>{
        let buttonDom;

        if(dig(currentUser, 'currentUser', 'uid')){
            // currentUser.currentUser.im.
            buttonDom = <Button className={classes.button} variant='inherit' onClick={logOut}>ログアウト</Button>
        }else{
            buttonDom = < Button className={classes.button} variant='inherit' onClick={signInWithGoogle}>ログイン</Button>

        }

        return buttonDom;
    }

    return(
        <AppBar position="static">
        <ToolBar className={classes.toolbar}>
            <Typography variant="h6">
                Home Monitoring
            </Typography>
            {buttonRender()}
        </ToolBar>
        </AppBar>
    )
}
export default Header;