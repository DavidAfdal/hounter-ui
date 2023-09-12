import Avatar from './Avatar';

interface SmallCardAttributes {
  id?: number;
  nameHouse: string;
  houseImg: string;
  price: string;
  imgSeller: string;
  nameSeller: string;
  jobSeller: string;
  className: string;
}

const SmallCard = ({ nameHouse, houseImg, price, imgSeller, nameSeller, jobSeller, className }: SmallCardAttributes) => {
  return (
    <div className={className}>
      <div className='w-full h-auto'>
        <img src={houseImg} alt={nameHouse} className='w-full h-[300px] object-cover object-center rounded-xl' />
      </div>
      <br />
      <div className='w-full'>
        <h1 className='text-primary font-semibold text-2xl mb-2 text-ellipsis overflow-hidden whitespace-nowrap max-w-[250px]'>{nameHouse}</h1>
      </div>
      <p className='text-text-color'>Rp. {price}</p>
      <br />
      <div className='flex items-center gap-4'>
        <Avatar src={imgSeller} alt={nameSeller} />
        <div>
          <div className='inline'>
            <p className='text-primary text-ellipsis overflow-hidden whitespace-nowrap max-w-[180px] md:max-w-[220px]'>{nameSeller}</p>
          </div>
          <p className='text-text-color text-ellipsis overflow-hidden whitespace-nowrap max-w-[180px] md:max-w-[220px]'>{jobSeller}</p>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
