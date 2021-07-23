import React from "react";

import { Container, Box, BoxTitle, BoxText, BoxInput } from "./HomeStyles";

export default function Auth({ boxData }) {
  return (
    <Container>
      {boxData.map(box => (
        <Box key={box.id} bgColor={box.bgColor}>
          <BoxTitle>{box.title}</BoxTitle>
          <BoxText>{box.text}</BoxText>
          <BoxInput>{box.Input}</BoxInput>
        </Box>
      ))}
    </Container>
  );
}
