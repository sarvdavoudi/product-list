import {
  decrementItem,
  incrementItem,
  removeItem,
} from "@/redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartSlice.cartItems);
  const dispatch = useDispatch();
  const cartQuantity = cartItems.length;
  console.log(cartQuantity);
  const handleRemove = (itemId) => {
    dispatch(removeItem(itemId));
  };

  const handleIncrement = (itemId) => {
    dispatch(incrementItem(itemId));
  };

  const handleDecrement = (itemId) => {
    dispatch(decrementItem(itemId));
  };
  return (
    <>
      <div className="cart">
        <h2 style={{ color: "var(--Red)" }}>Your Cart{cartQuantity}</h2>
        <div className="cart-body">
          {cartQuantity === 0 ? (
            <div className="empty-file ">
              <img src="/images/illustration-empty-cart.svg" />
              <p>Your added items will appear here</p>
            </div>
          ) : (
            cartItems.map((item) => {
              return (
                <div className="cart-item" key={item.id}>
                  <div className="cart-item-info">
                    <h3>{item.name}</h3>
                    <p>{item.category}</p>
                    <div className="cart-item-price">
                      <p>${item.price}</p>
                      <div className="cart-item-quantity">
                        <button onClick={() => handleDecrement(item.id)}>
                          −
                        </button>
                        <span>{item.quantity}</span>
                        <button onClick={() => handleIncrement(item.id)}>
                          +
                        </button>{" "}
                      </div>
                      <div
                        title="Remove Item"
                        className="cart_items_delete"
                        onClick={() => handleRemove(item.id)}
                      >
                        <span>&times;</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};
export default Cart;
