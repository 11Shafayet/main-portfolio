import React from 'react';
import { Link } from 'react-router-dom';

const WorkCard = ({ workData }) => {
  const { src, alt, link, title, desc } = workData;
  return (
    <Link
      to={link}
      target="_blank"
      className="overflow-hidden text-start group"
    >
      <img
        src={src}
        alt={alt}
        className="w-full max-h-[350px] object-cover rounded-2xl grayscale group-hover:grayscale-0 duration-500 hover:scale-95"
      />
      <h2 className="text-xl group-hover:text-[#36d7b7] duration-300 pt-4 pl-2">
        {title}
      </h2>
      <p className="uppercase text-sm pl-2 opacity-50">{desc}</p>
    </Link>
  );
};

export default WorkCard;
