import { Grid } from "@mui/material";
import CardComponent from "./CardComponent";

const CARDS = [
  {
    id: 1,
    image: 1,
    followers: "100",
    title: "New Bollywood Songs",
  },
  {
    id: 2,
    image: 2,
    followers: "200",
    title: "New Hollywood Songs",
  },
];
const CardCollection = () => {
  return (
    <Grid container spacing={2} mt={2} mr={5} ml={5}>
      {CARDS &&
        CARDS.map((item) => (
          <Grid item key={item.id}>
            <CardComponent {...item} />
          </Grid>
        ))}
    </Grid>
  );
};

export default CardCollection;
