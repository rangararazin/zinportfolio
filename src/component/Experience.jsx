import React from "react";
import { useState } from "react";


export const Experience = ({ title, descrip }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);


  const renderBulletPoints = () => {
    // Split descrip by newline character to get individual bullet points
    //eslint-disable-next-line
    const bulletPoints = descrip.split("\.");
    return (
      <ul className="list-disc ml-8">
        {bulletPoints.map((point, index) => (
          <li className="text-lg" key={index}>{point.trim()} </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="bg-gray-200  pt-0 rounded-lg  py-4 mb-3 border border-gray-300">

   
        <button
          onClick={() => setAccordionOpen(!accordionOpen)}
          className="flex justify-between w-full items-center px-3 py-1" 
        >
          <span className="text-gray-800 font-medium text-xl pt-5 pb-1 font-extrabold">{title}</span>
          
          {/* {accordionOpen ? <span>-</span> : <span>+</span>} */}
          <svg
            className="fill-indigo-500 shrink-0 ml-8 "
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className={`transform origin-center transition duration-200 ease-out ${accordionOpen && "!rotate-180"
                }`}
            />
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className={`transform origin-center rotate-90 transition duration-200 ease-out ${accordionOpen && "!rotate-180"
                }`}
            />
          </svg>
        </button>

        <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden text-stone-900">{renderBulletPoints()}</div>
      </div>
       
    {renderBulletPoints}

    </div>
  );
};
