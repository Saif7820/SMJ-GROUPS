import React from 'react';
import SummitHero from '../../components/summit/SummitHero';
import SummitAbout from '../../components/summit/SummitAbout';
import OfficeSpaces from '../../components/summit/OfficeSpaces';
import Restaurant from '../../components/summit/Restaurant';
import HighEnd from '../../components/summit/HighEnd';
import SummitGallery from '../../components/summit/SummitGallery';
import Amenities from '../../components/golfridge/Amenities';
import Construction from '../../components/summit/Construction';
import ConnectLocation from '../../components/summit/ConnectLocation';
import SummitReraDetails from '../../components/summit/SummitReraDetails';
import ProjectVideo from '../../components/summit/ProjectVideo';

const Summit = () => {
    return (
        <>
         <SummitHero/>  
         <SummitAbout/>
         <OfficeSpaces/>
         <Restaurant/>
         <HighEnd/>
         <SummitGallery/>
         <Amenities/>
         <Construction/>
         <ConnectLocation/>
         <SummitReraDetails/>
         <ProjectVideo/>
        </>
    );
};

export default Summit;