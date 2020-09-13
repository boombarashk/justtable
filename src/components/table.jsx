import React, { useState } from 'react';
import BtnDelete from "./btnDelete";
import PersonForm from "./form";

export default function Table(props) {
    const [stateEditing, setStateEditing] = useState(false)

    if (props.data) {
        const grColumnsStyle = {gridTemplateColumns: `120px repeat(3, 1fr) repeat(${props.headers.length - 4}, auto) auto`}

        const dataArea = props.data.map( (item, indexRow) => {
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

        const formArea = stateEditing ? <div className="App-rowWrapper">
            <PersonForm fields={ props.headers.map( name => name.toLowerCase()) }
                        handlerToggleEditing={ () => { setStateEditing(false) }}
                        handlerOk={ props.handlerOk }
            />
        </div> : null

        return (
            <>
            <div className="App-table">
                <div className="grid-container" style={ grColumnsStyle }>
                    { dataArea }

                    { formArea }
                </div>
            </div>

            <p className="App-link App-text--center" onClick={ () => { setStateEditing(true) }}>Добавить персону</p>
            </>
        )
    } else return (
        <div className="App-loader App-text--center">Загрузка..</div>
    )
}
