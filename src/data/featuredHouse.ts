import Home from '../assets/home.png';
import House1 from '../assets/house1.jpeg';
import House2 from '../assets/house2.jpeg';
import House3 from '../assets/house3.jpeg';
import House4 from '../assets/house4.jpeg';

type House = {
  id?: number;
  nameHouse: string;
  houseImg: string;
  price: string;
  type: string;
};

type Seller = {
  sellerId?: string;
  imgSeller: string;
  nameSeller: string;
  jobSeller: string;
};

type FeaturedHouse = House & Omit<Seller, 'id'>;

export const house: FeaturedHouse[] = [
  {
    id: 1,
    nameHouse: 'Roselands House',
    houseImg: Home,
    price: '5.0000.000',
    type: 'House',
    imgSeller: 'David Afdal Kaizar Mutahadi',
    nameSeller: 'David Afdal Kaizar Mutahadi',
    jobSeller: 'Depok, Jawa Barat',
  },
  {
    id: 2,
    nameHouse: 'Woodlandside',
    houseImg: House1,
    price: '5.0000.000',
    type: 'House',
    imgSeller: 'string',
    nameSeller: 'Robert Fox',
    jobSeller: 'Sawangan, Jawa Barat',
  },
  {
    id: 3,
    nameHouse: 'The Old Lighthouse',
    houseImg: House2,
    price: '5.0000.000',
    type: 'House',
    imgSeller: 'string',
    nameSeller: 'Muhammad Julian',
    jobSeller: 'Selong, Lombok Timur',
  },
  {
    id: 4,
    nameHouse: `Cosmo's House`,
    houseImg: House3,
    price: '5.0000.000',
    type: 'House',
    imgSeller: 'string',
    nameSeller: 'Diaz Hafizan',
    jobSeller: 'Krukut, Jawa Barat',
  },
  {
    id: 5,
    nameHouse: 'Roselands House',
    houseImg: House4,
    price: '5.0000.000',
    type: 'House',
    imgSeller: 'string',
    nameSeller: 'Gerin Bagas Lino',
    jobSeller: 'Bogor, Bogor',
  },
];
