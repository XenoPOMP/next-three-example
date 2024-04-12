import { type PropsWith } from '@xenopomp/advanced-types';
import { type FC } from 'react';

import SocialMedia from '@/src/components/layout/SocialMedia';

import type { CoreLayoutProps } from './CoreLayout.props';

/**
 * Wrapper for core layout. Provides access to fully manageable
 * page layout.
 *
 * @param children
 * @constructor
 *
 * @example
 * // Header and footer will be added
 * // automatically
 * <CoreLayout>
 *   <main>
 *     Index page
 *   </main>
 * </CoreLayout>
 */
const CoreLayout: FC<PropsWith<'children', CoreLayoutProps>> = ({
  children,
}) => {
  return (
    <>
      {children} <SocialMedia />
    </>
  );
};

export default CoreLayout;
