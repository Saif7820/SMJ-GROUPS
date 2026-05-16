import React from 'react';
import CareerHero from '../components/career/CareerHero';
import Grow from '../components/career/Grow';
import WhyUs from '../components/career/WhyUs';
import Apply from '../components/career/Apply';

const Career = () => {
  return (
    <>
      <CareerHero />
      <Grow />
      <WhyUs/>
      <Apply/>
    </>
  );
};

export default Career;