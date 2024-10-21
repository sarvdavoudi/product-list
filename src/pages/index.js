import {
  addItem,
  decrement,
  decrementItem,
  increment,
  incrementItem,
  removeItem,
} from "@/redux/slices/cartSlice";
import { customizedAxios } from "@/services/axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await customizedAxios.get("/products");
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

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
                          <span>{item.quantity}</span>{" "}
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

  // ****************************************************
  const ProductCard = (props) => {
    const { image, name, category, price } = props;
    const dispatch = useDispatch();

    const handleAddToCart = () => {
      const item = { ...props };
      dispatch(addItem(item));
      // dispatch(increment());
    };
    const handleMinus = () => {
      // dispatch(decrement());
    };
    return (
      <>
        <div className="productCard">
          <button className="addToCard">
            <img src="/images/icon-add-to-cart.svg" />
            <button className="minusButton" onClick={handleMinus}>
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
            <div style={{ color: "var(--Red)", fontWeight: "700" }}>
              ${price}
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="main" role="main">
        <h2>Desserts</h2>
        <div className="container">
          <div className="product-container">
            {data.map((item, index) => (
              <ProductCard
                key={index}
                image={item.image.desktop}
                name={item.name}
                category={item.category}
                price={item.price}
              />
            ))}
          </div>
          <Cart />
        </div>
      </div>
    </>
  );
}
