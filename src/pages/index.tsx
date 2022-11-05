import { Footer } from 'flowbite-react';

// import Header from './components/header';
import Home from './components/home';

export default function Index() {
  return (
    <>
      <div className='flex min-h-screen flex-col'>
        {/* <Header /> */}
        <Home />
        <Footer container={true}>
          <Footer.Copyright href='#' by='Bored?' year={2022} />
          <Footer.LinkGroup>
            <Footer.Link href='#'>About</Footer.Link>
            <Footer.Link href='#'>Privacy Policy</Footer.Link>
            <Footer.Link href='#'>Licensing</Footer.Link>
            <Footer.Link href='#'>Contact</Footer.Link>
          </Footer.LinkGroup>
        </Footer>
      </div>
    </>
  );
}
