import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To<br />
        My personal portfolio
      </SectionTitle>
      <SectionText>
        The purpose of this website is to showcase out work.
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}>Learn More</Button>
    </LeftSection>

  </Section>
);

export default Hero;