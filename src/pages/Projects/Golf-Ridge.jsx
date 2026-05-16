import React from 'react';
import GolfHero from '../../components/golfridge/GolfHero';
import GolfTower from '../../components/golfridge/GolfTower';
import GolfGallery from '../../components/golfridge/GolfGallery';
import Amenities from '../../components/golfridge/Amenities';
import Floor from '../../components/golfridge/Floor';
import Location from '../../components/golfridge/Location';

const GolfRidge = () => {
    return (
          <>
          <GolfHero/>
          <GolfTower/>
         <GolfGallery/>
          <Amenities/>
          <Floor/>
          <Location/>
          </>
    );
};

export default GolfRidge;