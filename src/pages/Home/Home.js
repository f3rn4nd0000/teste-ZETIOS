import React from "react";
import { Container, Box, BoxTitle, BoxText, BoxButton, BoxButton2 } from "./HomeStyles";

export default function Home({ boxData }) {
  return (
    <Container>
      {boxData.map(box => (
        <Box key={box.id} bgColor={box.bgColor}>
          <BoxTitle>{box.title}</BoxTitle>
          <BoxText>{box.text}</BoxText>
          <BoxButton>{box.button}</BoxButton>
          <BoxButton2>{box.button2}</BoxButton2>
        </Box>
      ))}
    </Container>
  );
}
