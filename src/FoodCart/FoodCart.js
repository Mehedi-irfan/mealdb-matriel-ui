import { Avatar, Button, Card, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import React from 'react';
import { useHistory } from 'react-router-dom';
import './FoodCart.css';

const FoodCart = (props) => {
   const history = useHistory()
    const {idMeal, strMeal, strMealThumb, strInstructions,} = props.food;
    const handleClik = () => {
      history.push(`/item/${idMeal}`)
    }
    return (
        <Card sx={{ maxWidth: 345 }} className='card'>
          <CardHeader
            avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
          }
            action={
            <IconButton aria-label="settings">
          
            </IconButton>
          }
            title={strMeal}
            subheader="September 14, 2016"
            />
          <CardMedia
            component="img"
            height="194"
            image={strMealThumb}
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {strInstructions.slice(0, 200)}
            </Typography>
          </CardContent>
          <Button onClick={handleClik} className='check-btn' variant="outlined">
          Check Details
          </Button>
        </Card>
    
    );
};

export default FoodCart;