import React from 'react';

const Ninja = ({ ninja, deleteNinja }) => {      
    //  const {ninja} = props;
                    /* Conditional Output */
    // const ninjaList = ninja.map(ninjas => {
    //     if(ninjas.age > 20) {
    //         return (
    //             <div className="ninja" key={ninjas.id}>
    //                 <div>Name: {ninjas.name} </div>
    //                 <div>Age: {ninjas.age}</div>
    //                 <div>Belt: {ninjas.belt}</div>
    //             </div>
    //         )
    //     } else {
    //         return null
    //     }
     
    //     })
                    /*    Ternary Operator  */
    // const ninjaList = ninja.map(ninjas => {
    //      return ninjas.age > 20 ? (
    //          <div className="ninja" key={ninjas.id}>
    //                 <div>Name: {ninjas.name} </div>
    //                 <div>Age: {ninjas.age}</div>
    //                <div>Belt: {ninjas.belt}</div>
    //         </div>
    //      ) : null;
    // })

    const ninjaList = ninja.map(ninjas => {
        return  (
            <div className="ninja" key={ninjas.id}>
                <div>Name: {ninjas.name} </div>
                <div>Age: {ninjas.age}</div>
                <div>Belt: {ninjas.belt}</div>
                <button onClick={() => {deleteNinja(ninjas.id)}}>Delete Ninja</button>
                
            </div>
        ) 
    })

    

     return(
         <div className="ninja-list">
            { ninjaList }
            </div>
        )
}

export default Ninja;