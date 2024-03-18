import { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import particlesConfig from '../../particles-config';
import { loadSlim } from '@tsparticles/slim';

function Particle() {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(() => particlesConfig, []);

  return <Particles id="tsparticles" options={options} />;
}

export default Particle;
