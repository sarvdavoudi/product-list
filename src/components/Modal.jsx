import { Grid2, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { useSelector } from "react-redux";

export const Modal = ({ closeDialog, openDialog }) => {
  const theme = useTheme();
  const cartItems = useSelector((state) => state.cartSlice.cartItems);
  const cartTotal = cartItems
    .map((item) => item.price * item.quantity)
    .reduce((prevValue, currValue) => prevValue + currValue, 0);

  const ModalItem = ({ image, name, quantity, price }) => (
    <Grid2
      container
      columnSpacing={2}
      rowSpacing={2}
      columns={3}
      sx={{ alignItems: "center", justifyContent: "space-between" }}
    >
      <Grid2 item>
        <Image src={image} width={50} height={50} alt="desc" />
      </Grid2>
      <Grid2 item size={{ xs: 1.2, sm: 2, md: 2.2 }}>
        <Typography fontSize={{ xs: "12px", sm: "15px" }}>{name}</Typography>
        <Typography
          variant="subtitle1"
          sx={{ color: theme.palette.primary.main }}
        >
          ×{quantity}
        </Typography>
      </Grid2>
      <Grid2>
        <Typography variant="subtitle1">${price}</Typography>
      </Grid2>
    </Grid2>
  );
  return (
    <Dialog
      open={openDialog}
      sx={{
        "& .MuiDialog-paper": {
          borderRadius: 2,
          maxWidth: 500,
          width: "100%",
        },
      }}
    >
      <DialogTitle>
        <Typography variant="h4">Order Confirmed</Typography>
        <Typography>We hope you enjoy your food!</Typography>
      </DialogTitle>
      <DialogContent sx={{ mt: "20px" }}>
        {cartItems.map((item) => (
          <ModalItem
            key={item.id}
            image={item.image}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
          />
        ))}
        <Divider />
        <Box
          sx={{ display: "flex", justifyContent: "space-between", mt: "25px" }}
        >
          <Typography variant="subtitle1">Order Total:</Typography>
          <Typography variant="subtitle1">
            ${cartTotal.toLocaleString()}
          </Typography>
        </Box>

        <Button
          onClick={closeDialog}
          sx={{
            mt: 2,
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.info.main,
            padding: "0.75rem",
            borderRadius: "2rem",
            display: "block",
            width: "100%",
            "&:hover": { backgroundColor: "darkred" },
          }}
        >
          Start New Order
        </Button>
      </DialogContent>
    </Dialog>
  );
};
