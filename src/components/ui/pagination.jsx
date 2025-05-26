const Pagination = ({data, index, onClick}) => {
  return (
    <ul className="flex gap-1">
      {data.map((_, idx) => 
          <li
            key={idx}
            className={`cursor-pointer h-3 rounded-full mx-1 transition-all ease-in-out duration-100 ${idx === index ? 'w-12 bg-white/80' : 'w-4 bg-white/50'}`}
            onClick={() => onClick(idx)}
          />
      )}
    </ul>
  );
};

export default Pagination;