// import React, { Fragment } from 'react'
import React from 'react'
import ReactDOM from 'react-dom'

// import BomDia from './componentes/BomDia'
// import Multi, { BoaNoite } from './componentes/Multiplos'
// import Saudacao from './componentes/Saudacao'
import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

ReactDOM.render(
   <div>
      <Pai nome="Wellyson" sobrenome="Martins">
         <Filho nome="Wellyson" />
         <Filho nome="Paulo" />
         <Filho nome="Mônica" />
      </Pai>
   </div>
   , document.getElementById('root'))