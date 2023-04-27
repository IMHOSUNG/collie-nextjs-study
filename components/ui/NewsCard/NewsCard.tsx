const NewsCard = () => {
    return (
        <>
            <div className="mt-5">
                <div className="p-4 rounded bg-gray-50 h-auto dark:bg-transparent">
                    <div className="flex justify-between items-center">
                        <div className="flex gap-2">
                            <img className="w-8 h-8 rounded-full hover:cursor-pointer" src="https://avatars.githubusercontent.com/u/92667215?s=120&v=4" alt="user photo" />
                            <a className="text-black font-bold sm:text-[12px] lg:text-sm hover:underline" href="#">shubh73 / devfolio</a>
                        </div>
                        <button className="hover:border-white text-black bg-[#21262d] p-1 border border-gray-600 rounded-lg">⭐</button>
                    </div>
                    <p className="sm:text-[12px] lg:text-sm text-black"> An eye-catching developer Portfolio, Built on NextJS, GSAP,
                        Tailwind and React</p>
                    <div className="mt-3 flex items-center gap-10">
                        <a href="#" className="text-sm text-black">⭐ 72</a>
                        <p className="text-sm text-black">🟡 Javascript</p>
                    </div>
                </div>
            </div>
            <hr className="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700" />
        </>
    )
}

export default NewsCard