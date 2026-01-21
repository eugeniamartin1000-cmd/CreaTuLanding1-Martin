import { useContext } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";   // <-- corregido
import { CartContext } from "../../context/CartContext.jsx";
import "../assets/css/cartWidget.css";

const CartWidget = () => {
  const { cart, calcItemsQty } = useContext(CartContext);

  return (
    <div className="cart-container">
      <Link className="btn-cart-widget" to="/cart">
        <FaShoppingCart className="cart-icon" />
      </Link>
      {cart.length > 0 && (
        <span className="counter-badge">{calcItemsQty()}</span>
      )}
    </div>
  );
};

export default CartWidget;
