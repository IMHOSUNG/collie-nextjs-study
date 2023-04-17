import path from 'path'
import fsPromises  from 'fs/promises';
import { QuestionContent} from '@/types'

export async function getQuestionContent ():Promise<QuestionContent> {
    
    const filePath = path.join(process.cwd(), 'sample_data');
    const jsonData = await fsPromises.readFile(filePath + '/question_data.json', 'utf8');
    return JSON.parse(jsonData)
}
