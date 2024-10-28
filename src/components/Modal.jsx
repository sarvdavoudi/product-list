import Image from "next/image";
import { useSelector } from "react-redux";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { Grid2 } from "@mui/material";

export const Modal = ({ closeModal, open }) => {
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
      sx={{ alignItems: "center" }}
    >
      <Grid2 item>
        <Image src={image} width={50} height={50} alt="desc" />
      </Grid2>
      <Grid2 item size={{ xs: 1.2, sm: 2, md: 2.2 }}>
        <Typography fontSize={{ xs: "12px", sm: "15px" }}>{name}</Typography>
        <Typography sx={{ color: "var(--Red)", fontWeight: "bold" }}>
          ×{quantity}
        </Typography>
      </Grid2>
      <Grid2>
        <Typography sx={{ fontWeight: "bold" }}>${price}</Typography>
      </Grid2>
    </Grid2>
  );
  return (
    <Dialog
      open={open}
      onClose={closeModal}
      sx={{
        "& .MuiDialog-paper": {
          borderRadius: 2,
          maxWidth: 500,
          width: "100%",
        },
      }}
    >
      <DialogTitle>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Order Confirmed
        </Typography>
        <Typography>We hope you enjoy your food!</Typography>
      </DialogTitle>
      <DialogContent sx={{ mt: "20px" }}>
        {cartItems.map((item) => (
          <ModalItem
            image={item.image}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
          />
        ))}
        <Divider />
        <Box display="flex" justifyContent="space-between" mt={2}>
          <Typography sx={{ fontWeight: "bold" }}>Order Total:</Typography>
          <Typography sx={{ fontWeight: "bold" }}>
            ${cartTotal.toLocaleString()}
          </Typography>
        </Box>

        <Button
          onClick={closeModal}
          sx={{
            mt: 2,
            backgroundColor: "var(--Red)",
            color: "white",
            padding: "0.75rem",
            borderRadius: "1rem",
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
