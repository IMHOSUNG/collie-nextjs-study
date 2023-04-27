import React from "react"
import News from "@/components/ui/News"
import AsideBar from "@/components/ui/AsideBar"
import { getAsideContentList } from "@/lib/Aside"

const Layout = async ({ children }: { children: React.ReactElement }) => {

    const aside = await getAsideContentList()

    return (
        <>
            <div className='flex flex-row justify-center mx-auto'>
                <div className="sticky flex-none hidden h-full top-10 md:block md:w-fit">
                    <AsideBar url_data={aside} />
                </div>
                <div className="bg-blue-300 basis-full">
                    {children}
                </div>
                <div className="hidden bg-blue-400 lg:flex lg:basis-6/12">
                    <News />
                </div>
            </div>
        </>
    )
}

export default Layout