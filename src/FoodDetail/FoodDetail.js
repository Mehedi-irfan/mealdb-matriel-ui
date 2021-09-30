import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory, useParams } from 'react-router';
import './FoodDetail.css';

const FoodDetail = () => {
    const {itemId} = useParams();
    console.log(itemId);
    const [cart, setCart] = useState([]);
    const history = useHistory()
    const {strMeal, strMealThumb, strInstructions} = cart;
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${itemId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setCart(data.meals[0]))
    },[])
    const handleAllFodd = () => {
        history.push('/Food')
    }
    return (
        <div>
           <h2>Details is comming soon {itemId}</h2> 
           <Card className='card-item' sx={{ maxWidth: 345 }}>
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
          {strInstructions}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          
        </IconButton>
        <IconButton aria-label="share">
         
        </IconButton>
      </CardActions>
      <buton onClick={handleAllFodd} className='allFood-btn'>See All Food</buton>
    </Card>
           
        </div>
    );
};

export default FoodDetail;