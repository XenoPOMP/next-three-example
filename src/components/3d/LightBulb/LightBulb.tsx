import type { VariableFC } from '@xenopomp/advanced-types';

import type { LightBulbProps } from './LightBulb.props';

const LightBulb: VariableFC<'mesh', LightBulbProps> = ({ ...props }) => {
  return (
    <mesh {...props}>
      <pointLight castShadow />
      <sphereGeometry args={[0.2, 30, 10]} />
      <meshPhongMaterial emissive={'yellow'} />
    </mesh>
  );
};

export default LightBulb;
