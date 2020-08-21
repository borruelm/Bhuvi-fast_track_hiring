import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Link } from '@material-ui/core';
import fbIcon from '../img/fb_logo.png';
import inIcon from '../img/in_logo.png';
import fastTrack from '../img/logo.png';


const useStyles = makeStyles((theme) => ({
    main:{
        width:'100%',
        paddingTop:40
    },
    miscelanius:{
        textAlign:'right',
        minWidth:380
    },
    imgStl:{
        width:40
    },
    imgFooter:{
        width:'100%'
    }

}));

const Footer = () =>{
    const classes = useStyles();

    return <div className={classes.main}>
        <br />
        <Grid container spacing={5}>
            <Grid xs={1}></Grid>
            <Grid xs={3}><img src={fastTrack} className={classes.imgFooter} alt="Fast Track Hiring" /></Grid>
            <Grid xs={6} className={classes.miscelanius}>
                About Us | Privacy Policy | Terms and conditions | Contact Us
                <br />
                <Link href="https://www.facebook.com/fasttrackhiring"><img src={fbIcon} className={classes.imgStl} alt="FB" /></Link> <Link href="https://www.linkedin.com/company/fasttrack-hiring/"><img src={inIcon} className={classes.imgStl} alt="Linked In" /></Link>
                <Typography>Fast Track Hiring® 2020 - All Rights Reserved</Typography>                
            </Grid>
            <Grid xs={1}></Grid>
        </Grid>
        <br /><br />
    </div>
};

export default Footer;