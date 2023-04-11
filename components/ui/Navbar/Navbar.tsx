import Link from 'next/link';
import { useRouter } from 'next/router';

import Logo from '@/components/icons/Logo';

import s from './Navbar.module.css';

const Navbar = () => {
  const router = useRouter();

  return (
        <nav className="bg-black overscroll-contain fixed top-0 z-50 w-full border-b border-gray-200 dark:bg-[#0d1117] dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="block inline-flex lg:hidden items-center p-2 text-sm text-gray-50 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-50 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                  <span className="sr-only">Open sidebar</span>
                  <svg className="w-6 h-6"  fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                  </svg>
              </button>
              <a href="#" className="flex ml-2 hidden lg:block" >
                <img src="https://cdn-icons-png.flaticon.com/512/2111/2111292.png" className="w-8 h-8 mr-3" alt="FlowBite Logo" />
              </a>

                <form>
                  <label htmlFor="default-search" className="sm:hidden text-sm font-medium text-gray-50 sr-only dark:text-white">Search</label>
                  <div className="lg:w-64 relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg  className="w-5 h-5 text-gray-50 dark:text-gray-50" fill="none"
                        stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                      </svg>
                    </div>
                    <input type="search" id="default-search" className="block w-full p-1 pl-10 text-sm text-gray-50 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search or jump to..."/>
                    <button type="submit" className="text-white lg:block sm:hidden absolute right-1 bottom-1 border border-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-2 dark:focus:ring-blue-800">/</button>
                  </div>
                </form>
                <ul className="hidden lg:visible flex p-4 md:flex sm:hidden md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                  <li>
                    <a href="#"
                      className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 dark:hover:text-gray-50 font-bold dark:text-white">Pull
                      requests</a>
                  </li>
                  <li>
                    <a href="#"
                      className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 dark:hover:text-gray-50 font-bold dark:text-white">Issues</a>
                  </li>
                  <li>
                    <a href="#"
                      className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 dark:hover:text-gray-50 font-bold dark:text-white">Codespaces</a>
                  </li>
                  <li>
                    <a href="#"
                      className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 dark:hover:text-gray-50 font-bold dark:text-white">MarketPlaces</a>
                  </li>
                  <li>
                    <a href="#"
                      className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 dark:hover:text-gray-50 font-bold dark:text-white">Explore</a>
                  </li>
                </ul>
            </div>
            <div className="flex items-center">
              <div className="flex items-center ml-3">
                <div className="flex items-center gap-5">
                  <button type="button" className="hidden lg:block flex text-sm  bg-white rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                                  <span className="sr-only">Open user menu</span>
                                  <svg className="w-5 h-5 rounded-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                                  </svg>
                              </button>
                  <button type="button" className="hidden lg:block  flex text-sm bg-white rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                                  <span className="sr-only">Open user menu</span>
                                <svg className="w-5 h-5 rounded-full w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                              </svg>
                              </button>
                  <button type="button" className="hidden lg:block  flex text-sm rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                                  <span className="sr-only">Open user menu</span>
                                  <img className="w-5 h-5 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo"/>
                              
                              </button>
                </div>
                <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                  id="dropdown-user">
                  <div className="px-4 py-3" role="none">
                    <p className="text-sm text-gray-50 dark:text-white" role="none">
                      Neil Sims
                    </p>
                    <p className="text-sm font-medium text-gray-50 truncate dark:text-gray-50" role="none">
                      neil.sims@flowbite.com
                    </p>
                  </div>
                  <ul className="py-1" role="none">
                    <li>
                      <a href="#"
                        className="block px-4 py-2 text-sm text-gray-50 hover:bg-gray-100 dark:text-gray-50 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem">Dashboard</a>
                    </li>
                    <li>
                      <a href="#"
                        className="block px-4 py-2 text-sm text-gray-50 hover:bg-gray-100 dark:text-gray-50 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem">Settings</a>
                    </li>
                    <li>
                      <a href="#"
                        className="block px-4 py-2 text-sm text-gray-50 hover:bg-gray-100 dark:text-gray-50 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem">Earnings</a>
                    </li>
                    <li>
                      <a href="#"
                        className="block px-4 py-2 text-sm text-gray-50 hover:bg-gray-100 dark:text-gray-50 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem">Sign out</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

  );
};

export default Navbar;
