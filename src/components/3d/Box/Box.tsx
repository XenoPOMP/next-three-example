import { useFrame, useLoader } from '@react-three/fiber';
import type { VariableFC } from '@xenopomp/advanced-types';
import { useMemo, useState } from 'react';
import { Euler, TextureLoader } from 'three';

import boxTexture from '@/public/textures/img.png';

import type { BoxProps } from './Box.props';

const Box: VariableFC<'mesh', BoxProps, 'rotation'> = ({
  receiveShadow = true,
  castShadow = true,
  ...props
}) => {
  // Rotation
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [rotateZ, setRotateZ] = useState(0);
  const rotationStep = useMemo(() => 0.01, []);

  // Animation
  useFrame(() => {
    setRotateX(prev => (prev += rotationStep));
    setRotateY(prev => (prev += rotationStep));
    setRotateZ(prev => (prev += rotationStep));
  });

  // Size of box
  const size = 3;

  const texture = useLoader(TextureLoader, boxTexture.src);

  return (
    <mesh
      receiveShadow={receiveShadow}
      castShadow={castShadow}
      rotation={new Euler(rotateX, rotateY, rotateZ)}
      {...props}
    >
      <boxGeometry args={[size, size, size]} />

      <meshPhysicalMaterial map={texture} />
    </mesh>
  );
};

export default Box;
