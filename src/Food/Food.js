import { Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import FoodCart from '../FoodCart/FoodCart';
import './Food.css';

const Food = () => {
    const [foods, setFoods] = useState([]);
    const [searchText, setSearchText] = useState([])
    useEffect(() => {
        const url = `https://themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setFoods(data.meals))
    },[searchText])
    const handleSearchFiled = e => {
        const searchTextVlaue = e.target.value;
        setSearchText(searchTextVlaue);
    }
   
    return (
        <div>
           <TextField
          onChange={handleSearchFiled}
          className='input-field'
          id="filled-search"
          label="Search your Favourite Food"
          type="text"
          variant="filled"
        />
        <div className='food-container'>
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {
            foods.map(food =>   
            <Grid item xs={2} sm={4} md={4}>
            <FoodCart
            key={food.idMeal}
            food={food}
            > </FoodCart>
            </Grid>
            )
        }
    </Grid>
    </Box>
        </div>
        </div>
    );
};

export default Food;