import type { VariableFC } from '@xenopomp/advanced-types';

import type { BoxProps } from './Box.props';

const Box: VariableFC<'mesh', BoxProps> = ({
  receiveShadow = true,
  castShadow = true,
  ...props
}) => {
  const size = 3;

  return (
    <mesh
      receiveShadow={receiveShadow}
      castShadow={castShadow}
      {...props}
    >
      <boxGeometry args={[size, size, size]} />
      <meshPhysicalMaterial color={'white'} />
    </mesh>
  );
};

export default Box;
