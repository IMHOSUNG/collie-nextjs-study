import QuestionCard from '@/components/ui/QuestionCard'
import Link from 'next/link'
import { getQuestionContent } from '@/lib/Question'
import { QuestionContent } from '@/types'

const Page = async() => {

    const data:QuestionContent = await getQuestionContent()

    return (
        <div>
            <QuestionCard data={data}></QuestionCard>            
        </div>
    )
}

export default Page