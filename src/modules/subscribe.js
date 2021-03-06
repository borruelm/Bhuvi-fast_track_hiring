import React,  { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Button, TextField  } from '@material-ui/core';
import subscribeBg from '../img/subscribe_now.png'



const useStyles = makeStyles((theme) => ({
    main:{
        width:'100%',
        height: '60vh',
        backgroundImage:`url(${subscribeBg})`,
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover'
    },
    input:{
        backgroundColor:'white'
    },
    button:{
        backgroundColor:'#2AB376'
    }

}));

const Subscribe = ()=> {
    const classes = useStyles();
    
    const[subscribing, setSubscribe] = useState(false);
    const[email, setEmail] = useState("");
    const[errorEmail, setError] = useState("");

    const validateEmail = (mail) => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
           return (true);
        
        return (false)
    }

    const handleEmail = (value)=>{
        const emailVal = value.target.value;
        setEmail(emailVal);
    }

    const checkEmail =(value)=>{
        const emailVal = value.target.value;
        if(email.trim() === ''){
            setError("Please enter an email")
        }
        if(!validateEmail(emailVal)){
            setError("Please enter a valid email")
        }else{setError("")}    
    }

    const sendSubscribe = ()=>{
        if(email !== ''){
            setSubscribe(true);
        }

        if(errorEmail ===''){
            fetch('http://fasttrackhiring.com/services/API/postSubscriber.php', 
            {
                method:'POST',
                body:JSON.stringify({"email": email}) 
            });
        }
    }

    const subscribe = () =>{
        if(subscribing){
            return <Typography>Thanks for subscribing</Typography>
        }else{
            return <div>
                <TextField placeholder="Enter your email" onBlur={checkEmail} id={'subscribe-1'}value={email} onChange={handleEmail}
                helperText={errorEmail} variant="outlined" className={classes.input}></TextField> <Button onClick={sendSubscribe} className={classes.button}><Typography>Subscribe!</Typography></Button>
            </div>
        }
    }


    return <div className={classes.main} id={"subscribe"}>
        <br />
        <Typography variant={'h4'}>Subscribe Now!</Typography>
        <br />
        <Typography>We'll keep you up to date about Fast Track Hiring news, activities, and new app releases.</Typography>
        <br />
        <Grid container>
            <Grid item xs={3}></Grid>
            <Grid item xs={6}>{subscribe()}  </Grid>
            <Grid item xs={3}></Grid>
        </Grid>

    </div>

}

export default Subscribe;
