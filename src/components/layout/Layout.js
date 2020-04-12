import React from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="text-gray-900">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
