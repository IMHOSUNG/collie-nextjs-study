import { PropsWithChildren } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import ContentCard from './ui/ContentCard/ContentCard';
import Navbar from './ui/Navbar';
import Aside from './ui/Aside';
import Footer from './ui/Footer';
import Tabs from './ui/Tabs';
import News from './ui/News';
import PageNation from './ui/PageNation';


import { PageMeta } from '../types';

interface Props extends PropsWithChildren {
  meta?: PageMeta;
}

export default function Layout({ children, meta: pageMeta}: Props) {
  const router = useRouter();
  const meta = {
    title: 'Xops Board',
    description: 'Brought to you by Vercel, Stripe, and Supabase.',
    cardImage: '/og.png',
    ...pageMeta
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <link href="/favicon.ico" rel="shortcut icon" />
        <meta content={meta.description} name="description" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.cardImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@vercel" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.cardImage} />
      </Head>
      <main className="bg-black h-screen overflow-y-contain items-center justify-center" >
        <Navbar/>
        <Aside/>
          {children}
      </main>
    </>
  );
}
