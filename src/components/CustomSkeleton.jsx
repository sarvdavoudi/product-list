import { Box, Container, Grid2, Skeleton } from "@mui/material";

const CustomSkeleton = () => {
  return (
    <>
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
        <Box className="productCards">
          <Skeleton
            animation="wave"
            variant="rounded"
            width={130}
            height={20}
            sx={{ mb: "10px" }}
          />
          <Grid2 container spacing={2} columns={4}>
            {Array.from({ length: 9 }).map((_, index) => (
              <Grid2 item key={index}>
                <Skeleton
                  animation="wave"
                  variant="rounded"
                  width={250}
                  height={250}
                />
                <Skeleton
                  animation="wave"
                  variant="rounded"
                  width={180}
                  height={20}
                  sx={{ mt: "10px" }}
                />
                <Skeleton
                  animation="wave"
                  variant="rounded"
                  width={100}
                  height={20}
                  sx={{ mt: "10px" }}
                />
              </Grid2>
            ))}
          </Grid2>
        </Box>

        <Box className="cart">
          <Skeleton
            animation="wave"
            variant="rounded"
            width={130}
            height={20}
            sx={{ mb: "10px" }}
          />
          <Skeleton
            animation="wave"
            variant="rounded"
            width={250}
            height={250}
          />
          <Skeleton
            animation="wave"
            variant="rounded"
            width={180}
            height={20}
            sx={{ mt: "10px" }}
          />
        </Box>
      </Container>
    </>
  );
};

export default CustomSkeleton;
