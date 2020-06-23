import React from 'react';
import { 
    FlexibleWidthXYPlot, 
    XAxis, 
    YAxis,  
    VerticalBarSeries,
    Crosshair
} from 'react-vis';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        marginBottom: '1%',
        width: '99%',
        '& > *': {
            marginTop: theme.spacing(1),
        },
    },
}));


const BarGrafic = props => {
    const classes = useStyles();
    return(
        <div className={classes.root} style={{marginRight: '10%'}}>
            <FlexibleWidthXYPlot 
                onMouseLeave={props.onMouseLeave}
                margin={{top: 20,bottom: 30, left: 55}} xType="ordinal"  
                height={300} 
                className="fundo"
            >
                <XAxis 
                    tickLabelAngle={0} 
                    style={props.axisStyle} 
                    tickFormat={v => {
                    const date = v.split('-');
                    const day = date[2].split('T');
                    if(day[0] === '15'){
                        return props.months[date[1] - 1];
                    }else{
                        return   
                    }
                    
                    }}
                />
                <YAxis title={props.handleTitle()} style={props.axisStyle}/>

                <VerticalBarSeries className="first-series"
                    onNearestX={props.onNearestX}
                    data={props.data}
                    stroke="#FFF"
                    color={props.color}
                />
                <Crosshair
                    values={props.crosshairValues}
                    titleFormat={(d) => null}
                    itemsFormat={(d) => {
                        let date = d[0].x.split('-');
                        const day = date[2].split('T');
                        date = `${day[0]}/${date[1]}/${date[0]}`
                        return [{title: "Data", value: date}, {title: "Ocorrências", value: d[0].y}]
                    }}
                />
            </FlexibleWidthXYPlot>
        </div>
        
    )
}

export default BarGrafic;