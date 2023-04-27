import Link from 'next/link';

import Logo from '@/components/icons/Logo';
import GitHub from '@/components/icons/GitHub';

import s from './Footer.module.css';

export default function Footer() {
  return (
    <footer className="lg:col-span-2 sm:w-96 lg:w-auto mt-10">
      <div className="flex items-center gap-1">
        <svg className="w-3 h-3 bg-white rounded-full octicon octicon-light-bulb color-fg-muted" height="16" viewBox="0 0 16 16"
          version="1.1" width="16" data-view-component="true"
        >
          <path fillRule="evenodd"
            d="M8 1.5c-2.363 0-4 1.69-4 3.75 0 .984.424 1.625.984 2.304l.214.253c.223.264.47.556.673.848.284.411.537.896.621 1.49a.75.75 0 01-1.484.211c-.04-.282-.163-.547-.37-.847a8.695 8.695 0 00-.542-.68c-.084-.1-.173-.205-.268-.32C3.201 7.75 2.5 6.766 2.5 5.25 2.5 2.31 4.863 0 8 0s5.5 2.31 5.5 5.25c0 1.516-.701 2.5-1.328 3.259-.095.115-.184.22-.268.319-.207.245-.383.453-.541.681-.208.3-.33.565-.37.847a.75.75 0 01-1.485-.212c.084-.593.337-1.078.621-1.489.203-.292.45-.584.673-.848.075-.088.147-.173.213-.253.561-.679.985-1.32.985-2.304 0-2.06-1.637-3.75-4-3.75zM6 15.25a.75.75 0 01.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75zM5.75 12a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5z">
          </path>
        </svg>
        <p className="text-white text-[12px] text-gray-50">ProTip! The feed shows you events from people you follow
          and
          repositories you watch or star.</p>
      </div>
      <div className="flex items-center gap-1">
        <svg className="w-3 h-3 bg-white rounded-full octicon octicon-rss mr-1" height="16" viewBox="0 0 16 16"
          version="1.1" width="16" data-view-component="true">
          <path fillRule="evenodd"
            d="M2.002 2.725a.75.75 0 01.797-.699C8.79 2.42 13.58 7.21 13.974 13.201a.75.75 0 11-1.497.098 10.502 10.502 0 00-9.776-9.776.75.75 0 01-.7-.798zM2 13a1 1 0 112 0 1 1 0 01-2 0zm.84-5.95a.75.75 0 00-.179 1.489c2.509.3 4.5 2.291 4.8 4.8a.75.75 0 101.49-.178A7.003 7.003 0 002.838 7.05z">
          </path>
        </svg>
        <a href="#" className="text-white text-[12px] text-gray-50 hover:text-blue-400">Subscribe to your news
          feed</a>
      </div>


      <div className="mt-10 grid justify-between grid-cols-3">
        <ul className="text-gray-50 text-[12px] flex flex-col">
          <li className=""><a href="#" className="hover:text-blue-400 hover:border-b hover:border-blue-400"> Blog</a></li>
          <li className=""><a href="#" className="hover:text-blue-400 hover:border-b hover:border-blue-400"> About</a>
          </li>
          <li className=""><a href="#" className="hover:text-blue-400 hover:border-b hover:border-blue-400"> Shop</a></li>
          <li className=""><a href="#" className="hover:text-blue-400 hover:border-b hover:border-blue-400"> Contact
            Github</a></li>
          <li className=""><a href="#" className="hover:text-blue-400 hover:border-b hover:border-blue-400"> Pricing</a>
          </li>
        </ul>
        <ul className="text-gray-50 text-[12px] flex flex-col">
          <li className=""><a href="#" className="hover:text-blue-400 hover:border-b hover:border-blue-400"> API</a></li>
          <li className=""><a href="#" className="hover:text-blue-400 hover:border-b hover:border-blue-400"> Training</a>
          </li>
          <li className=""><a href="#" className="hover:text-blue-400 hover:border-b hover:border-blue-400"> Status</a>
          </li>
          <li className=""><a href="#" className="hover:text-blue-400 hover:border-b hover:border-blue-400"> Security</a>
          </li>
        </ul>
        <ul className="text-gray-50 text-[12px] flex flex-col">
          <li className=""><a href="#" className="hover:text-blue-400 hover:border-b hover:border-blue-400"> Terms</a>
          </li>
          <li className=""><a href="#" className="hover:text-blue-400 hover:border-b hover:border-blue-400"> Privacy</a>
          </li>
          <li className=""><a href="#" className="hover:text-blue-400 hover:border-b hover:border-blue-400"> Docs</a></li>
        </ul>
      </div>

    </footer>
  );
}
