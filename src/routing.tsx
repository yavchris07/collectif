// import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/home';
import Navbar from './components/navbar';
import Footer from './components/footer';
import About from './pages/about';
import Store from './pages/store';
import Program from './pages/program';
import WaysToGive from './pages/ways-to-give';
import GetInvolved from './pages/get-involved';
import Appbar from './pages/mobile-appbar';


function Routing() {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/about' Component={About} />
          <Route path='/our-programs' Component={Program} />
          <Route path='/get-involved' Component={GetInvolved} />
          <Route path='/way-to-give' Component={WaysToGive} />
          <Route path='/store' Component={Store} />
          <Route path='/app-bar' Component={Appbar} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default Routing;
