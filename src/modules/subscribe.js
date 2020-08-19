import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
    main:{
        width:'100%',
        height: '85vh',
        backgroundRepeat:'no-repeat',
        backgroundSize:'100%'
    },

}));

const Subscribe = ()=> {
    const classes = useStyles();    


    return <div className={classes.main}>
        <br />
        <Typography variant={'h4'}>Subscribe Now!</Typography>
        <br />
        <Typography>We'll keep you up to date about Fast Track Hiring news, activities, and new app releases.</Typography>
        <br />
        <Grid container>
            <Grid xs={3}></Grid>
            <Grid xs={6}>input button</Grid>
            <Grid xs={3}></Grid>
        </Grid>

    </div>

}

export default Subscribe;
