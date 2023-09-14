import React from 'react';
import { clients } from '../datas/data';

const ClientLogos = () => {
  return (
    <marquee direction="left" className="flex items-center gap-6 py-12">
      {clients.map((client, i) => {
        return (
          <div
            className="inline-flex justify-center items-center h-full grayscale hover:grayscale-0 pr-32 opacity-50"
            key={i}
          >
            <img src={client.src} alt={client.alt} />
            {/* <span dangerouslySetInnerHTML={{ __html: client.src }} /> */}
          </div>
        );
      })}
    </marquee>
  );
};

export default ClientLogos;
