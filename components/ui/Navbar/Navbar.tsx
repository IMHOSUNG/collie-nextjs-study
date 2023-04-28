"use client";

import Link from 'next/link';
import Logo from '@/components/icons/Logo';
import s from './Navbar.module.css';
import { usePathname } from 'next/navigation';
import React, { useRef, useState, useEffect, ReactElement, useCallback } from 'react';
import { AsideContentList } from '@/types';
import SearchBar from '../SearchBar';
import { stringify } from 'querystring';
import { useRouter } from 'next/navigation';
import { DataType } from '@/common/type';

const data = [
  { id: "1", name: "Test1", url: "url_1" },
  { id: "2", name: "Test2", url: "url_2" },
  { id: "3", name: "Test3", url: "url_3" },
  { id: "4", name: "Test4", url: "url_4" },
  { id: "5", name: "Test5", url: "url_5" },
  { id: "6", name: "Test6", url: "url_6" }
]

type inputEvent = React.ChangeEvent<HTMLInputElement>

const Navbar = ({ url_data }: { url_data: AsideContentList }) => {

  const path = usePathname()

  const [showMenu, setShowMenu] = useState(false);
  const [results, setResults] = useState<Array<DataType>>();
  const [selectedProfile, setSeletedProfile] = useState<DataType | null>(null);

  const menuRef = useRef<HTMLDivElement>(null);

  const handleShowMenuButton = () => {
    setShowMenu(!showMenu)
  }

  const handleShowMenuOutSide = useCallback((e: MouseEvent) => {
    setShowMenu(false)
  }, [])

  const handleSearchBarChange = (e: inputEvent) => {

    const { target } = e;

    if (!target.value.trim()) return setResults([]);

    // 이 쪽에서 패치 데이터?
    const filterValue = data.filter((data) =>
      data.name.toLowerCase().includes(target.value)

    );
    setResults(filterValue)
  }

  const handleSelectData = (data: DataType) => {
    setSeletedProfile(data)
    router.push("/tags/" + data.url)
  }


  useEffect(() => {
    if (showMenu) {
      document.addEventListener("click", handleShowMenuOutSide)
    }
    else {
      document.removeEventListener("click", handleShowMenuOutSide)
    }
  })


  const router = useRouter()
  return (
    <>
      <nav className="bg-gray-800 border-b border-gray-200 dark:bg-[#0d1117] dark:border-gray-700">
        <div className="flex items-center justify-center">

          <div className="flex items-center basis-10/12">

            <div className={`flex w-fit
                  ${path === '/' ? "block" : "block sm:hidden"}`}>
              <button className="inline-flex rounded bg-gray-300 py-2" onClick={(e) => handleShowMenuButton()}>
                <svg className="fill-current h-4 w-4 ml-2 mr-3" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2 s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2 S29.104,22,28,22z" />
                </svg>
              </button>
            </div>

            <a href="/" className="flex ml-2 hidden lg:block" >
              <img src="https://cdn-icons-png.flaticon.com/512/2111/2111292.png" className="w-8 h-8 mr-3" alt="FlowBite Logo" />
            </a>


            <SearchBar
              results={results}
              onChange={handleSearchBarChange}
              onSelect={(item) => handleSelectData(item)}
              value={selectedProfile as DataType}
              renderItem={(item) => <p >{item.name}</p>}></SearchBar>


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

      {showMenu && (
        <div ref={menuRef}
          className={`w-fit ${path === '/' ? (showMenu ? "absolute block" : "hidden") : (showMenu ? "absolute block" : "hidden")}`}>
          <aside className="p-2 m-2 break-all bg-gray-300" aria-label="Sidebar">
            <div className="h-full pt-4 px-3 pb-4 bg-gray-200 dark:bg-[#0d1117]">

              <Link href='/'>
                <h3 className="p-2 text-left text-black dark:text-white"> Home </h3>
              </Link>

              <hr className="h-px p-2 my-3 bg-gray-200 border-0 dark:bg-gray-700" />

              {
                url_data.content.length > 0 && url_data.content.map((item) => {
                  return (
                    <div key={item.link_url}>
                      <Link href={item.link_url}>
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
        </div>)
      }
    </>
  );
};

export default Navbar;
