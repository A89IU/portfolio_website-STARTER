import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Hello, my name is Gerardo Romero. I am a Computer Science major at Georgia State University where I am currently a senior. I am also an incoming Full-Stack SDE intern at Expedia Group. Feel free to explore!
      </SectionText>
      <Button onClick={() => window.location = 'https://Duck.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;