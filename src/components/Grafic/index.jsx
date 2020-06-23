import React, { useState, useEffect } from 'react';

import BarGrafic from '../BarGrafic/';
import LineGrafic from '../LineGrafic/';

import api from '../../services/api';

import '../../../node_modules/react-vis/dist/style.css';

import './styles.css';

const Grafic = (props) => {
    const [data, setData] = useState([]);
    const [crosshairValues, setCrosshairValues] = useState([]);

    const months = ["Jan", "Fev", "Mar", "Abr", "Mai", 'Jun', "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

    useEffect(() => {
      api.get(`brazil/${props.content}?${props.typeLocal}=${props.local}`).then(response => setData(response.data))
    }, [props.content, props.local]);

    function handleTitle() {
      switch(props.content){
        case "casesNew":
          return "Número de novas infecções";
        case "casesAcc":
          return "Números total de casos";
        case "deathsNew":
          return "Número de novos óbitos";
        case 'deathsAcc':
          return "Número total de óbitos";
        default:
          return "Qualquer coisa"
      }
      
    }

    const axisStyle = {
      ticks: {
        fontSize: '10px',
        fill: '#FFF'
      },
      title: {
        fontSize: '10px',
        fill: '#FFF'
      },
      text: {stroke: 'none', fill: '#FFF', fontWeight: 300}
    };
    
  /**
   * Event handler for onMouseLeave.
   * @private
   */
  const _onMouseLeave = () => {
    setCrosshairValues([]);
  };

  /**
   * Event handler for onNearestX.
   * @param {Object} value Selected value.
   * @param {index} index Index of the value in the data array.
   * @private
   */
  const _onNearestX = (value, {index}) => {
    let newCrosshairVaules = [];
    newCrosshairVaules.push(data[index]);
    setCrosshairValues(newCrosshairVaules);
  };

    return(
        <>{data === [] ? <div>Loading...</div> :
          <>{props.type === 'bar' ? 
            <BarGrafic data={data} axisStyle={axisStyle} handleTitle={handleTitle} months={months} color={props.color} onMouseLeave={_onMouseLeave} onNearestX={_onNearestX} crosshairValues={crosshairValues}/>
          : 
            <LineGrafic data={data} axisStyle={axisStyle} handleTitle={handleTitle} months={months} color={props.color} onMouseLeave={_onMouseLeave} onNearestX={_onNearestX} crosshairValues={crosshairValues}/>
          }
            
          </>
        }
        </>
        
    )
}

export default Grafic;