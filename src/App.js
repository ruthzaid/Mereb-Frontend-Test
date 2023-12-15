import React, { useState, useEffect } from "react";
import CardComponent from "./components/Card";
import PopupComponent from "./components/Popup";
import Header from './components/Header';
import Grid from "@mui/material/Grid";
import './App.css';

const CharacterList = () => {
  const [showDetailsPopup, setShowDetailsPopup] = useState(false);
  const [selectedCharacter, setCharacters] = useState(null);
  const [characters, setAllCharacters] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await fetch("https://swapi.dev/api/people/");
        const characterData = await response.json();
        console.log(characterData);
        setAllCharacters(characterData.results);
      } catch (error) {
        console.log(error);
        setAllCharacters([]);
      }
    };

    fetchApi();
  }, []);

  const openDetails = (characterId) => {
    setCharacters(characterId);
    setShowDetailsPopup(true);
  };

  const closeDetails = () => {
    setCharacters(null);
    setShowDetailsPopup(false);
  };

  return (
    <div className="App">
      <Header/>
      <Grid container justifyContent="center" alignItems="center" spacing={0} rowSpacing={3}>
        {characters.map((character) => (
          <Grid item key={character.url}>
            <CardComponent
              character={character}
              onClick={() => openDetails(character.url)}
            />
          </Grid>
        ))}
      </Grid>

      <PopupComponent
        open={showDetailsPopup}
        onClose={closeDetails}
        detail={characters.find(
          (character) => character.url === selectedCharacter
        )}
      />
    </div>
  );
};

export default CharacterList;

