import { Link } from "react-router-dom";
import Founded from "../components/home/Founded";
import CraftingLegacy from "../components/home/CraftingLegacy";
import OurMission from "../components/home/OurMission";
import Landmark from "../components/home/Landmark";
import BuildingNation from "../components/home/BuildingNation";
import Stories from "../components/home/Stories";

import Hero from "../components/home/Hero";
const Home = () => {
  return (
  <>
  <Hero/>
<Founded/>
<CraftingLegacy/>
<OurMission/>
<Landmark/>
<BuildingNation/>
<Stories/>

  </>
  );
};

export default Home;