import React from 'react';
import fastTrack from '../img/logo.png';
import fbIcon from '../img/fb_logo.png';
import inIcon from '../img/in_logo.png';
import { Grid, Link} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    main:{
        width:'100%',
        backgroundColor: '#0a152b'
    },
    logo:{
        width:350,
        minWidth: 150
    },
    icons:{
        textAlign:'right',
        minWidth:350
    },
    imgStyle:{
        width:50 
    }
}));

const Header = () =>{
    const classes = useStyles();

    return <div className={classes.main} id="welcome">
        <br />
        <Grid container >
            <Grid item xs={1}></Grid>
            <Grid item xs={5} className={classes.logo}>
                <Link href="/"><img src={fastTrack} alt="home" className={classes.logo} style={{width:330}} /></Link></Grid>
            <Grid item xs={5} className={classes.icons}>
                <Link href="https://www.facebook.com/fasttrackhiring"><img src={fbIcon} className={classes.imgStyle} alt="FB" /></Link> <Link href="https://www.linkedin.com/company/fasttrack-hiring/"><img src={inIcon} className={classes.imgStyle} alt="Linked In" /></Link>
            </Grid>
            <Grid item xs={1}></Grid>
        </Grid>
    </div>

}

export default Header;