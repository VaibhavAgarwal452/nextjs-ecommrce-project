import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
const Navbar = () => {
  return (
    <div className='flex flex-col md:flex-row md:justify-start items-center justify-between py-2 shadow-xl'>
      <div className='logo mx-5'>
        <Link href='/'>
          <Image
            src='/vercel.svg'
            className='cursor-pointer'
            width={200}
            height={40}
          />
        </Link>
      </div>

      <div className='nav'>
        <ul className='flex space-x-2 font-bold'>
          <Link href={'/tshirts'}>
            <li className='cursor-pointer'>Tshirts</li>
          </Link>
          <Link href={'/hoodies'}>
            <li className='cursor-pointer'>Hoodies</li>
          </Link>
          <Link href={'/mugs'}>
            <li className='cursor-pointer'>Mugs</li>
          </Link>
          <Link href={'/stickers'}>
            <li className='cursor-pointer'>Stickers</li>
          </Link>
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
