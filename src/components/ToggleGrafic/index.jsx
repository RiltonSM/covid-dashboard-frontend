import React from 'react';
import { makeStyles } from '@material-ui/core';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';

import './styles.css';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center',
    },
    button: {
        backgroundColor: "rgb(47,103,168)",
        color: '#FFF',
        '&$selected': {
            color: '#000'
        }
    },
}));

const ToggleGrafic = props => {
    const classes = useStyles();
    return(
        <ToggleButtonGroup className={classes.root}
            value={props.toggle}
            exclusive
            onChange={props.handleToggleButton}
            aria-label="Mude os gráficos"
        >
            <ToggleButton value="cases" className={classes.button} style={{color: '#FFF'}}>Casos</ToggleButton>
            <ToggleButton value="deaths" className={classes.button} style={{color: '#FFF'}}>Mortes</ToggleButton>
        </ToggleButtonGroup>
    )
}

export default ToggleGrafic;