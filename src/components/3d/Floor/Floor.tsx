'use client';

import type { VariableFC } from '@xenopomp/advanced-types';

import type { FloorProps } from './Floor.props';

const Floor: VariableFC<'mesh', FloorProps, 'children' | 'receiveShadow'> = ({
  ...props
}) => {
  return (
    <mesh
      receiveShadow
      {...props}
    >
      <boxGeometry args={[20, 1, 20]} />

      <meshPhysicalMaterial color='white' />
    </mesh>
  );
};

export default Floor;
