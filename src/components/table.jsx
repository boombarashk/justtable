import React from 'react';

export default function Table(props) {
    if (props.data) {
        const headerHTML = props.headers.map( name => {
            return (
                <b key={name} style={{'display':'inline-block', 'margin':'.2em'}}>{ name.toLowerCase() }</b> // fixme uniq id
            )
        })

        return (
            <div>
                <div>{ headerHTML }</div>

                {props.data.toString()}
            </div>
        )
    } else return (
        <div className="App-loader">Загрузка..</div>
    )
}
