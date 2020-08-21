import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';
import bgJS from '../img/job_seeker_bg.png'
import HighLights from './highLights';
import {shorten} from '../utils/constants'; 

const useStyles = makeStyles((theme) => ({
    main:{
        backgroundColor:'#f3f3f3',
        color:'#030303',
        width:'100%',        
    },
    jobSeekerBg:{
        backgroundImage:`url(${bgJS})`,
        backgroundRepeat:'no-repeat',
        backgroundSize:'100%',
        minHeight: 400
    },
    highLight:{
        textAlign:'right'
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },

}));

const JobSeekers = (props) =>{
    const classes = useStyles();

    const buildHightLight = (title, content) =>{
        return (<Grid container className={classes.highLight}>
            <Grid xs={12}>
            <Typography variant="h4">{title}</Typography>
            <Typography>{shorten(content)}</Typography>
            <HighLights title={title} content={content} />
            </Grid>
        </Grid>
        );
    }

    return(<div className={classes.main}>
        <br /><br />
        <Typography variant="h4">How it works?</Typography>
        <br />
        <Typography>Post your resume and record short videos for employers seeking new talent.  Create a profile and identify the skills you need to reach your goals.</Typography>
        <br />
        <div className={classes.jobSeekerBg}>
            <Grid container spacing={3}>
                <Grid item xs={1}></Grid>
                <Grid item xs={6}>
                    {buildHightLight("Hot Job Opportunities", "Find opportunities with top employers specifically hiring those affected by the COVID-19 pandemic.")}
                    <br />
                    {buildHightLight("Level Up", "We’ll use your profile to show you the skills you need to add to your resume that will take you to the next level.")}
                    <br />
                    {buildHightLight("Network", "Connect with Subject Matter Experts to gain valuable knowledge and enhance your skills")}
                    <br />
                    {buildHightLight("Social Distance Friendly ", "Find QUALITY remote opportunities posted by hundreds of employers")}
                    <br />
                    {buildHightLight("Video Resume", "Record a short message telling employers why you're the perfect match")}
                    
                </Grid>
                <Grid item xs={5}></Grid>
            </Grid>
            <br />  
        </div>
    </div>);
};

export default JobSeekers;