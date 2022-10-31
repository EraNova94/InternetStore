import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Button } from "@mui/material";
import Add from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ obj }) => {
  // console.log(obj);
  return (
    // <div className="product-card">
    <Card sx={{ maxWidth: 800, bgcolor: blue[100] }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blue[700] }} aria-label="recipe">
            P
          </Avatar>
        }
        action={
          <Link to={`/details/${obj.id}`}>
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          </Link>
        }
        title={`Category: ${obj.category}`}
        subheader={`Title: ${obj.title} Model: ${obj.model}`}
      />
      <div className="card__images">
        <CardMedia
          id="card-img"
          component="img"
          image={obj.img1}
          alt="Paella dish"
        />
        <div className="card__images-right">
          <CardMedia
            id="card-img2"
            component="img"
            image={obj.img2}
            alt="Paella dish"
          />
          <CardMedia
            id="card-img3"
            component="img"
            image={obj.img3}
            alt="Paella dish"
          />
        </div>
      </div>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <span>{`Description: ${obj.description}`}</span>
          <br />
          <span>{`Color: ${obj.color}`}</span>
          <br />
          <span>{`Price: ${obj.price}`}</span>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <Button startdecorator={<Add />} sx={{ bgcolor: blue[300] }}>
          + Add to cart
        </Button>
      </CardActions>
    </Card>
    // </div>
  );
};

export default ProductCard;
