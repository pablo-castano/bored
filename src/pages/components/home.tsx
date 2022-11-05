import { ArrowPathIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import ActivityMetadata from './activity-metadata';

const mountedStyle = {
  animation: 'inAnimation 250ms ease-in',
};
const unmountedStyle = {
  animation: 'outAnimation 270ms ease-out',
  animationFillMode: 'forwards',
};

type Activity = {
  activity: string;
  accessibility: number;
  type: string;
  participants: number;
  price: number;
  link: string;
  key: string;
};

export default function Home() {
  const [data, setData] = useState<Activity>({} as Activity);
  const [loading, setLoading] = useState<boolean>(false);
  // getserverSideProps and fetch data from API getRandomActivity using typescript
  const getRandomActivity = async () => {
    setLoading(true);
    const response = await fetch('https://www.boredapi.com/api/activity/');
    const data = await response.json();
    setData(data);
    setLoading(false);
  };

  useEffect(() => {
    getRandomActivity();
  }, []);
  return data.key ? (
    <div className=' flex flex-1 flex-col items-center justify-center py-2'>
      <main className='flex w-full flex-1 flex-col items-center justify-center px-20 text-center'>
        <h1 className='pb-4 text-6xl font-bold text-secondary-500'>Bored?</h1>
        <div style={!loading ? mountedStyle : unmountedStyle}>
          <div
            className='mx-auto max-w-md overflow-hidden rounded-xl transition-all duration-500 md:max-w-2xl'
            style={{
              backgroundColor: 'rgb(109, 40, 217)',
              backgroundImage: `radial-gradient(at 57% 29%, rgb(219, 39, 119) 0, transparent 98%), radial-gradient(at 88% 14%, rgb(254, 215, 170) 0, transparent 96%), radial-gradient(at 74% 36%, rgb(214, 211, 209) 0, transparent 100%), radial-gradient(at 15% 75%, rgb(250, 204, 21) 0, transparent 65%), radial-gradient(at 17% 41%, rgb(133, 77, 14) 0, transparent 85%), radial-gradient(at 81% 63%, rgb(125, 211, 252) 0, transparent 28%)`,
            }}
          >
            <ActivityMetadata {...data} />

            <motion.button
              onClick={getRandomActivity}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowPathIcon className='h-10 w-10 pb-4 text-white' />
            </motion.button>
          </div>
        </div>
      </main>
    </div>
  ) : (
    <div className='flex-1'></div>
  );
}
