'use client';

import { AsideContentList, ContentList } from "@/types";
import Link from "next/link";
import { getAsideContentList } from "@/lib/Aside";
import { useState } from "react";
import { usePathname } from "next/navigation";

const AsideBar = ({url_data }: {url_data:AsideContentList}) => {

  const path = usePathname()
  const [showMe, setShowMe] = useState(true);
    
  const toggle = () => {
    setShowMe(!showMe)
  }
  
  return (
    
      <aside className="p-2 m-2 break-all bg-gray-300" aria-label="Sidebar">
        <div className="h-full pt-4 px-3 pb-4 bg-gray-200 dark:bg-[#0d1117]">
          
          <Link href='/'>
            <h3 className="p-2 text-left text-black dark:text-white"> Home </h3>
          </Link>

          <hr className="h-px p-2 my-3 bg-gray-200 border-0 dark:bg-gray-700"/>

          {
            url_data.content.length > 0 && url_data.content.map((item)=>{
              return(
                <div key={item.link_url}>
                  <Link href={item.link_url}>
                    <h3 className="p-2 text-sm text-black hover:underline hover:cursor-pointer dark:text-white">
                      {item.name}
                    </h3>
                  </Link>
                </div>
              )
            })
          }

        </div>

        <div className="h-96 pt-4 px-3 pb-4 bg-gray-400 dark:bg-[#0d1117]">
          <h3 className="p-2 text-left text-black dark:text-white"> AD </h3>
        </div>

      </aside>

  );
};

export default AsideBar;
