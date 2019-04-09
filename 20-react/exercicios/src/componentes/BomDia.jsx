import React, { Fragment } from 'react'

// USANDO React.Fragment
export default props => 
   <Fragment>
      <h1>Bom dia {props.nome}! Você tem {props.idade} anos.</h1>
      <h2>Até breve!</h2>
   </Fragment>

// USANDO DIV
// export default props => 
//   <div>
//       <h1 key='h1'>Bom dia {props.nome}! Você tem {props.idade} anos.</h1>,
//       <h2 key='h2'>Até breve!</h2>
//   </div>

// USANDO ARRAY
// export default props => [
//   <h1 key='h1'>Bom dia {props.nome}! Você tem {props.idade} anos.</h1>,
//   <h2 key='h2'>Até breve!</h2>
// ]