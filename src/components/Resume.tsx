import Image from 'next/image';
import Figma from '@/assets/image/resume/figma.svg';
import Photoshop from '@/assets/image/resume/photoshop.svg';
import Html from '@/assets/image/resume/html5.svg';
import Css from '@/assets/image/resume/css3.svg';
import JavaScript from '@/assets/image/resume/javaScript.svg';
import ReactJS from '@/assets/image/resume/react.svg';
import Tailwind from '@/assets/image/resume/tailwind.svg';
import NextJS from '@/assets/image/resume/nextJS.svg';
import ReactNative from '@/assets/image/resume/reactNative.svg';
import JsNode from '@/assets/image/resume/nodeJS.svg';
import Express from '@/assets/image/resume/express.svg';
import MongoDB from '@/assets/image/resume/mogoDB.svg';

import EllipseRight from '@/assets/image/resume/ellipses/ellipseRight.svg';
import EllipseLeft from '@/assets/image/resume/ellipses/ellipseLeft.svg';
import EllipseCenter from '@/assets/image/resume/ellipses/ellipseCenter.svg';

export default function Resume() {
   return (
      <section
         className="bg-gradient-to-t from-gray-200 from-0% via-gray-200 via-90% to-gray-200 to-100% flex 
      m-auto relative"
      >
         <section className="w-[90%] m-auto pt-8 pb-10">
            <article className="pb-4">
               <h2 className="text-brand-blue100 font-bold">Resume</h2>
               <h1 className="text-brand-blueTitle text-4xl font-black">
                  Personal Information
               </h1>
            </article>
            {/* PERSONAL INFORMATION */}
            <section className="p-5 bg-[#e0e1e4] rounded-lg flex flex-col gap-3 shadow-md max-w-[450px]">
               <article>
                  <article className="flex items-center">
                     <p className="font-bold pr-2 text-brand-blueTitle">
                        Name:
                     </p>
                     <p>Anderson Innocencio Carvalho</p>
                  </article>
                  <article className="flex items-center">
                     <p className="font-bold pr-2 text-brand-blueTitle">
                        E-mail:
                     </p>
                     <p>andersoninnocencio17@gmail.com</p>
                  </article>
                  <article className="flex items-center">
                     <p className="font-bold pr-2 text-brand-blueTitle">
                        Phone:
                     </p>
                     <p>+351 933 864 893</p>
                  </article>
                  <article className="flex items-center">
                     <p className="font-bold pr-2 text-brand-blueTitle">
                        Languages:
                     </p>
                     <p>Portuguese, English</p>
                  </article>
                  <article className="items-start">
                     <p className="font-bold pr-2 text-brand-blueTitle ">
                        Education:
                     </p>
                     <article className="pb-2">
                        <li className="font-semibold">
                           Adolpho Bloch State Technical School
                        </li>
                        <span className="font-semibold">
                           (FEB 2009 - NOV 2011)
                        </span>
                        <p>Secondary school with technical development.</p>
                     </article>
                     <article>
                        <li className="font-semibold">
                           Progression Technical School
                        </li>
                        <span className="font-semibold">
                           (JAN 2015 - NOV 2015)
                        </span>
                        <p>Assembly and maintenance of computers.</p>
                     </article>
                  </article>
               </article>
            </section>
            <section className="pt-6 flex flex-col gap-6">
               <article>
                  <h1 className="text-brand-blueTitle text-4xl font-black relative">
                     Hard Skills
                  </h1>
                  <Image
                     src={EllipseRight}
                     width={100}
                     alt=""
                     className="absolute right-0 -mt-10"
                  />
               </article>

               {/* HARD SKILL - DESIGN */}
               <section className="p-5 bg-[#e0e1e4] rounded-lg flex flex-col gap-3 shadow-md max-w-[450px] z-10">
                  <article className="flex flex-col gap-4 items-center text-xl font-extrabold text-brand-blueTitle">
                     <h2>DESIGN</h2>

                     <h2>UX/UI DESIGN</h2>
                     <section className="flex justify-around w-full">
                        <article className="w-1/2  flex items-center">
                           <div className="w-14 h-14 rounded-lg bg-[#333333] shadow mr-2 flex items-center justify-center">
                              <Image src={Figma} width={56} alt="" />
                           </div>
                           <p>Figma</p>
                        </article>

                        <article className="w-1/2 flex items-center">
                           <div className="w-14 h-14 rounded-lg bg-[#011D36] shadow mr-2 overflow-hidden">
                              <Image src={Photoshop} width={56} alt="" />
                           </div>
                           <p>Photophop</p>
                        </article>
                     </section>
                  </article>

                  {/* 
                       
                        
                     </section> */}
               </section>

               {/* HARD SKILL - FRONT-END */}
               <span className="relative flex items-center justify-center">
                  <Image
                     src={EllipseCenter}
                     width={200}
                     alt=""
                     className="absolute"
                  />
               </span>
               <section className="p-5 bg-[#e0e1e4] rounded-lg flex flex-col gap-3 shadow-md max-w-[450px] z-10">
                  <article className="flex flex-col gap-4 justify-center items-center text-xl font-extrabold text-brand-blueTitle">
                     <h2 className="">FRONT-END</h2>
                     <section className="flex justify-between w-full ">
                        <article className="w-1/2 flex items-center">
                           <div className="w-14 h-14 rounded-lg mr-2">
                              <Image
                                 src={Html}
                                 width={56}
                                 alt=""
                                 className="drop-shadow-lg"
                              />
                           </div>
                           <p>HTML</p>
                        </article>
                        <article className="w-1/2 flex items-center">
                           <div className="w-14 h-14 rounded-lg mr-2">
                              <Image
                                 src={JavaScript}
                                 width={56}
                                 alt=""
                                 className="drop-shadow-lg"
                              />
                           </div>
                           <p>JavaScript</p>
                        </article>
                     </section>

                     <section className="flex justify-between w-full ">
                        <article className="w-1/2  flex items-center">
                           <div className="w-14 h-14 rounded-lg mr-2">
                              <Image
                                 src={Css}
                                 width={56}
                                 alt=""
                                 className="drop-shadow-lg"
                              />
                           </div>
                           <p>CSS</p>
                        </article>
                        <article className="w-1/2 flex items-center">
                           <div className="w-14 h-14 rounded-lg mr-2">
                              <Image
                                 src={ReactJS}
                                 width={56}
                                 alt=""
                                 className="drop-shadow-lg"
                              />
                           </div>
                           <p>ReactJS</p>
                        </article>
                     </section>

                     <section className="flex justify-between w-full ">
                        <article className="w-1/2  flex items-center">
                           <div className="w-14 h-14 rounded-lg mr-2">
                              <Image
                                 src={Tailwind}
                                 width={56}
                                 alt=""
                                 className="drop-shadow-lg"
                              />
                           </div>
                           <p>Tailwind</p>
                        </article>
                        <article className="w-1/2 flex items-center">
                           <div className="w-14 h-14 rounded-lg mr-2">
                              <Image
                                 src={NextJS}
                                 width={56}
                                 alt=""
                                 className="drop-shadow-lg"
                              />
                           </div>
                           <p>NextJS</p>
                        </article>
                     </section>
                  </article>
               </section>

               {/* HARD SKILL - BACK-END */}
               <span className="relative">
                  <Image
                     src={EllipseLeft}
                     width={100}
                     alt=""
                     className="absolute left-0 -ml-4 -mt-9"
                  />
               </span>
               <section className="p-5 bg-[#e0e1e4] rounded-lg flex flex-col gap-3 shadow-md max-w-[450px] z-10">
                  <article className="flex flex-col gap-4 justify-center items-center text-xl font-extrabold text-brand-blueTitle">
                     <h2>BACK-END & MOBILE</h2>
                     <p className="-mt-4">Learning...</p>
                     <section className="flex justify-center w-full ">
                        <article className="w-1/2 flex items-center">
                           <div className="w-14 h-14 rounded-lg mr-2">
                              <Image
                                 src={ReactNative}
                                 width={56}
                                 alt=""
                                 className="drop-shadow-lg"
                              />
                           </div>
                           <p>ReactNative</p>
                        </article>
                     </section>

                     <section className="flex justify-between w-full ">
                        <article className="w-1/2  flex items-center">
                           <div className="w-14 h-14 rounded-lg mr-2">
                              <Image
                                 src={JsNode}
                                 width={56}
                                 alt=""
                                 className="drop-shadow-lg"
                              />
                           </div>
                           <p>NodeJS</p>
                        </article>
                        <article className="w-1/2 flex items-center">
                           <div className="w-14 h-14 rounded-lg mr-2">
                              <Image
                                 src={Express}
                                 width={56}
                                 alt=""
                                 className="drop-shadow-lg"
                              />
                           </div>
                           <p>Express</p>
                        </article>
                     </section>

                     <section className="flex justify-center w-full ">
                        <article className="w-1/2  flex items-center">
                           <div className="w-14 h-14 rounded-lg mr-2">
                              <Image
                                 src={MongoDB}
                                 width={56}
                                 alt=""
                                 className="drop-shadow-lg"
                              />
                           </div>
                           <p>MongoDB</p>
                        </article>
                     </section>
                  </article>
               </section>
            </section>
         </section>

         <section className="w-full h-16 absolute -top-8" id="resume" />
      </section>
   );
}