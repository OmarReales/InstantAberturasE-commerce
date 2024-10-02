import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import "./productCard.css";
import { Link } from "react-router-dom";

const ProductCard = ({ title, price, imageURL, description, id }) => {
  return (
    <Card sx={{ maxWidth: 350, height: 350 }}>
      <CardMedia sx={{ height: 140 }} image={imageURL} title={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {description}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {price}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/itemDetail/${id}`}>
          <Button size="small">Ver detalles</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
