import path from 'path';
import fsPromises from 'fs/promises';
import { Content, ContentList } from 'types';
import ContentCard from '../components/ui/ContentCard'


const getActiveProductsWithPrices = async (): Promise<ContentList> => {

  const filePath = path.join(process.cwd(), 'sample_data');
  const jsonData = await fsPromises.readFile(filePath + '/sample_data.json', 'utf8');
  const objectData = JSON.parse(jsonData)

  return objectData
}


export default async function Home({ }) {
  // 라우터 처리
  const data = await getActiveProductsWithPrices()

  return (
    <>
      <div className="m-2 border-2">
        <h1 className="text-center mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Better Data
          </span> Scalable AI.
        </h1>
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.
        </p>
      </div>
    </>
  );
}