import React from 'react'
import ReactDOM from 'react-dom'
import  Primeiro, { Segundo } from './component.jsx' // essa é uma maneira se 
//utilizar o export default no component.jsx caso nao utilizar assim utiliza import { Primeiro, Segundo } 
//(utilizei component.jsx pq só component não funcionou )

ReactDOM.render(
  <div>
    <Primeiro />
    <Segundo />
  </div>
, document.getElementById('app'))