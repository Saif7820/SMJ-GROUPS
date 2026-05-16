import React from "react";
import SurakshaEnclave from "../components/blog/SurakshaEnclave";
import AboutBlog from "../components/blog/AboutBlog";
import WhyInvest from "../components/blog/WhyInvest";
import VillaTypes from "../components/blog/BlogType";
import AmenitiesBlog from "../components/blog/AmenitiesBlog";
import LocationAdvantages from "../components/blog/LocationAdvantages";
import InvestmentsInsights from "../components/blog/InvestmentsInsights";
import ChoosingVilla from "../components/blog/ChoosingVilla";
import FAQSection from "../components/blog/FAQsection";
import BlogHero from "../components/blog/BlogHero";
const Blog = () => {
  return (
  <>
  <BlogHero/>
  <SurakshaEnclave/>
  <AboutBlog/>
  <WhyInvest/>
  <VillaTypes/>
  <AmenitiesBlog/>
  <LocationAdvantages/>
  <InvestmentsInsights/>
  <ChoosingVilla/>
  <FAQSection/>
  </>
  );
};

export default Blog;