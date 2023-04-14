import path from 'path'
import fsPromises  from 'fs/promises';
import {AsideContent, AsideContentList, ContentList} from '@/types'
import { readFileSync } from 'fs';

export async function getAsideContentList ():Promise<AsideContentList> {
    
    const filePath = path.join(process.cwd(), 'sample_data');
    const jsonData = await fsPromises.readFile(filePath + '/aside_content.json', 'utf8');
    return JSON.parse(jsonData)
}
