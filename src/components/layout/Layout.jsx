import React from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import WhatsAppButton from '../ui/WhatsAppButton/WhatsAppButton';
import { useScrolled } from '../../hooks/useScrolled';

const Layout = ({ children }) => {
  const isScrolled = useScrolled(300);

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      {isScrolled && (
        <WhatsAppButton variant="floating" />
      )}
    </>
  );
};

export default Layout;
