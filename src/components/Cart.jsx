import {
  decrementItem,
  incrementItem,
  removeItem,
} from "@/redux/slices/cartSlice";
import { Box, Divider, Grid2, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

const Cart = ({ handleConfirmBtnFunc }) => {
  const cartItems = useSelector((state) => state.cartSlice.cartItems);
  const dispatch = useDispatch();
  const theme = useTheme();
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
      <Box className="cart" sx={{}}>
        <Typography
          variant="h5"
          sx={{ color: theme.palette.primary.main, mb: "10px" }}
        >
          Your Cart({cartQuantity})
        </Typography>
        <Box
          className="cartBody"
          sx={{
            backgroundColor: theme.palette.secondary.main,
            height: "350px",
            padding: "20px 40px",
            height: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            maxWidth: "300px",
            margin: "1.5rem 0",
          }}
        >
          {cartQuantity === 0 ? (
            <Box className="empty-file ">
              <Image
                src="/images/illustration-empty-cart.svg"
                alt="Empty Cart"
                width={200}
                height={200}
              />
              <Typography variant="body1">
                Your added items will appear here
              </Typography>
            </Box>
          ) : (
            cartItems.map((item) => {
              return (
                <Box className="cart-item" key={item.id}>
                  <Typography variant="subtitle1">{item.name}</Typography>
                  <Grid2
                    container
                    className="cart-item-price"
                    columns={4}
                    spacing={1}
                    sx={{ alignItems: "center" }}
                  >
                    <Grid2 item className="price" size={{ xs: 2, md: 1 }}>
                      ${item.price}
                    </Grid2>
                    <Grid2
                      item
                      className="cart-item-quantity"
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <button
                        style={{
                          border: "none",
                          backgroundColor: theme.palette.primary.main,
                          color: theme.palette.secondary.main,
                          padding: "0.5rem",
                          fontSize: "1rem",
                          borderRadius: "5px",
                          margin: "5px",
                        }}
                        onClick={() => handleDecrement(item.id)}
                      >
                        −
                      </button>
                      <Typography variant="subtitle1">
                        {item.quantity}
                      </Typography>
                      <button
                        style={{
                          border: "none",
                          backgroundColor: theme.palette.primary.main,
                          color: theme.palette.secondary.main,
                          padding: "0.5rem",
                          fontSize: "1rem",
                          borderRadius: "5px",
                          margin: "5px",
                        }}
                        onClick={() => handleIncrement(item.id)}
                      >
                        +
                      </button>
                    </Grid2>
                    <Grid2 item sx={{ textAlign: "right" }}>
                      <button
                        className="btn-delete"
                        style={{
                          width: "1rem",
                          height: "1rem",
                          background: "none",
                          borderRadius: "50%",
                          border: "1px solid gray",
                        }}
                        onClick={() => handleRemove(item.id)}
                      >
                        <span>&times;</span>
                      </button>
                    </Grid2>
                  </Grid2>
                </Box>
              );
            })
          )}
          {cartQuantity > 0 && (
            <>
            <Divider />
              <Box sx={{ display: "flex" }}>
                <Typography sx={{ flex: 1 }}>Order Total:</Typography>
                <Typography> ${cartTotal.toLocaleString()}</Typography>
              </Box>
              <button
                className="confirmOrder"
                style={{
                  textAlign: "center",
                  backgroundColor: theme.palette.primary.main,
                  border: "none",
                  color: theme.palette.secondary.main,
                  padding: "1rem 3rem",
                  borderRadius: "1.5rem",
                  margin: "1rem 0",
                  textWrap: "nowrap",
                }}
                onClick={handleConfirmBtnFunc}
              >
                Confirm Order
              </button>
            </>
          )}
        </Box>
      </Box>
    </>
  );
};
export default Cart;
