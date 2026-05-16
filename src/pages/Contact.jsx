import React from 'react'
import ContactHero from "../components/contact/ContactHero";
import CustomerSupport from '../components/contact/CustomerSupport';
import OfficeSection from '../components/contact/OfficeSection';
import Interested from '../components/contact/Interested';

const Contact = () => {
  return (
  <>
  <ContactHero/>
   <OfficeSection/>
  <CustomerSupport />
   <Interested />
 
  </>

  );
};

export default Contact;