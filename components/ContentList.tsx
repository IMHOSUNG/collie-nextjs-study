import { useState } from 'react';
import { useRouter } from 'next/router';
import cn from 'classnames';

import Button from '@/components/ui/Button';
//import { postData } from '@/utils/helpers';

import { ContentList } from 'types';
import ContentCard from './ui/ContentCard/ContentCard';
import Navbar from './ui/Navbar';
import Aside from './ui/Aside';
import Footer from './ui/Footer';
import Tabs from './ui/Tabs';
import News from './ui/News';
import PageNation from './ui/PageNation';

interface Props {
  content_list: ContentList;
}

type BillingInterval = 'year' | 'month';

export default function ContentListComponent ({ content_list }: any) {
  return (
      <div className="bg-black grid grid-cols-1 xl:grid-cols-2 p-4 justify-between mt-8 md:ml-[350px]">
        <div className="lg:w-full p-4 sm:w-96 mt-14">
          <Tabs/>
          <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"/>
            <ContentCard/>
            <ContentCard/>
            <ContentCard/>
            <ContentCard/>
            <ContentCard/>
          <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"/>
          <PageNation/>
        </div>
          <News/>
          <Footer/>
      </div>  
  )
}



