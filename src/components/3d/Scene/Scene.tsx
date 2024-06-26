'use client';

import { Canvas } from '@react-three/fiber';
import cn from 'classnames';
import { type FC } from 'react';

import Box from '@/src/components/3d/Box';
import Light from '@/src/components/3d/Light';

import styles from './Scene.module.scss';
import type { SceneProps } from './Scene.props';

const Scene: FC<SceneProps> = () => {
  return (
    <div
      className={cn(styles.scene)}
      aria-hidden
    >
      <Canvas
        shadows
        camera={{
          position: [-6, 7, 7],
          fov: 75,
        }}
        className={cn(styles.canvas)}
      >
        <ambientLight
          color={'white'}
          intensity={0.3}
        />

        <Light />

        <Box
          position={[0, 1, 0]}
          size={4}
        />
      </Canvas>
    </div>
  );
};

export default Scene;
