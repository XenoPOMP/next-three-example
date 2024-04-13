import cn from 'classnames';
import Link from 'next/link';
import { type ComponentProps, type FC, type ReactNode } from 'react';
import { SiGithub } from 'react-icons/si';

import type { SocialMediaProps } from './SocialMedia.props';

interface IMediaIconProps
  extends Pick<ComponentProps<typeof Link>, 'href' | 'aria-label'> {
  icon: ReactNode;
}

const MediaIcon: FC<IMediaIconProps> = ({
  href,
  icon,
  'aria-label': ariaLabel,
}) => {
  return (
    <Link
      href={href}
      target={'_blank'}
      aria-label={ariaLabel}
      aria-hidden={false}
      className={cn('hover:text-white')}
    >
      {icon}
    </Link>
  );
};

const SocialMedia: FC<SocialMediaProps> = () => {
  return (
    <div
      className={cn(
        'fixed bottom-[20px] left-[20px] text-white/80 z-20',
        'flex',
        '[&_svg]:transition-colors',
      )}
      aria-hidden
    >
      <MediaIcon
        href={'https://github.com/XenoPOMP/next-three-example'}
        icon={<SiGithub size={30} />}
      />
    </div>
  );
};

export default SocialMedia;
