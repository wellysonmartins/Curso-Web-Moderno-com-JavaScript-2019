import React from 'react'
import ReactDOM from 'react-dom'

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'
//import Saudacao from './componentes/Saudacao'
//import { BomTarde, BoaNoite, BoaTarde } from './componentes/Multiplos'
//import Primeiro from './componentes/Primeiro'
//import BomDia from './componentes/BomDia'

ReactDOM.render(
   <div>
      <Pai nome="Paulo" sobrenome="Silva">
         <Filho nome="Pedro" sobrenome="Silva" />
         <Filho nome="Paulo" sobrenome="Silva" />
         <Filho nome="Carla" sobrenome="Silva" />
      </Pai>
   </div>
, document.getElementById('root'))