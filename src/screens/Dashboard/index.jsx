import React, { useState, useEffect } from 'react';
import { Grid, makeStyles } from '@material-ui/core';

import Grafic from '../../components/Grafic/';
import PaperData from '../../components/PaperData/';
import ToggleGrafic from '../../components/ToggleGrafic/';
import SelectState from '../../components/SelectState';
import UpdateMoment from '../../components/UpdateMoment';

import api from '../../services/api';

const useStyles = makeStyles((theme) => ({
    item1 : {
        order: 1,
        [theme.breakpoints.down('sm')]: {
            order: 2,
            
        }
    },
    item2 : {
        order: 2,
        [theme.breakpoints.down('sm')]: {
            order: 1,
            marginLeft: '1%',
            marginRight: '1%'
        }
    }
}));

const Dashboard = () => {
    const [ data, setData ] = useState([]);
    const [ toggle, setToggle ] = useState("cases");
    const [ local, setLocal ] = useState('Brasil');
    const [ typeLocal, setTypeLocal ] = useState('region');
    const [ loading, setLoading ] = useState(true);
    
    useEffect(() => {
        console.log(window.screen.width)
        let initial = new Date;
        const day = initial.getDate().toString();
        const month = (initial.getMonth() + 1).toString();
        const year = initial.getFullYear().toString();
        
        const date = `${year}-${month.length === 1 ? `0${month}`: `${month}`}-${day.length === 1 ? `0${day}`: `${day}`}`;
        console.log(date);

        api.get(`brazil/date?date=${date}&${typeLocal}=${local}`).then(response => {
            console.log(response.data);
            setData(response.data);
            setLoading(false);
        });
    }, [local]);

    useEffect(()=> {
        console.log(toggle, local);
    }, [toggle, local])

    const handleToggleButton = (event, value) => {
        console.log(value);
        if(value !== null){
            setToggle(value);
        }
    }

    const handleChange = event => {
        const newLocal = event.target.value;
        setLocal(newLocal);
        if(newLocal === "Brasil"){
            setTypeLocal("region");
        } else if(newLocal.length === 2){
            setTypeLocal("state");
        } else {
            setTypeLocal("city");
        }
    }

    const classes = useStyles();

    return(
        <div style={{width: '100%', height: '100%'}}>
            {loading === true ? <p>Carregando</p> : 
                <Grid container spacing={0} style={{width: '100%', height: '100%'}}>
                    <Grid item xs={12} md={3} lg={4} className={classes.item1}>
                        <PaperData title="Total de casos" data={data[0].casesAcc}/>
                        <PaperData title="Casos novos" data={data[0].casesNew}/>
                        <PaperData title="Total de óbitos" data={data[0].deathsAcc}/>
                        <PaperData title="Óbitos confirmados nas últimas 24h" data={data[0].deathsNew}/>
                        <UpdateMoment date={data[0].date}/>
                    </Grid>
                    <Grid item xs={12} md={9} lg={8} className={classes.item2}>
                        <SelectState state={local} handleChange={handleChange}/>
                        <ToggleGrafic toggle={toggle} handleToggleButton={handleToggleButton}/>
                        {toggle === 'cases' ? 
                        <>
                            <Grafic content="casesNew" local={local} typeLocal={typeLocal} type="bar" color="#0F5959"/>
                            <Grafic content="casesAcc" local={local} typeLocal={typeLocal} type="line" color="#5BB12F"/> 
                        </> :
                        <>
                            <Grafic content="deathsNew" local={local} typeLocal={typeLocal} type="bar" color="#DB3340"/>
                            <Grafic content="deathsAcc" local={local} typeLocal={typeLocal} type="line" color="#DB3340"/> 
                        </>
                        }
                        
                    </Grid>
                </Grid>
            }
            
        </div>
    )
}

export default Dashboard;