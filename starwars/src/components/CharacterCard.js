import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background-color: rgba(255, 0, 0, 0.3);
  color: black;
  width: 60%;
  opacity: 0.8;
  box-shadow: inset 0 0 10px #000000;
  margin: 20px 0;
`;

const H2 = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  margin: 10px 0;
`;

const P = styled.p`
  font-size: 2rem;
  margin: 10px 0;
`;

const CharacterCard = props => {
  return (
    <Card>
      <H2>Name: {props.characters.name}</H2>
      <P>Birth Year: {props.characters.birth_year}</P>
      <P>Gender: {props.characters.gender}</P>
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
