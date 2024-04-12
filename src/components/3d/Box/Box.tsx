import { useFrame, useLoader } from '@react-three/fiber';
import type { VariableFC } from '@xenopomp/advanced-types';
import { useMemo, useState } from 'react';
import { Euler, MeshPhysicalMaterial, TextureLoader } from 'three';

import gleb1Img from '@/public/textures/1.png';
import gleb2Img from '@/public/textures/2.png';
import gleb3Img from '@/public/textures/3.png';
import gleb4Img from '@/public/textures/4.png';
import gleb5Img from '@/public/textures/5.png';
import lupaglazikImg from '@/public/textures/lupaglazik.png';

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
  const rotationStep = useMemo(() => 0.011, []);

  // Animation
  useFrame(() => {
    setRotateX(prev => (prev += rotationStep));
    setRotateY(prev => (prev += rotationStep));
    setRotateZ(prev => (prev += rotationStep));
  });

  // Size of box
  const size = 3;

  const lupaglazikTexture = useLoader(TextureLoader, lupaglazikImg.src);
  const gleb1Texture = useLoader(TextureLoader, gleb1Img.src);
  const gleb2Texture = useLoader(TextureLoader, gleb2Img.src);
  const gleb3Texture = useLoader(TextureLoader, gleb3Img.src);
  const gleb4Texture = useLoader(TextureLoader, gleb4Img.src);
  const gleb5Texture = useLoader(TextureLoader, gleb5Img.src);

  return (
    <mesh
      receiveShadow={receiveShadow}
      castShadow={castShadow}
      rotation={new Euler(rotateX, rotateY, rotateZ)}
      material={[
        new MeshPhysicalMaterial({ map: lupaglazikTexture }),
        new MeshPhysicalMaterial({ map: gleb1Texture }),
        new MeshPhysicalMaterial({ map: gleb2Texture }),
        new MeshPhysicalMaterial({ map: gleb3Texture }),
        new MeshPhysicalMaterial({ map: gleb4Texture }),
        new MeshPhysicalMaterial({ map: gleb5Texture }),
      ]}
      {...props}
    >
      <boxGeometry args={[size, size, size]} />
    </mesh>
  );
};

export default Box;
