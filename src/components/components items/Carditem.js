import Image from "./Image";
import '../../styles/cardItem.css';
import Description from "./Description";
import ButtonAddCart from "./ButtonAddCart";
import ButtonDetalles from "./Buttondetalles";
import imgPrueba from "../../img/imagen2.jpeg";
import "../../styles/containerCardsItems.css";

const Carditem = (props) => {
    return(
        <div className="cardItem">
     <Image imagen={props.imagen} />
     <Description  
     title={props.title}
     cantidad = {props.cantidad}
     precio={props.precio}
     />
     <div className="buttons">
        <ButtonDetalles />
        <ButtonAddCart />
     </div>
        </div>
    )
}
export default Carditem;