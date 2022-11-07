import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/solid';
import { Button, Modal } from 'flowbite-react';
import { useContext } from 'react';
import { useState } from 'react';

// import Rating from './rating';
import { AppCtx } from '../index';

export default function Filter() {
  const appContext = useContext(AppCtx);
  const [show, setShow] = useState<boolean>(false);
  // const [price, setPrice] = useState<number | undefined>(
  //   appContext?.price || undefined
  // );
  // const [participants, setParticipants] = useState<number | undefined>(
  //   appContext?.participants || undefined
  // );
  // const [accessibility, setAccessibility] = useState<number | undefined>(
  //   appContext?.accessibility || undefined
  // );
  const [categories, setCategories] = useState<string>(
    appContext?.categories || ''
  );

  const handleSetFilters = (filter: boolean) => {
    if (filter) {
      // appContext?.setPrice(price);
      // appContext?.setParticipants(participants);
      // appContext?.setAccessibility(accessibility);
      appContext?.setCategories(categories);
      appContext?.setFilters([
        // { key: 'price', value: price },
        // { key: 'participants', value: participants },
        // { key: 'accessibility', value: accessibility },
        { key: 'type', value: categories },
      ]);
    } else {
      appContext?.setCategories('');
      appContext?.setFilters([]);
    }
    setShow(false);
  };

  return (
    <div className='flex justify-end p-4'>
      <Button
        onClick={() => {
          setShow(true);
        }}
        outline={true}
        gradientDuoTone='pinkToOrange'
      >
        <AdjustmentsHorizontalIcon className='h-6 w-6' />
      </Button>
      <Modal
        show={show}
        size='md'
        popup={true}
        onClose={() => {
          setShow(false);
        }}
      >
        <Modal.Header />
        <Modal.Body>
          <div className='space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8'>
            <div>
              <label
                htmlFor='categories'
                className='mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400'
              >
                Categories
              </label>
              <div className='w-full rounded-[0.7rem] bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1'>
                <select
                  id='categories'
                  value={categories}
                  onChange={(e) => {
                    setCategories(e.target.value);
                  }}
                  placeholder='Select an option'
                  className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
                >
                  <option value=''>All</option>
                  <option value='education'>Education</option>
                  <option value='recreational'>Recreational</option>
                  <option value='social'>Social</option>
                  <option value='diy'>Diy</option>
                  <option value='charity'>Charity</option>
                  <option value='cooking'>Cooking</option>
                  <option value='relaxation'>Relaxation</option>
                  <option value='music'>Music</option>
                  <option value='busywork'>Busywork</option>
                </select>
              </div>
            </div>
            {/* <div>
              <label
                htmlFor='default-range'
                className='mb-2 block flex text-sm font-medium dark:text-gray-400'
              >
                <span className='mr-2'>Participants</span>{' '}
                <div className='dark:text-secondary-300'>
                  <Rating icon='participants' value={participants || 0} />
                </div>
              </label>
              <input
                id='default-range'
                type='range'
                value={participants || 0}
                onChange={(e) => {
                  setParticipants(parseInt(e.target.value));
                }}
                min='1'
                max='5'
                className='h-2 w-full cursor-pointer appearance-none rounded-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 '
              />
            </div>
            <div>
              <label
                htmlFor='price'
                className='mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400'
              >
                Price
              </label>
              <div className='w-full rounded-[0.7rem] bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1'>
                <select
                  id='price'
                  value={price || 0}
                  placeholder='Select an option'
                  onChange={(e) => {
                    setPrice(Number(e.target.value));
                  }}
                  className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
                >
                  <option selected value={undefined}>
                    Any
                  </option>
                  <option value={0}>Free</option>
                  <option value={0.03}>Cheap</option>
                  <option value={0.07}>Medium</option>
                  <option value={0.1}>Expensive</option>
                </select>
              </div>
            </div>
            <div>
              <label
                htmlFor='difficulty'
                className='mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400'
              >
                Difficulty
              </label>
              <div className='w-full rounded-[0.7rem] bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1'>
                <select
                  id='difficulty'
                  value={accessibility || 0}
                  onChange={(e) => {
                    setAccessibility(Number(e.target.value));
                  }}
                  placeholder='Select an option'
                  className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
                >
                  <option selected value={undefined}>
                    Any
                  </option>
                  <option value={0}>Easy</option>
                  <option value={0.5}>Medium</option>
                  <option value={1}>Hard</option>
                </select>
              </div>
            </div> */}
            <div className='flex justify-between'>
              <div className='w-full'>
                <Button
                  gradientDuoTone='pinkToOrange'
                  onClick={() => {
                    handleSetFilters(true);
                  }}
                >
                  Filter
                </Button>
              </div>
              <Button
                outline={true}
                onClick={() => {
                  setCategories('');
                  handleSetFilters(false);
                  setShow(false);
                }}
                gradientDuoTone='pinkToOrange'
                className='bg-white dark:bg-gray-800'
              >
                Clear
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
