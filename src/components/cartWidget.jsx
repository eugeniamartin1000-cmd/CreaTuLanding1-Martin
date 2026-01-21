import { useContext } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../../context/CartContext.jsx";
import "../assets/css/cartWidget.css";

const CartWidget = () => {
  const { cart, calcItemsQty } = useContext(CartContext);

  return (
    <div className="cart-container">
      <Link className="btn-cart-widget" to="/cart">
        <FaShoppingCart className="cart-icon" />
      </Link>
      <span class="cart-number"> 10 </span>
    </div>
  );
};

export default CartWidget;
