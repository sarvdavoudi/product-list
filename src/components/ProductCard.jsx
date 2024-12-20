import {
  addItem,
  decrementItem,
  incrementItem,
} from "@/redux/slices/cartSlice";
import { Box, Button, Typography, useTheme } from "@mui/material";
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
  const theme = useTheme();
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
        sx={{
          position: "relative",
          height: "auto",
          width: "250px",
        }}
      >
        <Image
          src={image}
          layout="responsive"
          width={250}
          height={250}
          alt="desc"
          style={{
            borderRadius: "10px",
            border: isAdded
              ? `3px solid ${theme.palette.primary.main}`
              : "none",
          }}
        />
        <section className="detail" style={{ marginTop: "2rem" }}>
          <Typography sx={{ color: "gray" }}>{category}</Typography>
          <Typography variant="subtitle1">{name}</Typography>
          <Typography
            variant="subtitle1"
            sx={{ color: theme.palette.primary.main }}
          >
            ${price}
          </Typography>
        </section>
        {isAdded ? (
          <Button
            className="addedToCard"
            sx={{
              position: "absolute",
              width: "150px",
              top: "65%",
              left: "20%",
              borderRadius: "15px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.info.text,
              cursor: "pointer",
              padding: "10px",
            }}
          >
            <button
              className="minusButton"
              onClick={handleDecrement}
              style={{
                border: `1px solid ${theme.palette.info.text}`,
                borderRadius: "50%",
                background: "none",
                cursor: "pointer",
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
            <Typography variant="caption" sx={{ margin: "0 15px" }}>
              {cardQuantity}
            </Typography>
            <button
              className="plusButton"
              onClick={handleIncrement}
              style={{
                border: `1px solid ${theme.palette.info.text}`,
                borderRadius: "50%",
                background: "none",
                cursor: "pointer",
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
              top: "65%",
              left: "20%",
              borderRadius: "15px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: theme.palette.info.main,
              color: "black",
              border: `2px solid ${theme.palette.secondary.main}`,
              cursor: "pointer",
            }}
          >
            <Image
              width={20}
              height={20}
              src="/images/icon-add-to-cart.svg"
              alt="AddtoCart"
            />
            <Typography
              variant="subtitle2"
              sx={{
                margin: "0 5px",
                color: theme.palette.secondary.dark,
              }}
            >
              Add to cart
            </Typography>
          </Button>
        )}
      </Box>
    </>
  );
};

export default ProductCard;
