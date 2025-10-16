import {BallCanvas} from './canvas';
import { technologies } from '../constants';
import { useInView } from 'react-intersection-observer';


const Tech = () => {
  const { ref, inView } = useInView({ threshold: 0.5 });

  return (
    <section ref={ref} className='w-full h-auto'>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            {inView && <BallCanvas icon={technology.icon} />}
          </div>
        ))}
      </div>
    </section>
  );

}

export default Tech