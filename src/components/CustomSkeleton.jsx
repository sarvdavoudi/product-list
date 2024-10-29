import { Box, Container, Skeleton } from "@mui/material";

const CustomSkeleton = () => {
  return (
    <>
      <Container
        className="container"
        sx={{
          width: "90%",
          margin: "0 auto",
          maxWidth: "75rem",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          paddingY: "4rem",
          gap: "10px",
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
          <Box
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
            {Array.from({ length: 9 }).map((_, index) => (
              <Box item key={index}>
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
              </Box>
            ))}
          </Box>
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
