import cn from 'classnames';
import { type Metadata } from 'next';
import { Suspense } from 'react';

import Scene from '@/src/components/3d/Scene';
import { generateOpenGraph, generateStaticMetadata } from '@/src/utils/seo';

import styles from './main-page.module.scss';

export const metadata: Metadata = generateStaticMetadata({
  openGraph: generateOpenGraph({
    title: 'Куб Глеба',
  }),
});

export default function Home() {
  return (
    <main className={cn(styles.mainPage)}>
      <Suspense
        fallback={
          <div
            aria-hidden
            className={cn('fixed w-screen h-dvh flex-center')}
          >
            Loading...
          </div>
        }
      >
        <Scene />
      </Suspense>
    </main>
  );
}
