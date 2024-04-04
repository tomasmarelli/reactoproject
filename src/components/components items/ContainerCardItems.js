import Carditem from "./Carditem";
import fetchSimulation from "../../utils/ferchSimulation";
import productos from  "../../utils/products";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";





const ContainerCardItems = () =>{
const [ datos , setDatos ] = useState ( [] );
let {idCategory} = useParams();


useEffect (() => {
    if(idCategory  == undefined ){
        fetchSimulation(productos, 2000)
    .then(resp => setDatos(resp))
    .catch(error => console.log(error))
    } else {
        fetchSimulation(productos.filter(filter => filter.type == idCategory), 2000)
    .then(resp => setDatos(resp))
    .catch(error => console.log(error))
    }
}, [idCategory])
    

    return(
        <div className="containerCardsItems">
        {
            datos.map( product => (
                <Carditem
                key={product.id}
                imagen={product.imageProduct.firtsImage}
                title={product.title}
                cantidad={product.stock}
                precio={product.price}

                />
            ))
        }
        
        </div>
    )
}
export default ContainerCardItems;