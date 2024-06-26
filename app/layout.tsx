import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { type ReactNode } from 'react';

import CoreLayout from '@/src/components/layout/CoreLayout/CoreLayout';
import Providers from '@/src/components/layout/Providers/Providers';
import { useEnv } from '@/src/hooks/use-env';
import { generateOpenGraph, generateStaticMetadata } from '@/src/utils/seo';

import { AppConstants } from './app.constants';
import './globals.scss';

const mainFont = Inter({ subsets: ['latin'] });

export async function generateMetadata(): Promise<Metadata> {
  const env = useEnv();
  const CANONICAL_URL =
    env.get('CANONICAL_URL') || AppConstants.defaultCanonical;

  return generateStaticMetadata({
    metadataBase: new URL(CANONICAL_URL),
    title: {
      template: `%s | ${AppConstants.appName}`,
      default: AppConstants.appName,
    },
    description: 'Бытие Глебовское совсем не простое...',
    appleWebApp: {
      title: AppConstants.appName,
      capable: false,
    },
    alternates: {
      canonical: CANONICAL_URL,
      languages: {
        // ru: CANONICAL_URL,

        // Should be changed to another one, if i18n has been implemented
        'x-default': CANONICAL_URL,
      },
    },
    openGraph: generateOpenGraph({
      title: 'Глебовское',
      description: 'Бытие Глебовское совсем не простое...',
    }),
  });
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='ru'>
      <body className={mainFont.className}>
        <Providers>
          <CoreLayout>{children}</CoreLayout>
        </Providers>
      </body>
    </html>
  );
}
