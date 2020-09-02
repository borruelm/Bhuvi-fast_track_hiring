import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link} from '@material-ui/core';
import logo from '../img/fth-icon.png';
import company from '../img/company-icon.png';
import seeker from '../img/seeker-icon.png';
import app from '../img/app-icon.jpg';
import subscribe from '../img/subscribe-icon.png';

const useStyles = makeStyles((theme) => ({
    floatLeft:{
        float:'left',
        position:'fixed',
        width:70,
        top:'40%'
    },
    imgOpt:{
        width:40,
        borderRadius:15
    }

}));

const FloatMenu = () =>{
    const classes = useStyles();
    return <div className={classes.floatLeft}>
        <Link href='#welcome'><img src={logo} alt="Welcome" className={classes.imgOpt} /></Link>
        <Link href='#JobSeeker'><img src={seeker} alt="Welcome" className={classes.imgOpt} /></Link>
        <Link href='#company'><img src={company} alt="Welcome" className={classes.imgOpt} /></Link>
        <Link href='#ourApp'><img src={app} alt="Welcome" className={classes.imgOpt} /></Link>
        <Link href='#subscribe'><img src={subscribe} alt="Welcome" className={classes.imgOpt} /></Link>
    </div>

};

export default FloatMenu;