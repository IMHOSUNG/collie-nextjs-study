import { useRouter } from "next/router"

const Page = async ({ params }: { params: { question_uuid: string } }) => {

    return (
        <div className="">
            Question {params.question_uuid}
        </div>
    )

}

export default Page