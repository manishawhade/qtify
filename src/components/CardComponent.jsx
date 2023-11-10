import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Song1 from "../assets/song1.png";
import Song2 from "../assets/song2.png";
import { Box, Button } from "@mui/material";
export default function CardComponent({ id, title, image, followers }) {
  return (
    <Card>
      <img src={image === 1 ? Song1 : Song2} alt={title} width={"100%"} />
      <CardContent>
        <Typography
          variant="body2"
          sx={{
            background: "#000",
            color: "#fff",
            borderRadius: "10px",
            width: "fit-content",
            padding: "3px",
          }}
        >
          {followers} Follows
        </Typography>
        <Typography
          variant="body2"
          sx={{
            background: "#fff",
            color: "#000",
          }}
        >
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
}
