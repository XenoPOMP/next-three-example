'use client';

import type { VariableFC } from '@xenopomp/advanced-types';

import type { LightProps } from './Light.props';

const Light: VariableFC<'pointLight', LightProps, 'ref'> = ({
  children,
  position = [0, 4, 0],
  castShadow = true,
  color = '#fff',
  intensity = 1,
  ...props
}) => {
  return (
    <>
      <pointLight
        position={position}
        castShadow={castShadow}
        color={color}
        intensity={intensity}
        {...props}
      >
        {children}
      </pointLight>
    </>
  );
};

export default Light;
