// src/components/Layout.tsx
import React from 'react';
import Header from './Header'; // 共通のヘッダー
import Footer from './Footer'; // 共通のフッター

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
