import { addItem, decrementItem } from "@/redux/slices/cartSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const ProductCard = ({ image, name, category, price, id, quantity }) => {
  const [isAdded, setIsAdded] = useState(false);
  const cartItems = useSelector((state) => state.cartSlice.cartItems);
  const isExistCard = cartItems.find((existItems) => existItems.id === id);
  const cardQuantity = isExistCard ? isExistCard.quantity : "add to cart";
  const dispatch = useDispatch();
  // Use useEffect to set isAdded based on isExistCard
  useEffect(() => {
    setIsAdded(!!isExistCard); // that converts the value of isExistCard into a boolean:   //If isExistCard is truthy (i.e., it exists), !!isExistCard evaluates to true.
  }, [isExistCard]);
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
        {isAdded ? (
          <div className="addToCard" style={{ backgroundColor: "var(--Red)" }}>
            <button className="minusButton" onClick={handleDecrement}>
              <img
                src="/images/icon-decrement-quantity.svg"
                alt="Decrease quantity"
              />
            </button>
            <label style={{ margin: "15px" }}>{cardQuantity}</label>
            <button className="plusButton" onClick={handleAddToCart}>
              <img
                src="/images/icon-increment-quantity.svg"
                alt="Increase quantity"
              />
            </button>
          </div>
        ) : (
          <button
            className="addToCard"
            onClick={handleAddToCart}
            style={{ backgroundColor: "var(--Rose50)" }}
          >
            <img src="/images/icon-add-to-cart.svg" alt="Add to Cart" />
            <label style={{ margin: "15px" }}>Add to cart</label>
          </button>
        )}

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
