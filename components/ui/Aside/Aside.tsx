const Aside = () => {

  return (
    <aside className="p-2 m-2 break-all bg-gray-300" aria-label="Sidebar">
      <div className="h-full pt-4 px-3 pb-4 bg-gray-200 dark:bg-[#0d1117]">
        
        <h3 className="p-2 text-left text-black dark:text-white"> Home </h3>

        <hr className="h-px p-2 my-3 bg-gray-200 border-0 dark:bg-gray-700"/>
      
        <h3 className="p-2 text-sm text-black hover:underline hover:cursor-pointer dark:text-white">Question</h3>
        <h3 className="p-2 text-sm text-black hover:underline hover:cursor-pointer dark:text-white">Tags</h3>
        <h3 className="p-2 text-sm text-black hover:underline hover:cursor-pointer dark:text-white">Users</h3>
      </div>

      <div className="h-96 pt-4 px-3 pb-4 bg-gray-400 dark:bg-[#0d1117]">
        <h3 className="p-2 text-left text-black dark:text-white"> AD </h3>
      </div>

    </aside>
  );
};

export default Aside;
