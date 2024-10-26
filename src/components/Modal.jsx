import { useSelector } from "react-redux";
export const Modal = ({ closeModal }) => {
  const cartItems = useSelector((state) => state.cartSlice.cartItems);
  const cartTotal = cartItems
    .map((item) => item.price * item.quantity)
    .reduce((prevValue, currValue) => prevValue + currValue, 0);
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div
          className="modalContent"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <h2>Order Confirmed</h2>
          <p>we hope you enjoy your food!</p>
          {cartItems.map((item) => {
            return (
              <div className="modal-item" key={item.id}>
                <img src={item.image} style={{ width: "4rem" }} />
                <div style={{ flex: 1 }}>
                  <h5> {item.name}</h5>
                  <div style={{ color: "var(--Red)", fontWeight: "800" }}>
                    *{item.quantity}
                  </div>
                </div>
                <div className="modal-item-price">
                  <p style={{ fontWeight: "800", textAlign: "right" }}>
                    ${item.price}
                  </p>
                </div>
              </div>
            );
          })}
          <div style={{ display: "flex" }}>
            <label style={{ flex: 1 }}>Order Total:</label>
            <h3> ${cartTotal.toLocaleString()}</h3>
          </div>
          <button onClick={closeModal}>start new order</button>
        </div>
      </div>
    </div>
  );
};
