import React from 'react';
import { Paper, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      marginBottom: '5%',
      width: '100%',
      height: '20%',
      '& > *': {
        margin: theme.spacing(1),
      },
    },

    paper: {
        textAlign: 'center',
        color: '#FFF',
        backgroundColor: 'rgb(34,64,109)',
        borderStyle: 'solid',
        borderColor: 'rgb(47,103,168)',
        width: '100%',
        height: '100%',
        
    }
  }));

const PaperData = props => {
    const classes = useStyles();
    return(
        <div className={classes.root} >
            <Paper className={classes.paper} elevation={5}>
                <h2>{props.title}</h2>
                <h1>{props.data}</h1>
            </Paper>
        </div>
        
    )
}

export default PaperData;