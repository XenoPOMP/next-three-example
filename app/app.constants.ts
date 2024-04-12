import ogSquareImg from '@/public/open-graph/og (200x200).png';
import ogWideImg from '@/public/open-graph/og (1200x627).png';
import type IAppConstants from '@/src/interfaces/AppConstants.interface';

export const AppConstants: IAppConstants = {
  appName: 'Глебовское',
  defaultCanonical: 'http://localhost:3000',
  sharedOpenGraphConfig: {
    images: [
      {
        url: ogSquareImg.src,
        width: 200,
        height: 200,
      },
      {
        url: ogWideImg.src,
        width: 1200,
        height: 627,
      },
    ],
    siteName: 'Глебовское',
    url: process.env.CANONICAL_URL,
  },
};
