import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    formControl: {
      //margin: theme.spacing(1),
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      minWidth: 120,
      width: '99%',
    },
    select: {
        color: "#FFF",
        backgroundColor: "rgb(47,103,168)",
    },
    label: {
        color: "#FFF",   
    }

}));

const SelectState = props => {
    const classes = useStyles();

    return(
        <FormControl variant="filled" className={classes.formControl}>
            <InputLabel htmlFor="demo-simple-select-outlined-label" className={classes.label}>Local</InputLabel>
            <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={props.state}
                onChange={props.handleChange}
                label="Local"
                className={classes.select}
            >
            <MenuItem value={"Brasil"}>Brasil</MenuItem>
            <MenuItem value={"CE"}>Ceará</MenuItem>
            <MenuItem value={"Fortaleza"}>Fortaleza-CE</MenuItem>
            <MenuItem value={"Juazeiro do Norte"}>Juazeiro do Norte-CE</MenuItem>
            <MenuItem value={"Sobral"}>Sobral-CE</MenuItem>
            <MenuItem value={"Itapipoca"}>Itapipoca-CE</MenuItem>
            </Select>
        </FormControl>
    )
}

export default SelectState;