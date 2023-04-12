import { useEffect, useState } from 'react';
import React from 'react';
import { AppProps } from 'next/app';
import { Html, Head} from 'next/document';
import NavBar from '../components/ui/Navbar'


// import Layout from '@/components/Layout';

import 'styles/main.css';
import 'styles/chrome-bug.css';

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en" className="">
        <head>
            <title>Xops Board</title>
        </head>
        <body className="bg-white dark:bg-gray-900 overflow-y-contain overflow-x-hidden">
            <header className="sticky top-0 z-30 w-full">
              <NavBar></NavBar>
            </header>
            <div className='hidden lg:block relative h-40 bg-red-700'>
              image
            </div>
            
            <div className='bg-blue-100 container flex flex-row mx-auto max-w-7xl justify-center'>
              <div className="hidden sticky top-20 h-min md:block md:basis-64">
                <div className="bg-blue-200 break-words mx-2 p-2">Test Test Test Test Test Test Test Test Test Test Test Test Test TestTest Test Test Test Test Test TestTest Test Test Test Test Test TestTest Test Test Test Test Test TestTest Test Test Test Test Test Test</div>
              </div>
              <div className="basis-full bg-blue-300">
                {children}
              </div>
              <div className="hidden lg:flex lg:basis-6/12 bg-blue-400">
                RightSideBar
              </div>
            </div>       
        </body>
      </html>
    );
  }