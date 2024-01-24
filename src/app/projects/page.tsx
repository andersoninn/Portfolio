import ExperienceIcon from '@/assets/image/footer/experienceIcon.svg';
import SatisfiedIcon from '@/assets/image/footer/satisfiedIcon.svg';
import CompleteProjectsIcon from '@/assets/image/footer/completeProjectsIcon.svg';
import Image from 'next/image';

import { FaRegEye } from 'react-icons/fa';
import { IoCodeSlash } from 'react-icons/io5';
export default function Projects() {
   return (
      <section
         className="bg-gradient-to-t from-white from-0% via-white via-90% to-gray-200 to-100%
          w-full max-h-full min-h-screen pb-20 py-16"
         id="projects"
      >
         <section className="container m-auto max-w-[1180px] px-24">
            <h2 className="text-brand-blue100 font-bold">Projects</h2>
            <h1 className="text-brand-blueTitle text-4xl font-black">
               Creative Soluctions
            </h1>

            <section className="container m-auto flex gap-12 pt-6">
               <section className="p-5 w-full bg-brand-gray100 rounded-lg flex flex-col gap-2">
                  <article className="flex gap-4">
                     <div className="bg-gradient-to-t from-blue-400 to-emerald-400 flex-1 w-[163px] h-[182px] flex gap-6 justify-center items-end rounded-lg group/card1 overflow-hidden">
                        <section className="bg-gray-400/40 w-8 h-8 rounded-lg flex items-center justify-center mb-3 translate-y-12 group-hover/card1:translate-y-0 transition-transform duration-200 ease-in-out hover:bg-gray-300/30">
                           <FaRegEye className="text-gray-200 w-5 h-5" />
                        </section>
                        <section className="bg-gray-400/40 w-8 h-8 rounded-lg flex items-center justify-center mb-3 translate-y-12 group-hover/card1:translate-y-0 transition-transform duration-200 ease-in-out hover:bg-gray-300/30">
                           <IoCodeSlash className="text-gray-200 w-5 h-5" />
                        </section>
                     </div>
                     <div className="bg-gradient-to-t from-blue-400 to-emerald-400 flex-1 w-[163px] h-[182px] flex gap-6 justify-center items-end rounded-lg group/card2 overflow-hidden">
                        <section className="bg-gray-400/40 w-8 h-8 rounded-lg flex items-center justify-center mb-3 translate-y-12 group-hover/card2:translate-y-0 transition-transform duration-200 ease-in-out  hover:bg-gray-300/30">
                           <FaRegEye className="text-gray-200 w-5 h-5" />
                        </section>
                        <section className="bg-gray-400/40 w-8 h-8 rounded-lg flex items-center justify-center mb-3 translate-y-12 group-hover/card2:translate-y-0 transition-transform duration-200 ease-in-out  hover:bg-gray-300/30">
                           <IoCodeSlash className="text-gray-200 w-5 h-5" />
                        </section>
                     </div>
                  </article>
                  <article className="text-center">
                     <h2 className="text-brand-blueTitle font-bold text-xl py-2">
                        Relevant and Real Projects <br />
                        NextJS & responsive coding
                     </h2>
                     <p className="text-balance">
                        Portfolio showcasing web projects using Next.js and
                        responsive coding. Highlights technical skills and
                        commitment to delivering practical solutions for
                        real-world challenges, ensuring engaging and innovative
                        digital experiences.
                     </p>
                  </article>
                  <aside className="flex justify-end">
                     <p className="text-brand-blueTitle font-bold text-xs cursor-pointer hover:underline underline-offset-2">
                        {' '}
                        Visit all projects
                     </p>
                  </aside>
               </section>

               <section className="p-5 w-full bg-brand-gray100 rounded-lg flex flex-col gap-2">
                  <article className="flex gap-4">
                     <div className="bg-gradient-to-t from-blue-400 to-emerald-400 flex-1 w-[163px] h-[182px] flex gap-6 justify-center items-end rounded-lg group/card3 overflow-hidden">
                        <section className="bg-gray-400/40 w-8 h-8 rounded-lg flex items-center justify-center mb-3 translate-y-12 group-hover/card3:translate-y-0 transition-transform duration-200 ease-in-out hover:bg-gray-300/30">
                           <FaRegEye className="text-gray-200 w-5 h-5" />
                        </section>
                        <section className="bg-gray-400/40 w-8 h-8 rounded-lg flex items-center justify-center mb-3 translate-y-12 group-hover/card3:translate-y-0 transition-transform duration-200 ease-in-out hover:bg-gray-300/30">
                           <IoCodeSlash className="text-gray-200 w-5 h-5" />
                        </section>
                     </div>
                     <div className="bg-gradient-to-t from-blue-400 to-emerald-400 flex-1 w-[163px] h-[182px] flex gap-6 justify-center items-end rounded-lg group/card4 overflow-hidden">
                        <section className="bg-gray-400/40 w-8 h-8 rounded-lg flex items-center justify-center mb-3 translate-y-12 group-hover/card4:translate-y-0 transition-transform duration-200 ease-in-out hover:bg-gray-300/30">
                           <FaRegEye className="text-gray-200 w-5 h-5" />
                        </section>
                        <section className="bg-gray-400/40 w-8 h-8 rounded-lg flex items-center justify-center mb-3 translate-y-12 group-hover/card4:translate-y-0 transition-transform duration-200 ease-in-out hover:bg-gray-300/30">
                           <IoCodeSlash className="text-gray-200 w-5 h-5" />
                        </section>
                     </div>
                  </article>
                  <article className="text-center">
                     <h2 className="text-brand-blueTitle font-bold text-xl py-2">
                        Study Projects <br />
                        Full-Stack coding
                     </h2>
                     <p className="text-balance">
                        Study Projects emphasizing Full-Stack Coding.
                        Demonstrates expertise in front-end and back-end
                        development. Explore my portfolio for diverse,
                        well-executed coding projects, showcasing technical
                        skills and practical solutions for real-world
                        challenges.
                     </p>
                  </article>
                  <aside className="flex justify-end">
                     <p className="text-brand-blueTitle font-bold text-xs cursor-pointer hover:underline underline-offset-2">
                        {' '}
                        Visit all projects
                     </p>
                  </aside>
               </section>
            </section>

            {/* FOOTER */}
            <aside className="mt-8 flex justify-around">
               <div className="flex gap-2 items-start">
                  <Image src={ExperienceIcon} width={48} alt="" />
                  <div>
                     <p className="text-brand-blueTitle font-bold text-2xl">
                        +1
                     </p>
                     <p className="text-xs font-bold">
                        EXPERIENCE AS
                        <br />A FREELANCER
                     </p>
                  </div>
               </div>
               <div className="flex gap-2 items-start">
                  <Image src={SatisfiedIcon} width={42} alt="" />
                  <div>
                     <p className="text-brand-blueTitle font-bold text-2xl">
                        +10
                     </p>
                     <p className="text-xs font-bold">
                        SATISFIED
                        <br />
                        CUSTOMERS
                     </p>
                  </div>
               </div>
               <div className="flex gap-2 items-start">
                  <Image src={CompleteProjectsIcon} width={40} alt="" />
                  <div>
                     <p className="text-brand-blueTitle font-bold text-2xl">
                        +30
                     </p>
                     <p className="text-xs font-bold">
                        COMPLETED
                        <br />
                        PROJECTS
                     </p>
                  </div>
               </div>
            </aside>
         </section>
      </section>
   );
}
