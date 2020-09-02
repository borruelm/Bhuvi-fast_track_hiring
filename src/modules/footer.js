import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Link, Modal } from '@material-ui/core';
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
        minWidth:380,
    },
    imgStl:{
        width:40
    },
    imgFooter:{
        width:'100%'
    },
    link:{
        color:'white',
        textDecoration:'none',
    },
    paper: {
        position: 'absolute',
        width: 400,
        minWidth:250,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const rand = () => {
    return Math.round(Math.random() * 20) - 10;
}

const getModalStyle = () => {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${left}%, -${top}%)`,
    };
}

const Footer = () =>{
    const classes = useStyles();
    const [contactUs, setContactUs] = React.useState(false);
    const [modalStyle] = React.useState(getModalStyle);
  
    const showContact = () =>{
        setContactUs(true)
    }

    const closeContact = () =>{
        setContactUs(false)
    }

    return <div className={classes.main}>
        <br />
        <Grid container spacing={5}>
            <Grid item xs={1}></Grid>
            <Grid item xs={3}><img src={fastTrack} className={classes.imgFooter} alt="Fast Track Hiring" /></Grid>
            <Grid item xs={6} className={classes.miscelanius}>
                <Link href="about" className={classes.link}>About Us</Link> |
                <Link href="policy" className={classes.link}>Privacy Policy</Link> | 
                <Link href="termsAndConditions" className={classes.link}>Terms and conditions</Link> |
                <Link onClick={showContact}  className={classes.link}>Contact Us</Link>
                <Modal open={contactUs}
                    onClose={closeContact}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    >
                    <div style={modalStyle} className={classes.paper}>
                        <Typography variant={"h4"}>Contact us</Typography>
                        <Typography>Send an email to  hr@fasttrackhiring.com or give us a call at 847-373-9649</Typography>
                    </div>
                </Modal>
                
                <br /><br />
                <Link href="https://www.facebook.com/fasttrackhiring"><img src={fbIcon} className={classes.imgStl} alt="FB" /></Link> <Link href="https://www.linkedin.com/company/fasttrack-hiring/"><img src={inIcon} className={classes.imgStl} alt="Linked In" /></Link>
                <Typography>Fast Track Hiring® 2020 - All Rights Reserved</Typography>                
            </Grid>
            <Grid item xs={1}></Grid>
        </Grid>
        <br /><br />
    </div>
};

export default Footer;