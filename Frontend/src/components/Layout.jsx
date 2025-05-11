import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import PageWrapper from './PageWrapper';
import { AnimatePresence } from 'framer-motion';

function Layout() {
  const location = useLocation();
  const hideFooter = location.pathname.startsWith('/mentor');

  return (
    <div className='bg-gray-900'>
      <Header />
      <AnimatePresence mode="wait">
        <PageWrapper key={location.pathname}>
          <Outlet />
        </PageWrapper>
      </AnimatePresence>
      {!hideFooter && <Footer />}
    </div>
  );
}

export default Layout;
