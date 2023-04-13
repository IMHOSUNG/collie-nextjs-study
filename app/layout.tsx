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
      <html lang="en">
        <head>
            <title>Xops Board</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </head>
        <body className="overflow-x-hidden bg-white h-max dark:bg-gray-900 overflow-y-contain">
            <header className="sticky top-0 z-30 w-full">
              <NavBar></NavBar>
            </header>
            <div className='relative hidden h-40 bg-gray-800 lg:block'>
              image
            </div>
            
            <div className='flex flex-row justify-center mx-auto bg-blue-100 flex-nowrap max-w-7xl '>
              <div className="sticky flex-none hidden w-auto h-full top-10 md:block md:w-44">
                <Aside/>
              </div>
              <div className="bg-blue-300 basis-full">
                {children}
              </div>
              <div className="hidden bg-blue-400 lg:flex lg:basis-6/12">
                <News/>
              </div>
            </div>
                
        </body>
      </html>
    );
  }