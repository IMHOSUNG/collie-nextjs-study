import { useRouter } from 'next/router';
const Aside = () => {
  const router = useRouter();

  return (
    <aside id="logo-sidebar"
    className="overflow-auto fixed top-0 left-0 z-40 w-[350px] h-screen pt-20 transition-transform -translate-x-full bg-black border-r border-gray-200 md:translate-x-0 dark:bg-black dark:border-black"
    aria-label="Sidebar">
    <div className="h-full px-3 pb-4 bg-white dark:bg-[#0d1117]">
      <div className="flex items-center gap-3 p-2">
        <img className="w-5 h-5 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo"/>
        <h3 className="text-black dark:text-white">yogesh-hack🔻</h3>
      </div>
      <hr className="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700"/>
      <div className="flex justify-between items-center">
        <p className="text-black dark:text-white ">Top Repository</p>
        <button type="submit" className="text-white bg-[#238636] hover:bg-[#2c9b41] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm w-full sm:w-auto px-4 py-1 text-center">New</button>
      </div>
      <div className="p-3">
        <input type="text" className="bg-black border dark:border-gray-600 text-gray-50 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-64 p-1 mx-auto dark:focus:border-white" placeholder="Find a repository..."/>
          </div>

        <div className="flex items-center gap-3 p-2">
          <img className="w-3 h-3 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo"/>
          <h3 className="hover:underline hover:cursor-pointer text-black text-sm dark:text-white">
            yogesh-hack/yogesh-hack</h3>
        </div>
        <div className="flex items-center gap-3 p-2">
          <img className="w-3 h-3 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo"/>
          <h3 className="hover:underline hover:cursor-pointer text-black text-sm dark:text-white">
            yogesh-hack/Frontend-Development-2023</h3>
        </div>
        <div className="flex items-center gap-3 p-2">
          <img className="w-3 h-3 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo"/>
          <h3 className="hover:underline hover:cursor-pointer text-black text-sm dark:text-white">
            yogesh-hack/python_DSA</h3>
        </div>
        <div className="flex items-center gap-3 p-2">
          <img className="w-3 h-3 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo"/>
          <h3 className="hover:underline hover:cursor-pointer text-black text-sm dark:text-white">
            yogesh-hack/MERN-javascript</h3>
        </div>
        <div className="flex items-center gap-3 p-2">
          <img className="w-3 h-3 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo"/>
          <h3 className="hover:underline hover:cursor-pointer text-black text-sm dark:text-white">
            yogesh-hack/Java-Competetive-Question</h3>
        </div>
        <div className="flex items-center gap-3 p-2">
          <img className="w-3 h-3 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo"/>
          <h3 className="hover:underline hover:cursor-pointer text-black text-sm dark:text-white">
            yogesh-hack/Web-design</h3>
        </div>
        <div className="flex items-center gap-3 p-2">
          <img className="w-3 h-3 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo"/>
          <h3 className="hover:underline hover:cursor-pointer text-black text-sm dark:text-white">
            yogesh-hack/weather-news-web-app</h3>
        </div>
        <div className="flex items-center gap-3 p-2">
          <img className="w-3 h-3 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo"/>
          <h3 className="hover:underline hover:cursor-pointer text-black text-sm dark:text-white">
            yogesh-hack/weather-news-web-app</h3>
        </div>
        <div className="flex items-center gap-3 p-2">
          <img className="w-3 h-3 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo"/>
          <h3 className="hover:underline hover:cursor-pointer text-black text-sm dark:text-white">
            yogesh-hack/CPP_programming</h3>
        </div>
        <div className="flex items-center gap-3 p-2">
          <img className="w-3 h-3 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo"/>
          <h3 className="hover:underline hover:cursor-pointer text-black text-sm dark:text-white">
            yogesh-hack/CPP_programming</h3>
        </div>
        <div className="flex items-center gap-3 p-2">
          <img className="w-3 h-3 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo"/>
          <h3 className="hover:underline hover:cursor-pointer text-black text-sm dark:text-white">
            yogesh-hack/CPP_programming</h3>
        </div>
        <div className="flex items-center gap-3 p-2">
          <img className="w-3 h-3 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo"/>
          <h3 className="hover:underline hover:cursor-pointer text-black text-sm dark:text-white">
            yogesh-hack/CPP_programming</h3>
        </div>
        <div className="flex items-center gap-3 p-2">
          <img className="w-3 h-3 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo"/>
          <h3 className="hover:underline hover:cursor-pointer text-black text-sm dark:text-white">
            yogesh-hack/CPP_programming</h3>
        </div>
        <div className="flex items-center gap-3 p-2">
          <img className="w-3 h-3 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo"/>
          <h3 className="hover:underline hover:cursor-pointer text-black text-sm dark:text-white">
            yogesh-hack/CPP_programming</h3>
        </div>
        <a href="" className="text-gray-50 hover:text-blue-400 text-[12px]">Show More</a>
      </div>

    </aside>
  );
};

export default Aside;
