import React from 'react';
import { 
    FlexibleXYPlot, 
    XAxis, 
    YAxis,  
    LineSeries,
    Crosshair
} from 'react-vis';
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      width: '99%',
      height: '20%',
      '& > *': {
        marginTop: theme.spacing(1),
      },
    },
  }));

const LineGrafic = props => {
    const classes = useStyles();
    return(
        <div className={classes.root} style={{marginRight: '1%'}}>
            <FlexibleXYPlot
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
                        console.log(day);
                        if(day[0] === '15'){
                        return props.months[date[1] - 1];
                        }else{
                        return   
                        }
                        
                    }}
                />
                <YAxis title={props.handleTitle()} style={props.axisStyle}/>
                <LineSeries
                    onNearestX={props.onNearestX}
                    className="first-series"
                    data={props.data}
                    style={{
                        strokeLinejoin: 'round',
                        strokeWidth: 4
                    }}
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
                        
                        
                    
            </FlexibleXYPlot>
        </div>
        
    )
}

export default LineGrafic;