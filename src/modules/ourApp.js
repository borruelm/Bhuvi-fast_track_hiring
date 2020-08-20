
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';
import ourApp from '../img/ourApp1.png';
import ourApp2 from '../img/ourApp2.png';
import ourApp3 from '../img/ourApp3.png';
import androidStore from '../img/androidStore.png';
import appStore from '../img/appStore.png';

const useStyles = makeStyles((theme) => ({
    main:{
        backgroundColor:'#f3f3f3',
        color:'#FFFFFF',
        width:'100%',
        minHeight: '320px',
        backgroundImage: 'linear-gradient(to right, #2CBA79, #24B0E2)'
    },
    imgContainer:{
        minWidth:380,
        textAlign:'center'
    }
}));

const OurApp = ()=>{
    const classes = useStyles();

    return <div className={classes.main}>
        <br />
        <Typography variant={'h4'}>Take a look at our app!</Typography>
        <br />
        <Grid container spacing={1}>
            <Grid xs={4} className={classes.imgContainer}><img src={ourApp} style={{width:'100%'}} alt="FTH App 1"/></Grid>
            <Grid xs={4} className={classes.imgContainer}><img src={ourApp2}  style={{width:'100%'}} alt="FTH App 2"/></Grid>
            <Grid xs={4} className={classes.imgContainer}><img src={ourApp3}  style={{width:'100%'}} alt="FTH App 3"/></Grid>
        </Grid>
        <br />
        <Typography variant={'h4'}>download it!</Typography>
        <br />
        <Grid container spacing={5}>
            <Grid xs={3}></Grid>
            <Grid xs={3}><img src={androidStore} style={{width:'100%'}} alt="Andorid Store"/></Grid>
            <Grid xs={3}><img src={appStore} style={{width:'100%'}} alt="iOS Store"/></Grid>
            <Grid xs={3}></Grid>
        </Grid>
        <br />
        <br />
    </div>
}

export default OurApp;