import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';

const Navbar = () => {
  return (
    <header className='bg-transparent absolute  w-full z-50'>
      <div className='max-w-[1440px] mx-auto flex items-center justify-between flex-initial p-4'>
        <div className='flex items-center gap-4'>
          <img src={Logo} className='w-[35px] h-[35px] object-cover' alt='logo.svg' />
          <h1 className='font-bold'>Hounter</h1>
        </div>
        <nav className='flex gap-5'>
          <ul className='hidden list-none lg:flex items-center justify-between flex-initial gap-5 '>
            {['About Us', 'Article', 'Property'].map((nav, i) => {
              return (
                <li key={i} className='rounded-[32px] text-white border border-solid bg-nav-bg px-4 py-2 hover:bg-secondary-100 hover:text-secondary-700 hover:border-secondary-700'>
                  <Link to='/'>{nav}</Link>
                </li>
              );
            })}
          </ul>
          <button className='py-3 px-6 bg-secondary-100 text-secondary-700 rounded-[32px] hidden lg:block'>Sign Up!</button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
