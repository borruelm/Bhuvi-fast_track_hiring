import React from 'react';
import Header from './header';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography} from '@material-ui/core';
import subbu from '../img/subbu.png'

const useStyles = makeStyles((theme) => ({
    main:{
        width:'100%',
        backgroundColor: '#F3F3F3',
        color:'#000',
        textAlign:'left'
    },
    ceoStyle:{
        width:'100%'
    },
    mobile:{
        minWidth:350
    }
}));

const About = () =>{ 
    const classes = useStyles();

    return <div className={classes.main}>
        <Header />
        <br />
        <Grid container>
            <Grid item xs={1}></Grid>
            <Grid item xs={5} className={classes.mobile}>
                <Typography variant={'h3'}>About Us</Typography>
                <br /> <br />
                <Typography> Fast Track Hiring is a full-scale I.T. staffing and solutions company founded on the concepts of community enrichment, diversity, ethics, and collaboration.</Typography><br />
                <Typography> As a partner, we provide innovative and flexible solutions that evolve with the times.  We not only provide our consultants with great employment opportunities, but we also act as a partner to create avenues for them as entrepreneurs.</Typography><br />
                <Typography> In an ever-changing world, Fast Track Hiring has the tools to help our clients and partners achieve success.</Typography><br />
            </Grid>
            <Grid item xs={5}  className={classes.mobile}><img src={subbu} alt="CEO"  className={classes.ceoStyle}/></Grid>
            <Grid item xs={1}></Grid>
        </Grid>
        <br />
    </div>
}

export default About;