import React from "react";

import { images } from "../constants";

import { BsCheckLg } from "react-icons/bs";

const ArticleCard = ({ className }) => {
  return (
    <div
      className={`rounded-xl overflow-hidden shadow-[rgba(7,_65,_210,_0.3)_0px_9px_30px] ${className}`}
    >
      <img
        src={images.post1}
        alt=""
        className="w-full object-cover object-center h-auto md:h-52 lg:h-48 xl:h-60"
      />
      <div className="p-5">
        <h2 className="font-roboto font-bold text-xl text-dark-soft lg:text-[28px]">
          Future of Work
        </h2>
        <p className=" text-dark-light mt-3 text-sm">
          Majority of peole will work in jobs that don’t exist today.
        </p>
        <div className="flex justify-between flex-nowrap items-center mt-6">
          <div className="flex items-center gap-x-2">
            <img src={images.postProfile} alt="" />
            <div className="flex flex-col ml-2">
              <h4 className="font-bold italic text-dark-soft text-sm">
                Viola Manisa
              </h4>
              <div className="flex items-center gap-x-2">
                <span className="bg-[#36b37e] rounded-full w-fit bg-opacity-20 p-1.5">
                  <BsCheckLg className="text-green-500 w-2.5 h-2.5" />
                </span>
                <span className="text-xs text-dark-light italic">
                  Verified Writer
                </span>
              </div>
            </div>
          </div>
          <span className="text-sm font-bold italic text-dark-light">
            02 May
          </span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
