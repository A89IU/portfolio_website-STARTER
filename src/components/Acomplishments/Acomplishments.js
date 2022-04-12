import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 1000, text: 'Lorem ipsum dolor'},
  { number: 1000, text: 'Lorem ipsum dolor', },
  { number: 1000, text: 'Lorem ipsum dolor', },
  { number: 1000, text: 'Lorem ipsum dolor', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>
      Personal Acheivements 
    </SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
