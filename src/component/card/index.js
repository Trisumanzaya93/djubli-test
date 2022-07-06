import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {  CardActionArea } from '@mui/material';

export default function MultiActionAreaCard(product) {
  const data = product.product
  console.log(data);
  return (
    <Card sx={{ maxWidth: 155 }}>
      <CardActionArea >
        <CardMedia
          component="img"
          height="100"
          image={data.image}
          alt="product"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.group_models.grup_model} {data.models.model}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
