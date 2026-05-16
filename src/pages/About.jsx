import React from 'react';
import AboutSmj from '../components/about/AboutSmj';
import SmjGroup from '../components/about/SmjGroup';
import Chairman from '../components/about/Chairman';
import Director from '../components/about/Director';

const About = () => {
  return (
    <>
      <AboutSmj />
      <SmjGroup />
      <Chairman />
      <Director />
    </>
  );
};

export default About;