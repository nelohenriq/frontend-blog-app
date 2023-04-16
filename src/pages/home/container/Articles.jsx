import React from "react";
import ArticleCard from "../../../components/ArticleCard";
import { BsArrowRightShort } from "react-icons/bs";

const Articles = () => {
  return (
    <section className="flex flex-col container mx-auto px-5 py-10">
      <div className="flex flex-wrap md:gap-x-5 gap-y-5 pb-10">
        <ArticleCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-20px)]" />
        <ArticleCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-20px)]" />
        <ArticleCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-20px)]" />
      </div>
      <button className=" mx-auto flex items-center border-2 gap-x-2 font-bold px-6 py-3 rounded-lg border-primary">
        <span className="text-primary">More articles</span>
        <BsArrowRightShort className=" text-primary ml-2 w-6 h-6" />
      </button>
    </section>
  );
};

export default Articles;
