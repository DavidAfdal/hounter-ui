
import SkeletonSmallCard from '../elements/SkeletonSmallCard';

const ListSkeletonSmallCard = () => {
  return (
    <div className='flex gap-8 overflow-x-scroll media-scrool'>
      <div className='basis-[250px] md:basis-[300px] shrink-0 grow-0'>
        <SkeletonSmallCard />
      </div>
      <div className='basis-[250px] md:basis-[300px] shrink-0 grow-0'>
        <SkeletonSmallCard />
      </div>
      <div className='basis-[250px] md:basis-[300px] shrink-0 grow-0'>
        <SkeletonSmallCard />
      </div>
      <div className='basis-[250px] md:basis-[300px] shrink-0 grow-0'>
        <SkeletonSmallCard />
      </div>
      <div className='basis-[250px] md:basis-[300px] shrink-0 grow-0'>
        <SkeletonSmallCard />
      </div>
    </div>
  );
};

export default ListSkeletonSmallCard;
