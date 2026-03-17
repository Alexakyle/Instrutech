import { BiMap } from "react-icons/bi";
import { Link } from "react-router-dom";
import CardHoverIcons from "./CardHoverIcons";
import CardLabels from "./CardLabels";

const SingleProductCardFullWidth = ({
  name,
  location,
  price,
  availability,
  contact,
  description,
  image,
  textLength,
  showLabels,
}) => {
  return (
    <div className="relative grid grid-cols-1 gap-3 mt-3 overflow-hidden border rounded-lg shadow-light sm:grid-cols-3 md:grid-cols-4 dark:border-card-dark group">
      <div className="sm:col-span-1">
        <div className="group !opacity-100 overflow-hidden relative h-full">
          <Link to="/" className="!opacity-100">
            <img
              src={image}
              alt={name}
              className="object-cover w-full h-full group-hover:scale-125 transition-a"
            />
          </Link>
          <CardHoverIcons />
        </div>
        {!showLabels && <CardLabels availability={availability} contact={contact} />}
      </div>
      <div className="sm:col-span-2 md:col-span-3">
        <div className="p-3">
          <Link to="/" className="group-hover:text-primary transition-a">
            <h1 className="text-lg font-bold capitalize">{name}</h1>
          </Link>

          <div className="mt-2 flex-align-center gap-x-2">
            <BiMap />
            <p>{location}</p>
          </div>
          <p className="mt-2">{`${description.slice(
            0,
            textLength || 180
          )}...`}</p>

          <div className="mt-4 flex-center-between">
            <h1 className="text-lg font-semibold text-primary">{price}</h1>
            <button className="btn btn-secondary">Rent</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductCardFullWidth;
