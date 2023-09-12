import React from 'react';

const Container = ({ children }: { children: React.ReactNode | React.ReactNode[] }) => {
  return <section className='max-w-[1440px] mx-auto px-4 container'>{children}</section>;
};

export default Container;
