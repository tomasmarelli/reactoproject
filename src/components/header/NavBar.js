import Brand from "./Brand";
import ItemListContainer  from "./itemsListContainer";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <header>
      <div className="containerBrand">
        <Brand />
      </div>

      <nav className="containerItemList">
                <ItemListContainer 
                    itemUno = "Procesadores"
                    itemDos = "Motherboards"
                    itemTres = "Fuentes"
                    itemCuatro = "Placas de video"
                />
            </nav>

      <div className="containerCart">
        <CartWidget/>
      </div>
    </header>
  );
};
export default NavBar;
