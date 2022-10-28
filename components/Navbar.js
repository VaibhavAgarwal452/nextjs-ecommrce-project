import Image from 'next/image';
import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Navbar = () => {
  return (
    <div className='flex flex-col md:flex-row md:justify-start items-center justify-between'>
      <div className='logo mx-5 my-2'>
        <Image src='/vercel.svg' width={200} height={40} />
      </div>

      <div className='nav'>
        <ul className='flex space-x-2 font-bold'>
          <li>Tshirts</li>
          <li>Hoodies</li>
          <li>Mugs</li>
          <li>Stickers</li>
        </ul>
      </div>
      <div className='cart absolute right-0 mx-5'>
        <button>
          <AiOutlineShoppingCart className='text-3xl' />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
