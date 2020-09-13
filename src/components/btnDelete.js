import React from 'react';

export default function BtnDelete(props) {
    return (
        <div className="App-link App-btnDelete"
             onClick={ () => { props.handlerDelete(props.indexRow)} }>Удалить</div>
    )
}
