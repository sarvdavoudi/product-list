import Card from "@/components/Cart";
import ProductCard from "@/components/ProductCard";
import { customizedAxios } from "@/services/axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

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

  const handleClick = () => {
    setIsClicked(true);
  };
  const closeModal = () => {
    setIsClicked(false);
  };
  return (
    <>
      <div className="main" role="main">
        <div className="container">
          <div>
            <h2 style={{ marginBottom: "10px" }}>Desserts</h2>
            <div className="product-container">
              {data.map((item) => (
                <ProductCard
                  key={item.id}
                  id={item.id}
                  image={item.image.desktop}
                  name={item.name}
                  category={item.category}
                  price={item.price}
                  quantity={item.quantity}
                />
              ))}
            </div>
          </div>
          <Card isClicked={isClicked} handleClick={handleClick} />
        </div>
      </div>
      {isClicked && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Order Confirmed</h2>
            <p>Your order has been placed successfully!</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}
