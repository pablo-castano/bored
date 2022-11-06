import Filter from './components/filter';
import FooterComponent from './components/footer';
import Home from './components/home';

export default function Index() {
  return (
    <>
      <div className='flex min-h-screen flex-col'>
        <div className='flex justify-end p-4'>
          <Filter />
        </div>
        <Home />
        <FooterComponent />
      </div>
    </>
  );
}
