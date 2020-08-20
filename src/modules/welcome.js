import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button } from '@material-ui/core';
import mainBg from '../img/welcome-bg.png';
import fastTrack from '../img/logo.png';
import fbIcon from '../img/fb_logo.png';


const useStyles = makeStyles((theme) => ({
    main:{
        width:'100%',
        height: '85vh',
        backgroundImage:`url(${mainBg})`,
        backgroundRepeat:'no-repeat',
        backgroundSize:'100%'
    },
    imgStyle:{
        width:'100%'
    },
    imgStore:{
        width:'45px'
    },
    button:{
        backgroundColor:'#2AB376 !important',
        color:'white'
    }
}));


const getOs = ()=>{
    let operatingSystem = 'Not known';
    const version = window.navigator.appVersion;
    if (version.indexOf('Win') !== -1) { operatingSystem = 'Windows OS'; }
    if (version.indexOf('Mac') !== -1) { operatingSystem = 'MacOS'; }
    if (version.indexOf('iOs') !== -1) { operatingSystem = 'iOs'; }
    if (version.indexOf('android') !== -1) { operatingSystem = 'android'; }
    return operatingSystem;
};


const Welcome = (props) =>{
    const iOsURL ='IOS Store';
    const androidOsURL ='Android Store';
    const classes = useStyles();    
    const operatingSystem = getOs(window) === 'iOs' ? iOsURL : androidOsURL;
    const content = "The Fast Track Mobile App is a simple and easy way for job seekers affected by COVID-19 and employers to connect.";

    return(
        <div className={classes.main}>
            <Grid container spacing={3}>
                <Grid item xs={1}></Grid>
                <Grid item xs={5}><img src={fastTrack} className={classes.imgStyle} alt="Fast Track Hiring" /></Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={1}><img src={fbIcon} className={classes.imgStyle} alt="FB" /></Grid>
                <Grid item xs={1}></Grid>
            </Grid>
            <br />
            <Grid container spacing={5}>
                <Grid item xs={2}></Grid>
                <Grid item xs={3}>
    < Typography>{content}</Typography>
                </Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={3}>
                    <Button className={classes.button} href={operatingSystem}><Typography>Download App</Typography></Button>
                    <br />
                    <img src={fbIcon} className={classes.imgStore} alt="Android Store" /> <img src={fbIcon} className={classes.imgStore} alt="App Store" />
                </Grid>
                <Grid item xs={2}></Grid>
            </Grid>
        </div>
    );
};

export default Welcome;