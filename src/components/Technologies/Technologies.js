import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { GiBrain } from 'react-icons/gi';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have worked with a range of technologies and programming languages such as...  
    </SectionText>
    <List>
      <ListItem>
        <DiReact size = "4rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size = "4rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Java and Python
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <GiBrain size = "3rem" />
        <ListContainer>
          <ListTitle>DSC and AI</ListTitle>
          <ListParagraph>
            Experience with <br />
            Jupyter Notebook, Google Colab, Pandas, Matplot, Sklearn, Seaborn
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>

  </Section>
);

export default Technologies;
