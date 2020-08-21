import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';
import {shorten} from '../utils/constants'; 
import HighLights from './highLights';
import companyBG from '../img/company_bg.png';


const useStyles = makeStyles((theme) => ({
    main:{
        backgroundColor:'#f3f3f3',
        color:'#030303',
        width:'100%',
        minHeight: '320px',
        
    },
    companyBg:{
        backgroundImage:`url(${companyBG})`,
        backgroundRepeat:'no-repeat',
        backgroundSize:'100%',
        backgroundColor:'#f3f3f3',
    },
    highLight:{
        textAlign:'left'
    },
}));

const Companies = (props) =>{
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

    return <div className={classes.main}>
        <br />
        <Grid container>
            <Grid xs={1}></Grid>
            <Grid xs={10}>   
                <Typography >
                    Find the best talent in the job market and connect with Subject Matter Experts to develop innovative business solutions
                </Typography>
            </Grid>
            <Grid xs={1}></Grid>
        </Grid>
        <div  className={classes.companyBg}>
        <br />
        <br />
            <Grid container spacing={3}>
                <Grid xs={5}></Grid>
                <Grid xs={6}>
                    
                    {buildHightLight("Connect with Talent", "Get connected to the ultra-talented resources that are only available due to the pandemic!")}
                    <br />
                    {buildHightLight("Post Jobs", "Post your hottest job openings and receive applications  from \"Rock-Star\" resources that are on the market because of COVID-19")}
                    <br />
                    {buildHightLight("Video Applicants", "View short videos from great candidates explaining why they're perfect for your opening.")}
                    <br />
                    {buildHightLight("Find Solutions", "Get access to innovative business solutions like Nearshore project teams and customized Agile Pods to our partners that will charge up project productivity.")}
                    <br />
                </Grid>
                <Grid xs={1}></Grid>
            </Grid>
        </div>
        <br />
        </div>
};

export default Companies;