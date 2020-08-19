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
        height: '85vh',
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
                <Typography >Content about <b>companies</b> jobseekers lorem ipsum dolor sit amet, soleat fierent no mei, ocurreret molestiae gloriatur ei quo ei duo accumsan. No more than 24 words.</Typography>
            </Grid>
            <Grid xs={1}></Grid>
        </Grid>
        <div  className={classes.companyBg}>
        <br />
        <br />
            <Grid container spacing={3}>
                <Grid xs={5}></Grid>
                <Grid xs={6}> 
                {   
                    buildHightLight("High Light 1", 
                    "Content description with no max of 14 words to avoid misalignment. so text will be presented fine")}
                    <br />
                    {buildHightLight("High Light 2", 
                    "Content description with no max of 14 words to avoid misalignment. so text will be presented fine")}
                    <br />
                    {buildHightLight("High Light 3", 
                    "Content description with no max of 14 words to avoid misalignment. so text will be presented fine")
                }
                </Grid>
                <Grid xs={1}></Grid>
            </Grid>
        </div>
        <br />
        </div>
};

export default Companies;