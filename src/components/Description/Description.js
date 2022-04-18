import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from '../../components/Hero/HeroStyles';

const Description = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Final Project <br />
        Description Page
      </SectionTitle>
      <SectionText>
        I have decided to create a Personal Portfolio Website. I decided to create a potfolio so I can display school and personal projects to future employers as well as people who may be interested in some of the work I do or interested in who I am. I plan on keeping the website updated with each meaningful project I make and may even in the future add a personal blog. The website was built with Next.js and deployed using Vercel. The reason I chose Next.js is because it is a really popular technology that can used to build great looking and responsive websites. Being that Next.js is the React framework created by Vercel, deploying the site is made much simpler with the use of Vercel. 
      </SectionText>

    </LeftSection>
  </Section>
);

export default Description;