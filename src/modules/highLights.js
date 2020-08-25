import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';


const useStyles = makeStyles((theme) => ({
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

const HighLights = (props) =>{
    const classes = useStyles();

    const [openModal, setOpen] = React.useState(false);
    const [modalStyle] = React.useState(getModalStyle);

    const {title, content} = props;

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const readMore = (text)=>{
        const wordArray = text.split(" ");
        if(wordArray.length > 13){
            return <button type="button" onClick={handleOpen}>
            Read MORE
          </button>
        }
    }

    return (<div>
    {readMore(content)}
    <Modal open={openModal}
    onClose={handleClose}
    aria-labelledby="simple-modal-title"
    aria-describedby="simple-modal-description"
    >
    <div style={modalStyle} className={classes.paper}>
        <Typography variant={"h4"}>{title}</Typography>
        <Typography>{content}</Typography>
    </div>
    </Modal>
    </div>)

}

export default HighLights;