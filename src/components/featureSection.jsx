import React from "react";

const FeatureSection = ({
  title,
  description,
  highlightText,
  imgSrc,
  imgAlt,
}) => {
  return (
    <div className="mb-12">
      <div className="rounded-xl p-8 border border-gray-700 shadow-2xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
            <p className="text-gray-300 leading-relaxed">
              {description}{" "}
              <span className="text-blue-400">{highlightText}</span>.
            </p>
          </div>
          <div className="md:w-1/3">
            <img
              src={imgSrc}
              alt={imgAlt}
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
