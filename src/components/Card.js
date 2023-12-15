import React from 'react'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import './Card.css';

const CardComponent = ({ character, onClick }) => {
  return (
    <Card class="card">
      <CardContent class="content">
        <Typography variant="h5" component="div" align="center">
          {character.name}
        </Typography>

        <div class="content">
        <Typography variant="body1" color="text.primary" align="center">
          Gender: {character.gender}
        </Typography>
        <Typography variant="body1" color="text.primary" align="center">
          Birth Year: {character.birth_year}
        </Typography>
        </div>
        
        <div class="button">
        <Button onClick={onClick} fullWidth variant="contained" color="primary">
          Details
        </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
