import React, { useState, useEffect, useContext } from "react";
import * as Api from "../service/api"
import { signInWithGoogle, logOut } from "../service/firebase";
import dig from "object-dig";
import { AuthContext } from "../providers/AuthProvider";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { CallMissedSharp, CloseOutlined } from "@material-ui/icons";
import { mergeClasses } from "@material-ui/styles";
import Box from "@material-ui/core/Box";
import { TextField } from "@material-ui/core";
import {
    ComposedChart,
    Legend,
    ReferenceLine,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Brush,
  } from 'recharts';

const useStyles = makeStyles(() => ({
    root: {
        textAlign: 'center',
        marginTop: 40,
    },
    form: {
        width: "100%",
        maxWidth: 360,
        margin: "auto",
        marginBottom: 40,
        display: "flex",
        alignIntems: "baseline",
        justifyContent: "center",
    },
    input: {
        marginRight: 10
    }
}));

const Dashboard = () => {
    const classes = useStyles();
    const currentUser = useContext(AuthContext);
    const [sensorData, setSensorData] = useState([]);

    useEffect(() => {
        fetch();
    }, [currentUser]);

    const fetch = async () => {

        if (dig(currentUser, 'currentUser', 'uid')) {
            const data = await Api.getSensorData();
            await setSensorData(data);
        }

    }

    const getSensorData = () => {
        console.log('aaaa')

        let ret = [];
        if (dig(currentUser, 'currentUser', 'uid')) {
            sensorData.forEach((data) => {
                ret.push({
                    name: data.timestamp,
                    hum: data.hum,
                    temp:data.temp,
                    pres:data.pres                    
                });
            });
        }
        return ret;
    }


    const data = getSensorData();
    console.log(data)

return (
    <div className={classes.root}>
        <LineChart width={600} height={400} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="timestamp" tick={{ fontSize: '.7rem' }} />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend verticalAlign="top" orientation="right" rapperStyle={{ lineHeight: '40px' }} />

            <Brush
                className="TimeLineChart-brush"
                dataKey="timestamp"
                stroke="#8884d8"
                startIndex={70}
                endIndex={99}
            />
            <Line yAxisId="left" type="monotone" dataKey="hum" stroke="#8884d8" />
            <Line yAxisId="left" type="monotone" dataKey="temp" stroke="#8488d8" />
            <Line yAxisId="right" type="monotone" dataKey="pres" stroke="#88d884" />
        </LineChart>
    </div>
);
}



export default Dashboard;