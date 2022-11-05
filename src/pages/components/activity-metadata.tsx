import React from 'react';

import Rating from './rating';

type props = {
  activity: string;
  accessibility: number;
  type: string;
  participants: number;
  price: number;
  link: string;
  key: string;
  className?: string;
  style?: React.CSSProperties;
};

export default function ActivityMetadata(data: props) {
  return (
    <div className='relative md:flex'>
      <div className='flex flex-col items-center px-8 py-4'>
        <div className='m-1 flex items-center justify-center rounded-full bg-dark px-2 py-1 text-base font-medium text-white'>
          <p className='max-w-full flex-initial text-sm font-normal leading-none'>
            {data.type}
          </p>
        </div>
        {/* if data.link is not empty render data.activity with a link to it */}
        {data.link ? (
          <a
            href={data.link}
            target='_blank'
            rel='noopener noreferrer'
            className='mt-1 block text-lg font-medium leading-tight text-white underline'
          >
            {data.activity}
          </a>
        ) : (
          <p className='mt-1 block text-lg font-medium leading-tight text-white'>
            {data.activity}
          </p>
        )}

        <div className='mt-2'>
          {/* change UserIcon color depending on how many participants are 0-5 */}
          <Rating icon='participants' value={data.participants} />
        </div>
        <p className='mt-2 text-white'>
          <Rating icon='price' value={data.price} />
        </p>
        <p className='mt-2 flex items-end text-white'>
          <Rating icon='accessibility' value={data.accessibility} />
        </p>
      </div>
    </div>
  );
}
