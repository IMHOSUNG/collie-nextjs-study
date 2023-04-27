import NewsCard from "../NewsCard"

const News = () => {
  return (
    <div className="hidden lg:block m-2">
      <h2 className="text-white text-sm font-bold p-4">Latest Changes</h2>

      <ul className="m-2 relative border-l border-gray-200 dark:border-gray-700">
        <li className="mb-10 ml-4">
          <div
            className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
          </div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-50 dark:text-gray-50">11 hours ago</time>
          <p><a href="#"
            className="mb-4 text-sm font-normal text-gray-50 hover:text-blue-400 hover:underline dark:text-gray-50">Secret
            scanning changes coming to how you opt-in to alert notifications.</a></p>
        </li>
        <li className="mb-10 ml-4">
          <div
            className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
          </div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-50 dark:text-gray-50">16 hours ago</time>
          <p><a href="#"
            className="mb-4 text-sm font-normal text-gray-50 hover:text-blue-400 hover:underline dark:text-gray-50">GitHub
            Desktop 3.2 – Preview your Pull Request.</a></p>
        </li>
        <li className="mb-10 ml-4">
          <div
            className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
          </div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-50 dark:text-gray-50">yesterday</time>
          <p><a href="#"
            className="mb-4 text-sm font-normal text-gray-50 hover:text-blue-400 hover:underline dark:text-gray-50">SMS
            and TOTP can now both be registered 2FA methods.</a>
          </p>
        </li>
      </ul>
      <p><a href="#"
        className="pl-5 text-sm font-normal text-gray-50 hover:text-blue-400 hover:underline dark:text-gray-50">View
        changelogs ➡️</a>
      </p>

      <div className="m-2">
        <h2 className="text-white text-sm font-bold">Explore Repositories</h2>
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </div>

  )
}

export default News