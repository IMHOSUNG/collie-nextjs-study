import path from 'path';
import fsPromises  from 'fs/promises';
import {Content, ContentList} from 'types'
import ContentCard from '../components/ui/ContentCard'

interface Props {
  content_list: ContentList;
}

const getActiveProductsWithPrices = async(): Promise< ContentList > => {
  
  const filePath = path.join(process.cwd(), 'sample_data');
  const jsonData = await fsPromises.readFile(filePath + '/sample_data.json', 'utf8');
  const objectData = JSON.parse(jsonData)
  
  console.log(objectData)
  return objectData
}



export default async function Home({ content_list }: Props) {
  // 라우터 처리
  const data  = await getActiveProductsWithPrices()

  return (
    <>
      <div className="m-2 bg-red-100 border-2 border-black">
        <ContentCard/>
        <ContentCard/>
        <ContentCard/>
        <ContentCard/>        
        <ContentCard/>
        <ContentCard/>
        <ContentCard/>
        <ContentCard/>
        <ContentCard/>
        <ContentCard/>
        <ContentCard/>
        <ContentCard/>
      </div>
    </>
  );
}