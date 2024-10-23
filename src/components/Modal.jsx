import { useDispatch, useSelector } from "react-redux";
export const Modal = ({ closeModal }) => {
  const cartItems = useSelector((state) => state.cartSlice.cartItems);

  return (
    <div className="modal-overlay">
      <div
        className="modal"
        style={{
          border: "1px solid blue",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        <h2>Order Confirmed</h2>
        <p>we hope you enjoy your food!</p>
        {cartItems.map((item) => {
          return (
            <div
              className="cart-item"
              key={item.id}
              style={{
                display: "flex",
                alignItems: "center",
                border: "1px solid red",
              }}
            >
              <img src={item.image} style={{ width: "4rem" }} />
              <h3>{item.name}</h3>
              <div>*{item.quantity}</div>
              <div className="cart-item-price">
                <p>${item.price}</p>
              </div>
            </div>
          );
        })}
        <button onClick={closeModal}>start new order</button>
      </div>
    </div>
  );
};
