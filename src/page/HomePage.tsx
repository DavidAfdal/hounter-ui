import React from 'react';
import Home from '../assets/home.png';
import Traveloka from '../assets/traveloka.png';
import Advisor from '../assets/advisor.png';
import Tiket from '../assets/tiket.png';
import Airbnb from '../assets/airbnb.png';
import Tour from '../assets/tour.png';
import CheckboxButton from '../components/elements/CheckboxButton';
import Container from '../components/elements/Container';
import { house } from '../data/featuredHouse';
import SmallCard from '../components/elements/SmallCard';
import ListSkeletonSmallCard from '../components/fragments/ListSkeletonSmallCard';

const HomePage = () => {
  const [data, setData] = React.useState(house);
  const [filter, setFilter] = React.useState('House');
  const [loadings, setLoading] = React.useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter((prevState) => e.target.value);
  };

  React.useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setData(house.filter((house) => house.type === filter));
      setLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [filter]);

  return (
    <main className='min-h-screen flex flex-col gap-[100px]'>
      <section className='md:flex md:gap-4 md:h-[90vh] w-screen md:flex-row-reverse relative'>
        <div className='absolute w-[400px] h-[400px] bg-[#82F7FF] blur-3xl top-[-100px] left-[-80px] hidden md:block opacity-70 rotate-90 rounded-full'></div>
        <div style={{ backgroundImage: 'url(' + Home + ')' }} className='h-80 bg-no-repeat bg-cover w-full bg-center md:basis-1/2 md:rounded-bl-[75px] sm:h-[90vh] '></div>
        <article className='md:basis-1/2 p-4 relative z-20'>
          <div className='xl:max-w-[90%] lg:mx-auto md:flex md:justify-center md:flex-col h-full'>
            <h1 className='text-2xl capitalize font-semibold text-primary sm:text-3xl lg:text-4xl'>
              find the place to <br />
              live <span className='font-outline-2'>your dreams</span> <br />
              easily here
            </h1>
            <br />
            <p className='text-text-color'>Everything you need about finding your place to live will be here, where it will be easier for you</p>
            <br />
            <p className='text-text-color'>Our Patnership</p>
            <div className='grid grid-cols-4 sm:grid-cols-5 gap-4  '>
              {[Traveloka, Advisor, Tiket, Airbnb].map((patnerUrl, i) => {
                return <img src={patnerUrl} key={i} alt={patnerUrl} className='w-full h-auto object-cover ' />;
              })}
            </div>
          </div>
        </article>
      </section>
      <Container>
        <p className='text-[#F59E0B] text-sm font-medium'>Our Recomendation</p>
        <div className='flex items-center justify-between w-full mb-4'>
          <h1 className='text-3xl font-medium'>Featured House</h1>
          <div className='lg:flex lg:gap-2 hidden'>
            <CheckboxButton value='House' name='House' onChange={handleChange} checked={filter === 'House'} />
            <CheckboxButton value='Villa' name='Villa' onChange={handleChange} checked={filter === 'Villa'} />
            <CheckboxButton value='Apartment' name='Apartment' onChange={handleChange} checked={filter === 'Apartment'} />
          </div>
          <div className='lg:flex lg:gap-2 hidden'>
            <CheckboxButton value='House' name='House' onChange={handleChange} checked={filter === 'House'} />
            <CheckboxButton value='Villa' name='Villa' onChange={handleChange} checked={filter === 'Villa'} />
          </div>
        </div>
        {loadings ? (
          <ListSkeletonSmallCard />
        ) : data.length < 1 ? (
          <div className='w-full h-[300px] flex items-center justify-center'>
            <h1>No Data</h1>
          </div>
        ) : (
          <div className='flex gap-8 overflow-x-scroll media-scrool'>
            {data.map((data, index) => {
              return (
                <SmallCard
                  id={data.id}
                  nameHouse={data.nameHouse}
                  houseImg={data.houseImg}
                  price={data.price}
                  nameSeller={data.nameSeller}
                  imgSeller={data.imgSeller}
                  jobSeller={data.jobSeller}
                  className='basis-[250px] md:basis-[300px] shrink-0 grow-0'
                  key={index}
                />
              );
            })}
          </div>
        )}
      </Container>
      <Container>
        <div className='flex gap-4'>
          <div className='flex flex-col gap-4 flex-1'>
            <p className='text-[#F59E0B] text-sm font-medium'>Ready to Sell!</p>
            <h1 className='text-3xl font-medium'>Let’s tour and see our house!</h1>
            <p className='text-text-color max-w-[80%]'>Houses recommended by our partners that have been curated to become the home of your dreams!</p>
            <p>House Detail</p>
            <div className='grid grid-cols-2 gap-2'>
              <div className='flex items-center gap-2'>
                <p>b</p>
                <p>4 Bedrooms</p>
              </div>
              <div className='flex items-center  gap-2'>
                <p>b</p>
                <p>2 Bathrooms</p>
              </div>
              <div className='flex items-center  gap-2'>
                <p>b</p>
                <p>1 Carport</p>
              </div>
              <div className='flex items-center  gap-2'>
                <p>b</p>
                <p>2 Floors</p>
              </div>
            </div>
          </div>
          <div className='flex-1 h-auto'>
            <img src={Tour} alt={'tour.png'} className='w-full object-cover object-center h-auto ' />
          </div>
        </div>
      </Container>
    </main>
  );
};

export default HomePage;
