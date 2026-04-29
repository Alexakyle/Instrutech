import { OverView, Stats } from "../components/about";
import { WhatWeDo } from "../components/common/page-componets";

const AboutTwo = () => {
  return (
    <div className="pt-20 max-w-7xl mx-auto px-4">
      <Stats />
      <OverView />
      <WhatWeDo />
    </div>
  );
};

export default AboutTwo;
