import { useEffect, useState } from 'react';
import React from 'react';
import { AppProps } from 'next/app';
import { Html, Head} from 'next/document';
import NavBar from '../components/ui/Navbar';
import Aside from '../components/ui/Aside';
import News from '../components/ui/News'


// import Layout from '@/components/Layout';

// 목표 : 레이아웃 처리
// 세부 기능 : 레이아웃 반응형 처리 여기서 모두 관리
// 

// flex-none을 하면 고정 (flex가 먹혀있는 상태에선 미묘하게 크기가 변함) - 23.04.13


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
            <div className='hidden lg:block relative h-40 bg-gray-800'>
              image
            </div>
            
            <div className='bg-blue-100 container flex flex-nowrap flex-row mx-auto max-w-7xl justify-center h-screen '>
              <div className="hidden flex-none sticky top-1/4 h-min md:block md:w-44">
                <Aside/>
              </div>
              <div className="basis-full bg-blue-300">
                {children}
              </div>
              <div className="hidden lg:flex lg:basis-6/12 bg-blue-400">
                <News/>
              </div>
            </div>       
        </body>
      </html>
    );
  }