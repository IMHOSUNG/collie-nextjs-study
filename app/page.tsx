import path from 'path';
import fsPromises  from 'fs/promises';

import { GetStaticPropsResult } from 'next';

import ContentListComponent from '@/components/ContentList';
import {Content, ContentList} from 'types'

interface Props {
  content_list: ContentList;
}

const getActiveProductsWithPrices = async(): Promise< ContentList > => {
  
  const filePath = path.join(process.cwd(), 'sample_data');
  const jsonData = await fsPromises.readFile(filePath + '/sample_data.json', 'utf8');
  const objectData = JSON.parse(jsonData)
  
  return objectData
}



export default function Home({ content_list }: Props) {
  // 라우터 처리
  return (
    <>
      <div className="h-80 bg-red-100 border-2 border-black">
        Page
      </div>
      <div className="h-80 bg-red-100 border-2 border-black">
        Page 
      </div>
      <div className="h-80 bg-red-100 border-2 border-black">
        Page
      </div>
      <div className="h-80 bg-red-100 border-2 border-black">
        Page
      </div>
    </>
  );
}