import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className='full-w flex justify-end'>
        <button
          className='rounded bg-green-600 px-4 py-1 text-white'
          onClick={() => setIsOpen(true)}
        >
          open
        </button>
      </div>
      <main
        className={
          ' fixed inset-0 z-10 transform overflow-hidden bg-opacity-0 ease-in-out ' +
          (isOpen
            ? ' translate-x-0 opacity-100 transition-opacity duration-200  '
            : ' translate-x-full opacity-0 transition-all delay-200  ')
        }
      >
        <section
          className={
            ' delay-400 absolute right-0 h-full w-screen max-w-lg transform bg-gray-900 shadow-xl transition-all duration-200 ease-in-out  ' +
            (isOpen ? ' translate-x-0 ' : ' translate-x-full ')
          }
        >
          <article className='relative flex h-full w-screen max-w-lg flex-col space-y-6 overflow-y-scroll pb-10 text-white'>
            <header className='p-4 text-lg font-bold'>Header</header>
            test
          </article>
        </section>
        <section
          className=' h-full w-screen cursor-pointer '
          onClick={() => {
            setIsOpen(false);
          }}
        ></section>
      </main>
    </>
  );
}
