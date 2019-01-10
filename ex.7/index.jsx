import React from 'react'
import ReactDOM from 'react-dom'
import ClassComponent from './classComponent.jsx'
//import Family from './family.jsx'
//import Member from './member.jsx'

//import SilvaFamily from './silvaFamily.jsx'
//import  Primeiro, { Segundo } from './component.jsx' // essa é uma maneira se 
//utilizar o export default no component.jsx caso nao utilizar assim utiliza import { Primeiro, Segundo } 
//(utilizei component.jsx pq só component não funcionou )

ReactDOM.render(
   <ClassComponent value='Componente Classe!' />
    /*<Family  lastName=' Silva'>
        <Member name='Gulherme' />
        <Member name='Rafael' />
        <Member name='Julia' />
    </Family>*/
    //<SilvaFamily />
  //<div>
    //<Primeiro />
    //<Segundo />
  //</div>
, document.getElementById('app'))