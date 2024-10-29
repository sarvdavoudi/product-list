import Card from "@/components/Cart";
import CustomSkeleton from "@/components/CustomSkeleton";
import { Modal } from "@/components/Modal";
import ProductCard from "@/components/ProductCard";
import { clearCartItems } from "@/redux/slices/cartSlice";
import { customizedAxios } from "@/services/axios";
import { Box, Container, Grid2, Skeleton, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
export default function Home() {
  const [data, setData] = useState([]);
  const [isConfirmBtnClicked, setIsConfirmBtnClicked] = useState(false);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const fetchData = async () => {
    try {
      const response = await customizedAxios.get("/products");
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleConfirmBtnFuncInParent = () => {
    setIsConfirmBtnClicked(true);
  };
  const closeDialog = () => {
    setIsConfirmBtnClicked(false);
    dispatch(clearCartItems());
  };
  return (
    <>
      {!loading ? (
        <CustomSkeleton />
      ) : (
        <Container
          className="container"
          sx={{
            minHeight: "100vh",
            width: "90%",
            margin: "4rem auto",
            maxWidth: "75rem",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <>
            <Box className="desserts">
              <Typography variant="h4" sx={{ mb: "10px" }}>
                Desserts
              </Typography>
              <Grid2
                container
                spacing={1}
                columns={{ sx: 12, md: 4 }}
                sx={{ mt: "20px" }}
                className="product-container"
              >
                {data.map((item) => (
                  <Grid2 item key={item.id}>
                    <ProductCard
                      id={item.id}
                      image={item.image.desktop}
                      name={item.name}
                      category={item.category}
                      price={item.price}
                      quantity={item.quantity}
                    />
                  </Grid2>
                ))}
              </Grid2>
            </Box>
            <Card
              className="cart"
              handleConfirmBtnFunc={handleConfirmBtnFuncInParent}
            />
          </>
        </Container>
      )}

      <Modal closeDialog={closeDialog} openDialog={isConfirmBtnClicked} />
    </>
  );
}
