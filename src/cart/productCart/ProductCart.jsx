import React from "react";

//rate
import Rate from "../../components/rate/Rate";

const ProductCart = ({ data }) => {
  const price = data.price;
  return (
    <div className="flex items-center justify-center bg-white shadow-xl shadow-gray-200 rounded-2xl w-fit h-auto py-6 px-2 hover:scale-105 duration-200">
      <div className="flex item-center justify-center flex-col w-full gap-4">
        <div className="flex items-center justify-center">
          <img
            src={data.image}
            alt={`product${data.id}`}
            className="w-[16rem] scale-90"
          />
        </div>
        <div className="flex justify-center flex-col gap-2">
          <h1 className="text-gray-600 text-lg font-bold">{data.title}</h1>
          <h3 className="text-slate-400 text-sm font-bold">{data.kind}</h3>
          <div className="flex item-center justify-between">
            <div>
              <h1 className="font-bold text-gray-700">
                {price.toLocaleString()} هزار تومان
              </h1>
            </div>

            <Rate value={data.rate} />
          </div>
        </div>
        <div className="w-full px-1">
          <button
            className="text-lg font-medium text-slate-100 w-full shadow-lg shadow-blue-300 px-2 py-2 rounded-lg hover:scale-105 active:scale-95 duration-300"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #72C3FE 0%, #66a6ff 100%)",
            }}
          >
            مشاهده محصول
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
