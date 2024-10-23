import {
  decrementItem,
  incrementItem,
  removeItem,
} from "@/redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const Cart = ({ handleConfirmBtnFunc }) => {
  const cartItems = useSelector((state) => state.cartSlice.cartItems);
  const dispatch = useDispatch();
  const cartQuantity = cartItems.length;
  const cartTotal = cartItems
    .map((item) => item.price * item.quantity)
    .reduce((prevValue, currValue) => prevValue + currValue, 0);

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
        <h2 style={{ color: "var(--Red)" }}>Your Cart({cartQuantity})</h2>
        <div className="cart-body">
          {cartQuantity === 0 ? (
            <div className="empty-file ">
              <img src="/images/illustration-empty-cart.svg" alt="Empty Cart" />
              <p>Your added items will appear here</p>
            </div>
          ) : (
            cartItems.map((item) => {
              return (
                <div className="cart-item" key={item.id}>
                  <h3>{item.name}</h3>
                  <div className="cart-item-price">
                    <p>${item.price}</p>
                    <div className="cart-item-quantity">
                      <button onClick={() => handleDecrement(item.id)}>
                        −
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => handleIncrement(item.id)}>
                        +
                      </button>
                    </div>
                    <button
                      className="btn-delete"
                      onClick={() => handleRemove(item.id)}
                    >
                      <span>&times;</span>
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
        {cartQuantity > 0 && (
          <>
            <h3>
              <label>Order Total:</label>
              <label> ${cartTotal.toLocaleString()}</label>
            </h3>
            <button
              className="confirmOrder"
              style={{ textAlign: "center" }}
              onClick={handleConfirmBtnFunc}
            >
              Confirm Order
            </button>
          </>
        )}
      </div>
    </>
  );
};
export default Cart;
