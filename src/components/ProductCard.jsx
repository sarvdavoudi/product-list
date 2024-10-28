import {
  addItem,
  decrementItem,
  incrementItem,
} from "@/redux/slices/cartSlice";
import { Box, But, Button, Buttonton, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const ProductCard = ({ image, name, category, price, id, quantity }) => {
  const [isAdded, setIsAdded] = useState(false);
  const cartItems = useSelector((state) => state.cartSlice.cartItems);
  const cardAddedToRedux = cartItems.find((existItems) => existItems.id === id);
  const cardQuantity = cardAddedToRedux
    ? cardAddedToRedux.quantity
    : "add to cart";
  const dispatch = useDispatch();
  // Use useEffect to set isAdded based on cardAddedToRedux
  useEffect(() => {
    setIsAdded(!!cardAddedToRedux); // that converts the value of cardAddedToRedux into a boolean:   //If cardAddedToRedux is truthy (i.e., it exists), !!cardAddedToRedux evaluates to true.
  }, [cardAddedToRedux]);
  const handleAddToCart = () => {
    dispatch(addItem({ name, category, price, id, quantity, image }));
    setIsAdded(true);
  };
  const handleIncrement = () => {
    dispatch(incrementItem(id));
  };
  const handleDecrement = () => {
    dispatch(decrementItem(id));
  };
  return (
    <>
      <Box
        className="productCard"
        sx={{ position: "relative", height: "auto", width: "280px" }}
      >
        <Image
          src={image}
          width={250}
          height={250}
          alt="desc"
          style={{
            borderRadius: "10px",
            border: isAdded ? `3px solid var(--Red)` : "none",
          }}
        />
        <Box className="detail" sx={{ mt: "1rem" }}>
          <Box sx={{ color: "gray" }}>{category}</Box>
          <Box sx={{ fontWeight: "700" }}>{name}</Box>
          <Box sx={{ color: "var(--Red)", fontWeight: "700" }}>${price}</Box>
        </Box>
        {isAdded ? (
          <Button
            className="addedToCard"
            sx={{
              position: "absolute",
              width: "150px",
              top: "68%",
              left: "20%",
              borderRadius: "15px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "var(--Red)",
              color: "white",
              cursor: "pointer",
            }}
          >
            <button
              className="minusButton"
              onClick={handleDecrement}
              style={{
                border: "1px solid white",
                borderRadius: "50%",
                background: "none",
              }}
            >
              <Image
                width={15}
                height={10}
                src="/images/icon-decrement-quantity.svg"
                alt="Decrease quantity"
                style={{ padding: "2px" }}
              />
            </button>
            <Typography variant="subtitle1" sx={{ margin: "0 15px" }}>
              {cardQuantity}
            </Typography>
            <button
              className="plusButton"
              onClick={handleIncrement}
              style={{
                border: "1px solid white",
                borderRadius: "50%",
                background: "none",
              }}
            >
              <Image
                width={15}
                height={10}
                src="/images/icon-increment-quantity.svg"
                alt="Increase quantity"
              />
            </button>
          </Button>
        ) : (
          <Button
            className="addToCard"
            onClick={handleAddToCart}
            sx={{
              position: "absolute",
              width: "150px",
              top: "68%",
              left: "20%",
              borderRadius: "15px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white",
              color: "black",
              border: "1px solid black",
              cursor: "pointer",
            }}
          >
            <Image
              width={20}
              height={20}
              src="/images/icon-add-to-cart.svg"
              alt="AddtoCart"
            />
            <Typography variant="h8" sx={{ margin: "0 5px" }}>
              Add to cart
            </Typography>
          </Button>
        )}
      </Box>
    </>
  );
};

export default ProductCard;
