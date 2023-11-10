import { Box, Typography } from "@mui/material";
import BannerLogo from "../assets/banner.svg";
const Banner = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#000",
        color: "#fff",
      }}
    >
      <div>
        <Typography variant="h4">100 Thousand Songs, ad-free</Typography>
        <Typography variant="h4">Over thousands podcast episodes</Typography>
      </div>
      <img src={BannerLogo} alt="" />
    </Box>
  );
};

export default Banner;
