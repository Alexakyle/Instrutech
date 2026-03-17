const CardLabels = ({ personalities }) => {
  return (
    <div className="absolute top-2 left-2 flex align-center gap-x-2">
      {personalities && personalities.length > 0 && personalities.map((personality, index) => (
        <span key={index} className="py-[3px] px-3 text-sm rounded-full capitalize text-white bg-primary">
          {personality}
        </span>
      ))}
    </div>
  );
};

export default CardLabels;
