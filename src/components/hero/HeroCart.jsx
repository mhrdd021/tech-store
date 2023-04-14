import React from "react";

const HeroCart = ({ data }) => {
  return (
    <div
      className="flex items-center justify-center lg:w-10/12 rounded-2xl mx-auto h-auto"
      style={{ backgroundImage: `${data.gradient}` }}
    >
      <div className="flex w-fit h-60 md:h-96">
        <img src={data.image} alt={`hero ${data.id}`} className="rounded-2xl flex-end" />
      </div>
      <div className="flex items-center justify-center flex-col w-max gap-3">
        <h1 className="flex text-slate-100 lg:text-4xl md:text-lg text-sm font-bold ">{data.title}</h1>
        <p className="text-slate-200 text-lg font-light w-3/4 hidden sm:flex">{data.text}</p>
      </div>
    </div>
  );
};

export default HeroCart;
