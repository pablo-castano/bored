import Filter from './components/filter';
import FooterComponent from './components/footer';
import Home from './components/home';

export default function Index() {
  return (
    <>
      <div className='flex min-h-screen flex-col'>
        <Filter />
        <Home />
        <FooterComponent />
      </div>
    </>
  );
}
