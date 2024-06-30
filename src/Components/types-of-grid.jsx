import React from 'react';

// Remove this line since you are defining gridTypes in the same file
// import gridTypes from './types-of-grid'; 

const gridTypes = [
  {
    image: 'images/offgrid.svg',
    title: 'Off-Grid Solar System'
  },
  {
    image: 'images/offgrid.svg',
    title: 'Hybrid Solar System'
  },
  {
    image: 'images/offgrid.svg',
    title: 'On-Grid Solar System'
  },
];

const GridTypes = () => (
  <div className=".cardContainer flex flex-wrap justify-center items-center gap-4 mt-10">

    {gridTypes.map((type, i) => (
      <div className="card bg-white border-[1px] w-72 h-48 hover:-translate-y-1 hover:bg-green-500/5 hover:transition-all border-green-500 flex flex-col justify-center items-center gap-7 rounded-lg py-5 " key={i}>
        <div className="card-img w-20 h-20">
          <img src={type.image} alt={type.title} />
        </div>
        <h3 className="gridTitle text-green-500 font-semibold lg:text-xl sm:text-sm">{type.title}</h3>
      </div>
    ))}

  </div>
);

export default GridTypes;
