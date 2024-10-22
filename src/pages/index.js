import Card from "@/components/Cart";
import ProductCard from "@/components/ProductCard";
import { customizedAxios } from "@/services/axios";
import { useEffect, useState } from "react";

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

  return (
    <>
      <div className="main" role="main">
        <h2>Desserts</h2>
        <div className="container">
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
          <Card />
        </div>
      </div>
    </>
  );
}
