import React from 'react';

const Container = ({ children, id }: { children: React.ReactNode | React.ReactNode[]; id?: string }) => {
  return (
    <section className='max-w-[1440px] mx-auto px-4 container' id={id}>
      {children}
    </section>
  );
};

export default Container;
