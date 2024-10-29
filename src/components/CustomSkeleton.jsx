import { Box, Grid2, Skeleton } from "@mui/material";

const ProductCardItem = () => (
  <>
    <Skeleton animation="wave" variant="rounded" width={250} height={250} />
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
  </>
);
const CustomSkeleton = () => {
  return (
    <>
      <Box>
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
              <ProductCardItem />
            </Grid2>
          ))}
        </Grid2>
      </Box>

      <Box>
        <Skeleton
          animation="wave"
          variant="rounded"
          width={130}
          height={20}
          sx={{ mb: "10px" }}
        />
        <Skeleton animation="wave" variant="rounded" width={250} height={250} />
        <Skeleton
          animation="wave"
          variant="rounded"
          width={180}
          height={20}
          sx={{ mt: "10px" }}
        />
      </Box>
    </>
  );
};

export default CustomSkeleton;
