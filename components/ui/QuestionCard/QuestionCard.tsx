import { QuestionContent } from "@/types";
import Link from "next/link";

const QuestionCard = ({ data }: { data: QuestionContent }) => {

  return (
    <>
      <div className="m-2 border border-gray-900 rounded-l">
        <div className="flex items-center gap-3 p-2 m-2">
          <div data-popover id="popover-user-profile" role="tooltip"
            className="absolute z-10 invisible inline-block w-64 text-sm font-light transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 text-gray-50 dark:text-gray-50 dark:bg-gray-800 dark:border-gray-600">
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
          <h3 className="text-sm text-black dark:text-gray-50">
            <a className="text-black hover:text-blue-400" href="">vikaskumarsingh20</a>
            &nbsp; starred 4 repositories · last month
          </h3>
        </div>

        <div className="m-2 p-4 rounded border border-gray-700 bg-gray-50 dark:bg-[#0d1117]">
          <div className="flex items-center justify-between">
            <a className="font-bold text-black hover:text-blue-400" href={"/question/" + data.question_uuid}>vikaskumarsingh20/Sudoku-Solver</a>
          </div>
          <p className="text-sm text-black">This is sudoku solver project, written wholly in C++, which solve,
            validate and Sudoku Puzzles!</p>
          <div className="flex items-center gap-5 mt-3">
            <p className="text-sm text-black">🔴 C++</p>
            <a href="#" className="text-sm text-black">⭐ 2</a>
            <p className="text-sm text-black">Updated Feb 9</p>
          </div>
        </div>

      </div>
    </>
  );
};

export default QuestionCard;
