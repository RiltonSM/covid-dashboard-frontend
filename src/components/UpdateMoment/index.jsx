import React from 'react';

const UpdateMoment = props => {
    const date = props.date.split('-');
    const day = date[2].split('T');
    return(
        <div style={{width: '100%', height: 20, display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#FFF'}}>
            <h3>Atualizado em {`${day[0]}/${date[1]}/${date[0]}`}</h3>
        </div>
        
    )
}

export default UpdateMoment;