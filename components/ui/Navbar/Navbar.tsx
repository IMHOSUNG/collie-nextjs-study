import Link from 'next/link';

import Logo from '@/components/icons/Logo';

import s from './Navbar.module.css';

const Navbar = () => {
  return (
        <nav className="bg-gray-800 border-b border-gray-200 dark:bg-[#0d1117] dark:border-gray-700">
          <div className="flex items-center justify-center">
            <div className="flex items-center basis-10/12">
              <a href="/" className="flex ml-2 hidden lg:block" >
                <img src="https://cdn-icons-png.flaticon.com/512/2111/2111292.png" className="w-8 h-8 mr-3" alt="FlowBite Logo" />
              </a>

              <form className="flex basis-10/12">
                <label htmlFor="default-search" className="sm:hidden text-sm font-medium text-gray-50 sr-only dark:text-white">Search</label>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg  className="w-5 h-5 text-gray-900 dark:text-gray-50" fill="none"
                      stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                  </div>
                  <input type="search" id="default-search" 
                    className="block w-full p-1 pl-10 text-sm text-gray-50 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search or jump to..."/>
                  <button type="submit" className="text-black lg:block sm:hidden absolute right-1 bottom-1 border border-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-2 dark:focus:ring-blue-800">/</button>
                </div>
              </form>

              
                <ul className="flex p-4 md:flex md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                  <li>
                    <Link href="/" className='block w-max py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 dark:hover:text-gray-50 font-bold dark:text-white'>
                      질문
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className='hidden w-max sm:block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 dark:hover:text-gray-50 font-bold dark:text-white'>
                      한글
                    </Link>
                  </li>
                </ul>
            </div>
          </div>

      </nav>

  );
};

export default Navbar;
