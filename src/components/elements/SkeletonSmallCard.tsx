import React from 'react';

const SkeletonSmallCard = () => {
  return (
    <section className='w-full h-auto animate-pulse'>
      <div className='w-full h-[250px] rounded-xl bg-slate-400'></div>
      <br />
      <div className='w-full bg-slate-400 h-[20px] rounded-3xl mb-2'></div>
      <div className='w-[60%] bg-slate-400 h-[15px] rounded-3xl'></div>
      <br />
      <div className='flex items-center gap-4'>
        <div className='w-[50px] h-[50px] rounded-full bg-slate-400 ' />
        <div>
          <div className='max-w-[180px] h-[12px] md:max-w-[220px] bg-slate-400 w-[150px] mb-2 rounded-xl'></div>
          <div className=' max-w-[180px] h-[11px] md:max-w-[220px] bg-slate-400 w-[150px] rounded-xl'></div>
        </div>
      </div>
    </section>
  );
};

export default SkeletonSmallCard;
