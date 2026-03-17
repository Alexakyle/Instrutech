import {
  Categories,
  Featured,
  Team,
  WhatWeDo,
} from "../components/common/page-componets";
import {
  Filters,
  Hero,
  Testimonial,
} from "../components/home/home-3";

const HomeThree = () => {
  return (
    <div className="md:pt-[5.2rem] pt-10">
      <Hero />
      <Filters />
      <div className="mt-10 max-w-7xl mx-auto px-4">
        <WhatWeDo />
        <Featured />
        <Categories />
        <Team />
        <Testimonial />
      </div>
    </div>
  );
};

export default HomeThree;
