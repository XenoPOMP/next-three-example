'use client';

import { Canvas } from '@react-three/fiber';
import cn from 'classnames';
import { type FC } from 'react';

import Box from '@/src/components/3d/Box';
import LightBulb from '@/src/components/3d/LightBulb';

import styles from './Scene.module.scss';
import type { SceneProps } from './Scene.props';

const Scene: FC<SceneProps> = () => {
  return (
    <div className={cn(styles.scene)}>
      <Canvas
        shadows
        camera={{
          position: [-6, 7, 7],
        }}
        className={cn(styles.canvas)}
      >
        <ambientLight
          color={'white'}
          intensity={0.3}
        />

        <LightBulb position={[0, 4, 0]} />
        <Box position={[0, 1, 0]} />
      </Canvas>
    </div>
  );
};

export default Scene;
