import { CurrencyDollarIcon, UserIcon } from '@heroicons/react/24/solid';
import React from 'react';

// type props
type Props = {
  icon: string;
  value: number | Float32Array;
};

// render icon component depending on the icon prop passed
const Icon = ({ icon, value }: Props) => {
  switch (icon) {
    case 'participants': // if icon is participants render UserIcon
      return (
        <div className='flex'>
          <UserIcon
            className={`h-5 w-5 ${
              value >= 1 ? 'text-dark-500' : 'text-gray-200'
            }`}
          />
          <UserIcon
            className={`h-5 w-5 ${
              value >= 2 ? 'text-dark-500' : 'text-gray-200'
            }`}
          />
          <UserIcon
            className={`h-5 w-5 ${
              value >= 3 ? 'text-dark-500' : 'text-gray-200'
            }`}
          />
          <UserIcon
            className={`h-5 w-5 ${
              value >= 4 ? 'text-dark-500' : 'text-gray-200'
            }`}
          />
          <UserIcon
            className={`h-5 w-5  ${
              value >= 5 ? 'text-dark-500' : 'text-gray-200'
            }`}
          />
        </div>
      );
    case 'price': // change CurrencyDollarIcon color depending on price 0-1
      return (
        <div className='flex'>
          <CurrencyDollarIcon
            className={`h-5 w-5 ${
              value <= 0.03 ? 'text-gray-200' : 'text-dark'
            }`}
          />
          <CurrencyDollarIcon
            className={`h-5 w-5 ${
              value <= 0.07 ? 'text-gray-200' : 'text-dark'
            }`}
          />
          <CurrencyDollarIcon
            className={`h-5 w-5 ${
              value <= 0.1 ? 'text-gray-200' : 'text-dark'
            }`}
          />
        </div>
      );
    case 'accessibility': // change color and text depending on accessibility 0-1
      return (
        <div className='m-1 flex items-center justify-center rounded-full bg-white px-2 py-1 text-base font-medium'>
          <p
            className={`max-w-full flex-initial text-sm font-normal font-medium leading-none ${
              value <= 0.5
                ? 'text-green-500'
                : value <= 0.8
                ? 'text-yellow-500'
                : 'text-red-500'
            }`}
          >
            {value <= 0.5 ? 'Easy' : value <= 0.8 ? 'Medium' : 'Hard'}
          </p>
        </div>
      );
    default:
      return null;
  }
};

export default function Rating({ icon, value }: Props) {
  return (
    <>
      <Icon icon={icon} value={value} />
    </>
  );
}
