import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from '../../components/Hero/HeroStyles';

const Checklist = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Final Project <br />
        Checklist
      </SectionTitle>
      <SectionText>
        Feature Components: <br />
        Database Usage <br />
        Ajax usage <br />
        Theme  <br />
        New Library Usage  <br />
        Javascript Usage <br />
        Membership Area <br />
        General User <br />
      </SectionText>
      <SectionText>
        Page Components: <br />
        Checklist Page <br />
        Site Description Page <br />
        About Us Page  <br />
        Homepage  <br />
      </SectionText>
    </LeftSection>
  </Section>
);

export default Checklist;