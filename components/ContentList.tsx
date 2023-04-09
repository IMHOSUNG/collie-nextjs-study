import { useState } from 'react';
import { useRouter } from 'next/router';
import cn from 'classnames';

import Button from '@/components/ui/Button';
import { postData } from '@/utils/helpers';

import { ContentList } from 'types';
import ContentCard from './ui/ContentCard/ContentCard';

interface Props {
  content_list: ContentList;
}

type BillingInterval = 'year' | 'month';

// const handleCheckout = async (price: Price) => {
//   setPriceIdLoading(price.id);
//   if (!user) {
//     return router.push('/signin');
//   }
//   if (subscription) {
//     return router.push('/account');
//   }

//   try {
//     const { sessionId } = await postData({
//       url: '/api/create-checkout-session',
//       data: { price }
//     });

//     const stripe = await getStripe();
//     stripe?.redirectToCheckout({ sessionId });
//   } catch (error) {
//     return alert((error as Error)?.message);
//   } finally {
//     setPriceIdLoading(undefined);
//   }
// };

export default function ContentListComponent ({ content_list }: Props) {
  return (
    <section className="bg-white dark:bg-slate-800">
      <div className="px-4 py-8 mx-auto sm:py-24 sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-col sm:align-center">
          <h1 className="text-4xl font-extrabold text-transparent text-zinc-900 sm:text-center sm:text-6xl">
            XopsDir
          </h1>
          <p className="max-w-2xl m-auto mt-5 text-xl text-zinc-900 sm:text-center sm:text-2xl break-keep">
            질문과 답변을 모아놓는 백과사전
          </p>
        </div>
        
        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-1 sm:gap-6 lg:max-w-1xl lg:mx-auto xl:max-w-7xl xl:mx-auto xl:grid-cols-1">
          <ContentCard/>
        </div>
        
        <div>
          <p className="mt-24 text-xs uppercase text-zinc-400 text-center font-bold tracking-[0.3em]">
          </p>
          <div className="flex flex-col items-center my-12 space-y-4 sm:mt-8 sm:space-y-0 md:mx-auto md:max-w-2xl sm:grid sm:gap-6 sm:grid-cols-5">
          </div>
        </div>
      </div>
    </section>
  );
}
// </div>
// <div className="xl:max-w-md xl:mx-auto">
//    Test
// </div>
// <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-1 sm:gap-6 lg:max-w-1xl lg:mx-auto xl:max-w-7xl xl:mx-auto xl:grid-cols-1">
//   {content_list.content_list.map((content) => {
//    return (
//      <div
//        key={content.uuid}
//        className={cn(
//          'rounded-lg shadow-sm divide-y divide-zinc-600 bg-zinc-200',
//          {
//            'border border-pink-500': content.author === 'test'
//          }
//        )}
//      >
//        <div className="">
//          Test
//        </div>


//      </div>
//    );
//  })}

// {/* <div className="p-6">
//   <h2 className="text-2xl font-semibold leading-6 text-white">
//     {content.title}
//   </h2>
//   <p className="mt-4 text-zinc-300">{content.author}</p>
//   <p className="mt-8">
//     <span className="text-5xl font-extrabold text-zinc-100">
//       {(content.like_count.toString())}
//     </span>
//     <span className="text-base font-medium text-zinc-100">
//       /{content.author}
//     </span>
//   </p>
// </div> */}
