import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/solid';
import { Button, Label, Modal, TextInput } from 'flowbite-react';
import { useState } from 'react';

export default function Filter() {
  const [show, setShow] = useState(false);
  return (
    <>
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
            <h3 className='text-xl font-medium text-gray-900 dark:text-white'>
              Sign in to our platform
            </h3>
            <div>
              <div className='mb-2 block'>
                <Label htmlFor='text' value='Your email' />
              </div>
              <TextInput
                className='w-full rounded-[0.7rem] bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1'
                id='text'
                autoComplete='off'
                placeholder='name@company.com'
                required={true}
              />
            </div>
            <div>
              <div className='mb-2 block'>
                <Label htmlFor='stuff' value='Your password' />
              </div>
              {/* disable autocomplete */}
              <TextInput
                autoComplete='new-password'
                className='w-full rounded-[0.7rem] bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1'
                id='stuff'
                type='password'
                required={true}
              />
            </div>
            <div className='flex justify-between'>
              <a
                href='/modal'
                className='text-sm text-blue-700 hover:underline dark:text-secondary-500'
              >
                Lost Password?
              </a>
            </div>
            <div className='w-full'>
              <Button gradientDuoTone='pinkToOrange'>
                Log in to your account
              </Button>
            </div>
            <div className='text-sm font-medium text-gray-500 dark:text-gray-300'>
              Not registered?{' '}
              <a
                href='/modal'
                className='text-blue-700 hover:underline dark:text-secondary-500'
              >
                Create account
              </a>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
