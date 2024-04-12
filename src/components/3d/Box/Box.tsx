import { useFrame } from '@react-three/fiber';
import type { VariableFC } from '@xenopomp/advanced-types';
import { useMemo, useState } from 'react';
import { Euler } from 'three';

import type { BoxProps } from './Box.props';

const Box: VariableFC<'mesh', BoxProps, 'rotation'> = ({
  receiveShadow = true,
  castShadow = true,
  ...props
}) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [rotateZ, setRotateZ] = useState(0);

  const rotationStep = useMemo(() => 0.01, []);

  useFrame(() => {
    setRotateX(prev => (prev += rotationStep));
    setRotateY(prev => (prev += rotationStep));
    setRotateZ(prev => (prev += rotationStep));
  });

  const size = 3;

  return (
    <mesh
      receiveShadow={receiveShadow}
      castShadow={castShadow}
      rotation={new Euler(rotateX, rotateY, rotateZ)}
      {...props}
    >
      <boxGeometry args={[size, size, size]} />
      <meshPhysicalMaterial color={'white'} />
    </mesh>
  );
};

export default Box;
