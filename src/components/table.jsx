import React from 'react';
import BtnDelete from "./btnDelete";

export default function Table(props) {
    if (props.data) {
        const grColumnsStyle = {gridTemplateColumns: `120px repeat(3, 1fr) repeat(${props.headers.length - 4}, auto) auto`}

        const dataAreas = props.data.map( (item, indexRow) => {
            return (
                <div className="App-rowWrapper" key={`${indexRow}-row`}>
                    { props.headers.map( (name, index) => {
                        return <div className={ `grid-item ${(name === 'CARD' || name === 'ACC1NUM')  ? 'App-ellipsis': ''}` }
                                    key={`${index}-cell`}>
                            { item[index][name] }
                        </div>
                    }) }
                    <div className="grid-item App-btnWrapper">
                        <BtnDelete handlerDelete={ props.handlerDelete }
                                   indexRow={ indexRow } />
                    </div>
                </div>
            )
        })

        return (
            <div className="App-table">
                <div className="grid-container" style={ grColumnsStyle }>
                    { dataAreas }
                </div>
            </div>
        )
    } else return (
        <div className="App-loader">Загрузка..</div>
    )
}
