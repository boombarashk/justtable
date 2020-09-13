import React, { useState } from 'react';
import Table from "./components/table";


function App() {

  const [stateLoadedData, setStateLoadedData] = useState(false)
  const [statePersons, setStatePersons] = useState(null)
  const [stateMeta, setStateMeta] = useState(null)

  if ( !stateLoadedData ) {
      setStateLoadedData(true)
      loadData(setStatePersons, setStateMeta)
  }

  return (
    <div className="App">
      <header className="App-header"></header>

      <Table handlerDelete={ (indexRow) => { handlerDelete(indexRow, statePersons, setStatePersons) }}
             data={statePersons}
             headers={stateMeta}/>
    </div>
  );
}

function transformData(data) {
    return data.rows.map( simpleData => {
        return simpleData.map( (value, index) => {
            const paar = {}
            paar[data.metaData[index].name] = value
            return paar
        })
    })
}
async function windows1251ResponseToUTF8Response(response) {
    return new Response(new TextDecoder("windows-1251").decode(await response.arrayBuffer()));
}

function loadData(setStatePersons, setStateMeta){
  fetch('/person.json', {
    method: 'GET',
    headers: {'Content-Type': 'application/json;charset=utf-8'}
  }).then( windows1251ResponseToUTF8Response )
      .then( result => result.json() )
      .then( data => {
        setStateMeta(data.data.metaData.map(key => key.name))
        setStatePersons(transformData(data.data))
      })
      .catch(error => {
          console.log(error)
      })
}

function handlerDelete(indexRow, statePersons, setStatePersons) {
    const clonePersons = statePersons.slice(0)
    clonePersons.splice(indexRow, 1)
    setStatePersons( clonePersons )
}

export default App;
