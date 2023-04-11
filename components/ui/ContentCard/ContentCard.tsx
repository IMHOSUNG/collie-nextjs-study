import Link from 'next/link';
import { useRouter } from 'next/router';

import Logo from '@/components/icons/Logo';

import s from './Navbar.module.css';

const ContentCard = () => {
  const router = useRouter();

  return (
    <div className="sm:w-96 lg:w-full mt-5">
    <div className="flex items-center gap-3 p-2">
      <img data-popover-target="popover-user-profile" className="w-8 h-8 rounded-full hover:cursor-pointer" src="https://avatars.githubusercontent.com/u/92667215?s=120&v=4" alt="user photo"/>
      <div data-popover id="popover-user-profile" role="tooltip"
        className="absolute z-10 invisible inline-block w-64 text-sm font-light text-gray-50 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-50 dark:bg-gray-800 dark:border-gray-600">
        <div className="p-3">
          <div className="flex items-center justify-between mb-2">
              <div>
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Follow</button>
              </div>
          </div>
          <p className="text-base font-semibold leading-none text-gray-50 dark:text-white">
            <a href="#">vikaskumarsingh20</a>
          </p>
          <p className="mb-3 text-sm font-normal">
            <a href="#" className="hover:underline">@VikasKumarSingh</a>
          </p>
          <p className="mb-4 text-sm font-light">Open-source contributor. Building <a href="#"
              className="text-blue-600 dark:text-blue-500 hover:underline">flowbite.com</a>.</p>
          <ul className="flex text-sm font-light">
            <li className="mr-2">
              <a href="#" className="hover:underline">
                <span className="font-semibold text-gray-50 dark:text-white">799</span>
                <span>Following</span>
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                <span className="font-semibold text-gray-50 dark:text-white">3,758</span>
                <span>Followers</span>
              </a>
            </li>
          </ul>
        </div>
        <div data-popper-arrow></div>
      </div>
      <h3 className="text-black text-sm dark:text-gray-50"><a className="text-white hover:text-blue-400"
          href="">vikaskumarsingh20</a> starred 4 repositories · last month</h3>
    </div>
    <div className="p-4 rounded border border-gray-700 bg-gray-50 h-auto dark:bg-[#0d1117]">
      <div className="flex justify-between items-center">
        <a className="text-white font-bold hover:text-blue-400" href="#">vikaskumarsingh20/Sudoku-Solver</a>
        <div className="flex">
          <button className="hover:border-white text-white bg-[#21262d] p-1 pr-2 border border-gray-600 rounded-l hover:border-b hover:border-blue-400-lg">⭐ Star</button>
          <button className="hover:border-white text-white bg-[#21262d] p-1 border border-gray-600 rounded-r-lg">🔻</button>
        </div>
      </div>
      <p className="text-sm text-gray-50">This is sudoku solver project, written wholly in C++, which solve,
        validate and Sudoku Puzzles!</p>
      <div className="mt-3 flex items-center gap-5">
        <p className="text-sm text-gray-50">🔴 C++</p>
        <a href="#" className="text-sm text-gray-50">⭐ 2</a>
        <p className="text-sm text-gray-50">Updated Feb 9</p>
      </div>
    </div>
  </div>
  );
};

export default ContentCard;
