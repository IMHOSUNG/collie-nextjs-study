"use client";

import Link from 'next/link';
import Logo from '@/components/icons/Logo';
import s from './Navbar.module.css';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { AsideContentList } from '@/types';

const Navbar = ({url_data}:{url_data:AsideContentList}) => {

  const path = usePathname()
  const [showMenu, setShowMenu ] = useState(false);

  const toggle = () => {
    setShowMenu(!showMenu)
  }

  const setHidden = () => {
    setShowMenu(false)
  }

  return (
    <>
    
        <nav className="bg-gray-800 border-b border-gray-200 dark:bg-[#0d1117] dark:border-gray-700">
          <div className="flex items-center justify-center">

            <div className="flex items-center basis-10/12">

              <div className={`flex w-fit
                  ${ path === '/' ? "block": "block sm:hidden" }`}>
                <button className="inline-flex rounded bg-gray-300 py-2" onClick={toggle}>
                <svg className="fill-current h-4 w-4 ml-2 mr-3" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2 s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2 S29.104,22,28,22z"/>
                  </svg>
                </button>
              </div>

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

     {/* 이 부분은 나중에 모달로 바꿔야 하는 부분 (nextjs dynamic route, backdrop window 관련해서 확인 필요) */}
      <div className={`w-fit ${ path === '/' ? ( showMenu ? "absolute block" : "hidden"): ( showMenu ? "absolute block" : "hidden") }`}>
      <aside className="p-2 m-2 break-all bg-gray-300" aria-label="Sidebar">
        <div className="h-full pt-4 px-3 pb-4 bg-gray-200 dark:bg-[#0d1117]">
          
          <Link href='/' onClick={setHidden}>
            <h3 className="p-2 text-left text-black dark:text-white"> Home </h3>
          </Link>

          <hr className="h-px p-2 my-3 bg-gray-200 border-0 dark:bg-gray-700"/>

          {
            url_data.content.length > 0 && url_data.content.map((item)=>{
              return(
                <div key={item.link_url}>
                  <Link href={item.link_url} onClick={setHidden}>
                    <h3 className="p-2 text-sm text-black hover:underline hover:cursor-pointer dark:text-white">
                      {item.name}
                    </h3>
                  </Link>
                </div>
              )
            })
          }

        </div>

        <div className="h-96 pt-4 px-3 pb-4 bg-gray-400 dark:bg-[#0d1117]">
          <h3 className="p-2 text-left text-black dark:text-white"> AD </h3>
        </div>

      </aside>
    </div>      
      </>
  );
};

export default Navbar;
