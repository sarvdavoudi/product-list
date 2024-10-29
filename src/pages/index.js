import Card from "@/components/Cart";
import CustomSkeleton from "@/components/CustomSkeleton";
import { Modal } from "@/components/Modal";
import ProductCard from "@/components/ProductCard";
import { clearCartItems } from "@/redux/slices/cartSlice";
import { customizedAxios } from "@/services/axios";
import { Box, Container, Skeleton, Typography, useTheme } from "@mui/material";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
export default function Home() {
  const [data, setData] = useState([]);
  const [isConfirmBtnClicked, setIsConfirmBtnClicked] = useState(false);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const theme = useTheme();
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
      <Head>
        <title>Product-list</title>
      </Head>
      <main
        className="main-wrapper"
        style={{
          backgroundColor: theme.palette.secondary.dark,
          minHeight: "100vh",
        }}
      >
        {loading ? (
          <CustomSkeleton />
        ) : (
          <Box
            className="container"
            sx={{
              width: "90%",
              margin: "0 auto",
              maxWidth: "80rem",
              padding: "15px",
              paddingY: "4rem",
              display: "flex",
              flexDirection: { xs: "column", lg: "row" },
              justifyContent: "space-around",
              gap: "10px",
            }}
          >
            <>
              <section className="desserts">
                <Typography variant="h4" sx={{ mb: "10px",fontWeight:'800' }}>
                  Desserts
                </Typography>
                <Box
                  className="product-container"
                  sx={{
                    display: "grid",
                    gridTemplateColumns: {
                      xs: "repeat(1, 1fr)",
                      sm: "repeat(2, 1fr)",
                      md: "repeat(3, 1fr)",
                    },
                    gap: "15px",
                    mt: "20px",
                  }}
                >
                  {data.map((item) => (
                    <Box item key={item.id}>
                      <ProductCard
                        id={item.id}
                        image={item.image.desktop}
                        name={item.name}
                        category={item.category}
                        price={item.price}
                        quantity={item.quantity}
                      />
                    </Box>
                  ))}
                </Box>
              </section>
              <section className="cart">
                <Card handleConfirmBtnFunc={handleConfirmBtnFuncInParent} />
              </section>
            </>
          </Box>
        )}
      </main>

      <Modal closeDialog={closeDialog} openDialog={isConfirmBtnClicked} />
    </>
  );
}
