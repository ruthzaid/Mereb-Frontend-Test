import React from 'react';
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import './Popup.css';

const PopupComponent = ({ open, onClose, detail }) => {
    console.log(detail)

  return (
    <Dialog open={open} onClose={onClose} fullwidth={true} maxwidth={'lg'} scroll={'paper'}>
      <DialogTitle>Character Details</DialogTitle>
      <DialogContent >
          <p>Height: {detail?.height}</p>
          <p>Mass: {detail?.mass}</p>
          <p>Hair Color: {detail?.hair_color}</p>
          <p>Skin Color: {detail?.skin_color}</p>
          <p>Eye Color: {detail?.eye_color}</p>
          <p>Homeworld: {detail?.homeworld}</p>
          <p>Films: {detail?.films}</p>
          <p>Species: {detail?.species}</p>
          <p>Vehicles: {detail?.vehicles}</p>
          <p>Starships: {detail?.starships}</p>
          <p>Created: {detail?.created}</p>
          <p>Edited: {detail?.edited}</p>
          <p>URL: {detail?.url}</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default PopupComponent;
