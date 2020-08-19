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
        height: '85vh',
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
        <Typography>Content about jobseekers lorem ipsum dolor sit amet, soleat fierent no mei, ocurreret molestiae gloriatur ei quo ei duo accumsan.</Typography>
        <br />
        <div className={classes.jobSeekerBg}>
            <Grid container spacing={3}>
                <Grid item xs={1}></Grid>
                <Grid item xs={6}>
                    {buildHightLight("High Light 1", 
                    "Content description with no max of 14 words to avoid misalignment. so text will be presented fine")}
                    <br />
                    {buildHightLight("High Light 2", 
                    "Content description with no max of 14 words to avoid misalignment. so text will be presented fine")}
                    <br />
                    {buildHightLight("High Light 3", 
                    "Content description with no max of 14 words to avoid misalignment. so text will be presented fine")}
                    <br />
                </Grid>
                <Grid item xs={5}></Grid>
            </Grid>
            <br />  
        </div>
    </div>);
};

export default JobSeekers;