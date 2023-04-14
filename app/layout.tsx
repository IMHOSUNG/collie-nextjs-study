import { useEffect, useState } from 'react';
import React from 'react';
import { AppProps } from 'next/app';
import { Html, Head} from 'next/document';
import NavBar from '@/components/ui/Navbar';
import StaticAsideBar from '@/components/ui/StaticAsideBar';
import News from '@/components/ui/News'
import 'styles/main.css';
import 'styles/chrome-bug.css';
import { getAsideContentList } from '@/lib/Aside';
import { usePathname } from 'next/navigation';

// import Layout from '@/components/Layout';

// 목표 : 레이아웃 처리
// 세부 기능 : 레이아웃 반응형 처리 여기서 모두 관리
// 

// flex-none을 하면 고정 (flex가 먹혀있는 상태에선 미묘하게 크기가 변함) - 23.04.13


const RootLayout = async({children}:{children:React.ReactElement}) => {

    const aside = await getAsideContentList()  
    
    return (
      <html lang="en">
        <head>
            <title>Xops Board</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </head>
        <body className="overflow-x-hidden bg-white h-max dark:bg-gray-900 overflow-y-contain">
            <header className="sticky top-0 z-30 w-full">
              <NavBar></NavBar>
              <div className="w-fit">
               <StaticAsideBar url_data={aside}/>
              </div>
            </header>

            <div className='relative hidden h-40 bg-gray-800 lg:block'>
              image
            </div>
            
            <div className='flex flex-row justify-center mx-auto bg-blue-100 flex-nowrap max-w-7xl '>

              <div className="basis-full">
                {children}
              </div>
            </div>
                
        </body>
      </html>
    );
}


export default RootLayout

