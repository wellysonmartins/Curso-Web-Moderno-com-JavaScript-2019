import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'

// import BomDia from './componentes/BomDia'
import Multi, { BoaNoite } from './componentes/Multiplos'

ReactDOM.render(
   <Fragment>
      <Multi.BoaTarde nome="Wellyson" />
      <BoaNoite nome="Mônica" />
   </Fragment>
   , document.getElementById('root'))