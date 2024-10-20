import { decrement, increment } from "@/redux/slices/cartSlice";
import { customizedAxios } from "@/services/axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const [data, setData] = useState([]);
  const cartSlice = useSelector((state) => state.cartSlice.value);
  const dispatch = useDispatch();
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
  const handlePlus = () => {
    dispatch(increment());
  };
  const handleMinus = () => {
    dispatch(decrement());
  };
  const ProductCard = ({ image, name, category, price }) => {
    return (
      <>
        <div className="productCard">
          <button className="addToCard">
            <img src="/images/icon-add-to-cart.svg" />
            <button className="minusButton" onClick={handleMinus}>
              <img src="/images/icon-decrement-quantity.svg" />
            </button>
            <label style={{ margin: "15px" }}>Add to cart</label>
            <button className="plusButton" onClick={handlePlus}>
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
          <div className="cartInfo">
            <h2 style={{ color: "var(--Red)" }}>Your Cart{cartSlice}</h2>
            <img src="/images/illustration-empty-cart.svg" />
            <p>Your added items will appear here</p>
          </div>
        </div>
      </div>
    </>
  );
}
