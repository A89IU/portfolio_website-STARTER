import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from '../../components/Hero/HeroStyles';

const AboutUs = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        About Us <br />
        Page
      </SectionTitle>
      <SectionText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
      </SectionText>

    </LeftSection>
  </Section>
);

export default AboutUs;