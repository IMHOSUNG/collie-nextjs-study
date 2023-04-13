const Aside = () => {

  return (
    <aside className="bg-gray-300 break-all m-2 p-2" aria-label="Sidebar">
      <div className="h-full pt-4 px-3 pb-4 bg-gray-200 dark:bg-[#0d1117]">
        
        <h3 className="p-2 text-black text-left dark:text-white"> Home </h3>

        <hr className="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700 p-2"/>
      
        <h3 className="hover:underline hover:cursor-pointer text-black text-sm dark:text-white p-2">Question</h3>
        <h3 className="p-2 hover:underline hover:cursor-pointer text-black text-sm dark:text-white">Tags</h3>
        <h3 className="p-2 hover:underline hover:cursor-pointer text-black text-sm dark:text-white">Users</h3>
      </div>

      <div className="h-96 pt-4 px-3 pb-4 bg-gray-400 dark:bg-[#0d1117]">
        <h3 className="p-2 text-black text-left dark:text-white"> AD </h3>
      </div>

    </aside>
  );
};

export default Aside;
