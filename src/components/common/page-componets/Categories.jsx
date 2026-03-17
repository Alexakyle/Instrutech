import { useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { recommendedSpots } from "../../../data/dummyData"; // Assuming you have a data file with spots for rent

const DateSpots = () => {
  const spotContainer = useRef(null);
  const [isScroll, setIsscroll] = useState(false);

  const scrollContainer = (direction) => {
    direction === "right"
      ? (spotContainer.current.scrollLeft += 200)
      : (spotContainer.current.scrollLeft -= 200);
    spotContainer.current.scrollLeft > 0
      ? setIsscroll(true)
      : setIsscroll(false);
  };

  return (
    <div className="pt-10 pb-16">
      <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 md:grid-cols-4">
        <div className="md:col-span-1">
          <h1 className="sub-heading">Date Spots</h1>
          <h1 className="heading">
            Discover the best places for your special occasion
          </h1>
          <p className="mt-3">
            Whether it's a romantic dinner or an exciting adventure, we have the perfect date spots for you to choose from.
          </p>
          <button className="mt-4 btn btn-primary">View All Date Spots</button>
        </div>
        <div className="md:col-span-3">
          <div className="justify-end flex-align-center gap-x-3">
            <button
              className={`btn btn-secondary !p-2 ${
                !isScroll && "opacity-50 cursor-not-allowed"
              }`}
              onClick={() => scrollContainer("left")}
            >
              <FiChevronLeft />
            </button>
            <button
              className="btn btn-secondary !p-2"
              onClick={() => scrollContainer("right")}
            >
              <FiChevronRight />
            </button>
          </div>

          <div
            className="gap-3 mt-4 overflow-auto flex-align-center scroll-smooth hide-scrollbar"
            ref={spotContainer}
          >
            {recommendedSpots.map(({ id, name, location, image, description }) => (
              <div
                key={id}
                className="relative flex-shrink-0 w-[300px] group rounded-lg overflow-hidden"
              >
                <div className="overflow-hidden rounded-lg">
                  <Link className="!opacity-100">
                    <img
                      src={image}
                      alt={name}
                      className="w-full h-[300px] object-cover group-hover:scale-125 transition-a"
                    />
                  </Link>
                </div>
                <div className="absolute bottom-0 left-0 w-full px-2 py-2 transition-transform bg-gradient-to-t from-black/80 text-slate-100 to-transparent">
                  <h1 className="text-lg font-semibold">{name}</h1>
                  <p>{location}</p>
                  <p className="text-sm">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateSpots;
