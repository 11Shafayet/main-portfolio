import React from 'react';
import { Link } from 'react-router-dom';
import { socialData } from '../datas/data';

const Social = () => {
  return (
    <div className="flex gap-6">
      {socialData.map((item, i) => {
        return (
          <Link
            to={item.link}
            target="_blank"
            className="hover:-translate-y-2 duration-300 opacity-75"
            key={i}
          >
            <span dangerouslySetInnerHTML={{ __html: item.icon }} />
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
