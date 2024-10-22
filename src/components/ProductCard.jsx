import { addItem, decrementItem } from "@/redux/slices/cartSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const ProductCard = ({ image, name, category, price, id, quantity }) => {
  const [isAdded, setIsAdded] = useState(false);
  const cartItems = useSelector((state) => state.cartSlice.cartItems);
  const cartItem = cartItems.find((existItems) => existItems.id === id);
  const itemQuantity = cartItem ? cartItem.quantity : "Add to cart";
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem({ name, category, price, id, quantity }));
    setIsAdded(true);
  };
  const handleDecrement = () => {
    dispatch(decrementItem(id));
  };
  return (
    <>
      <div className="productCard">
        <button className="addToCard">
          <img src="/images/icon-add-to-cart.svg" />
          <button className="minusButton" onClick={handleDecrement}>
            <img src="/images/icon-decrement-quantity.svg" />
          </button>
          <label style={{ margin: "15px" }}>
            {isAdded ? itemQuantity : "Add to cart"}
          </label>
          <button className="plusButton" onClick={handleAddToCart}>
            <img src="/images/icon-increment-quantity.svg" />
          </button>
        </button>
        <img src={image} />
        <div className="detail">
          <div style={{ color: "gray" }}>{category}</div>
          <div style={{ fontWeight: "700" }}>{name}</div>
          <div style={{ color: "var(--Red)", fontWeight: "700" }}>${price}</div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
