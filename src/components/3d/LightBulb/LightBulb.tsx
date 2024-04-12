import type { VariableFC } from '@xenopomp/advanced-types';

import type { LightBulbProps } from './LightBulb.props';

const LightBulb: VariableFC<'mesh', LightBulbProps> = ({ ...props }) => {
  return (
    <mesh {...props}>
      <pointLight castShadow />
    </mesh>
  );
};

export default LightBulb;
