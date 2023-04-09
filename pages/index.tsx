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

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  const content_list = await getActiveProductsWithPrices();
  
  return {
    props: {
      content_list
    },
  };
}

export default function Home({ content_list }: Props) {
  
  return <ContentListComponent content_list={content_list} />;
}