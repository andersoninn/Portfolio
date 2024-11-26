import Image from 'next/image';

import { Texts } from '@/lib/Texts';
import Slider from './Slider';

export default function About2() {
  const AboutTexts = Texts.about;
  return (
    <>
      <section className="relative bg-[#222124] -mt-10" id='about2 animate__animated animate__fadeInUp'>
        <Image src="/homePolygons.svg" alt='' width={700} height={700} className='absolute -top-[70px]'/>
        <section className=" m-auto pt-8 pb-10 max-w-[1240px] h-[800px] flex flex-col justify-center items-center">

          <Image src="/aboutMacbooks.png" alt='' width={700} height={700} className='absolute -top-[160px]' />

          <h2 className='text-white'>ABOUT</h2>

          <article className='absolute bottom-0 bg-white'>

            <Image src="/polygonFromBack.png" alt='' width={700} height={700} />
          </article>
          <article className='absolute bottom-0'>

            <Slider />
          </article>
        </section>
      </section>
    </>
  );
}
