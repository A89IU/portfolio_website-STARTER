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
        My name is Gerardo Romero. I am a Senior at Georgia State University pursuing a Bachelor's degree in Computer Science. Some of my passions and interests include Data Science/AI, Software Development, and Music. I am an incoming SDE Summer intern at Expedia Group so be on the lookout for more updates and projects!  
      </SectionText>

    </LeftSection>
  </Section>
);

export default AboutUs;