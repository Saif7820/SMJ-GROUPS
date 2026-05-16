
import React from 'react';
import SurakshaHero from '../../components/suraksha/SurakshaHero';
import Enclave from '../../components/suraksha/Enclave';
import SurakshaGallery from '../../components/suraksha/SurakshaGallery';
import ProjectVideo from '../../components/suraksha/ProjectVideo';
import SurakshaAmenities from '../../components/suraksha/SurakshaAmenities';
import ConstructionUpdate from '../../components/suraksha/ConstructionUpdate';
import SitePlan from '../../components/suraksha/SitePlan';
import ConnectLocation from '../../components/suraksha/ConnectLocation';
import ReraDetails from '../../components/suraksha/ReraDetails';

const Suraksha = () => {
    return (
        <>
           <SurakshaHero/>
           <Enclave/>
           <SurakshaGallery/>
         
           <SurakshaAmenities/>
           <ConstructionUpdate/>
           <SitePlan/>
           <ConnectLocation/>
           <ReraDetails/>
             <ProjectVideo/>
           
        </>
    );
};

export default Suraksha;