import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background-color: rgba(255, 0, 0, 0.3);
  color: black;
  width: 40%;
  opacity: 0.5;
  box-shadow: inset 0 0 10px #000000;
`;

const H2 = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  margin: 5px 0;
`;

const P = styled.p`
  font-size: 2rem;
  margin: 5px 0;
`;

const CharacterCard = props => {
  return (
    <Card>
      <H2>Name: {props.characters.name}</H2>
      <P>Height: {props.characters.height}</P>
      <P>Mass: {props.characters.mass}</P>
      <P>Hair Color: {props.characters.hair_color}</P>
      <P>Skin Color: {props.characters.skin_color}</P>
      <P>Films: {props.characters.films.length}</P>
      <P>Vehicles: {props.characters.vehicles.length}</P>
      <P>Starships: {props.characters.starships.length}</P>
    </Card>
  );
};

export default CharacterCard;
