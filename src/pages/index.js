import Card from "@/components/Cart";
import { Modal } from "@/components/Modal";
import ProductCard from "@/components/ProductCard";
import {
  clearCartItems
} from "@/redux/slices/cartSlice";
import { customizedAxios } from "@/services/axios";
import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
export default function Home() {
  const [data, setData] = useState([]);
  const [isConfirmBtnClicked, setIsConfirmBtnClicked] = useState(false);
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

  const handleConfirmBtnFuncInParent = () => {
    setIsConfirmBtnClicked(true);
  };
  const closeModal = () => {
    setIsConfirmBtnClicked(false);
    dispatch(clearCartItems())
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
          <Card handleConfirmBtnFunc={handleConfirmBtnFuncInParent} />
        </div>
      </div>
      {isConfirmBtnClicked && <Modal closeModal={closeModal} />}
    </>
  );
}
