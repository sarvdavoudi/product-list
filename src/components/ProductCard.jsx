import { addItem, decrementItem } from "@/redux/slices/cartSlice";
import { useDispatch } from "react-redux";

const ProductCard = ({ image, name, category, price, id, quantity }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const item = { name, category, price, id, quantity };
    dispatch(addItem(item));
  };
  const handleDecrement = () => {
    const item = { name, category, price, id, quantity };
    dispatch(decrementItem(item));
  };
  return (
    <>
      <div className="productCard">
        <button className="addToCard">
          <img src="/images/icon-add-to-cart.svg" />
          <button className="minusButton" onClick={handleDecrement}>
            <img src="/images/icon-decrement-quantity.svg" />
          </button>
          <label style={{ margin: "15px" }}>Add to cart</label>
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
