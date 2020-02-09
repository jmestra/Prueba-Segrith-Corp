import React from 'react';

class MiComponente extends React.Component {


    render() {

        let receta ={
            nombre: 'pizza',
            ingredientes:['Tomate','Queso', 'jamon'],
            calorias:400
        };

        return (
            <div>
            <h1>{receta.nombre}</h1>
            <h1>{receta.calorias}</h1>
            <h1>{'calorias: '+receta.ingredientes}</h1>
           <ol>
             {
                 receta.ingredientes.map((ingrediente, i)=>{
                     console.log(ingrediente);
                     return(
                         <li key={1}>
                             {ingrediente}
                         </li>
                     )
                 })
             }
           </ol>
            </div>
        );
    }

}

export default MiComponente;