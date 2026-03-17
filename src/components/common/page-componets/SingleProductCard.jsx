import { BiMap } from "react-icons/bi";
import { Link } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai"; // Heart icon from react-icons
import CardHoverIcons from "./CardHoverIcons";
import CardLabels from "./CardLabels";

const SingleProductCard = ({
  name,
  location,
  price,
  availability,
  contact,
  description,
  image,
  basis,
  personalities,
}) => {
  return (
    <div
      className={`flex-1 ${
        basis ? basis : "basis-[18rem]"
      } shadow-light dark:border-card-dark border rounded-lg overflow-hidden relative group`}
    >
      <div className="group !opacity-100 overflow-hidden relative">
        <Link to="/" className="!opacity-100">
          <img
            src={image}
            alt={name}
            className="w-full h-fit md:h-[250px] object-cover group-hover:scale-125 transition-a"
          />
        </Link>
        <CardHoverIcons />

        {/* Display personalities above the image with a softer pink background */}
        <div className="absolute top-2 left-2 flex gap-x-2">
          {personalities?.map((personality, index) => (
            <span
              key={index}
              className="py-[3px] px-3 text-sm rounded-full capitalize text-white bg-pink-400"
            >
              {personality}
            </span>
          ))}
        </div>

        <div className="absolute bottom-0 left-0 w-full px-2 py-2 transition-transform bg-gradient-to-t from-black/80 sm:translate-y-10 group-hover:translate-y-0 to-transparent">
          <div className="text-white flex-align-center gap-x-2">
            <BiMap />
            <p>{location}</p>
          </div>
        </div>
      </div>
      <CardLabels availability={availability} contact={contact} />
      <div className="p-3">
        <Link to="/" className="group-hover:text-primary transition-a">
          <h1 className="text-lg font-bold capitalize">{name}</h1>
        </Link>

        <div className="mt-3">
          <div className="text-sm text-gray-600">
            <p>{description}</p>
          </div>
        </div>

        <div className="mt-4 flex-center-between">
          <h1 className="text-lg font-semibold text-primary">{price}</h1>

          {/* Heart icon button with "Rent" text */}
          <button
            className="flex items-center justify-center gap-2 w-auto px-4 py-2 bg-pink-400 rounded-full text-white 
            transition-all duration-200 transform hover:scale-105 hover:bg-pink-500 active:scale-95"
          >
            <AiFillHeart className="text-xl transition-all duration-200 hover:text-red-600" />
            <span className="text-sm font-semibold">Rent</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProductCard;
