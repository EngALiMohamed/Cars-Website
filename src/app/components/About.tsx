'use client'
import Image from "next/image"
import { 
  MdOutlineMapsHomeWork,
  MdOutlineBuildCircle,
  MdOutlineDirectionsCar,
 } from "react-icons/md"
 import  CountUp  from "react-countup"
 import { useInView} from "react-intersection-observer"
 import { motion } from "framer-motion"
 import { fadIn } from "../../../variants"

function About() {
  const [ref,inView]=useInView({
    threshold:0.5,
  })
  return (
    <section className="section flex items-center" 
    id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:justify-between">
          <motion.div
           variants={fadIn('up',0.2)}
           initial='hidden' whileInView={'show'} viewport={{once:false ,amount:0.6}}
           className="flex-1 mb-8 xl:mb-0">
            <Image 
            src={'/images/about/car01.png'}
            width={600} height={448} alt=""/>
          </motion.div>
          <div className="flex-1 flex items-center xl:justify-center">
            <div className="xl:max-w-[517px]">
              <motion.h2 
                 variants={fadIn('up',0.4)}
                 initial='hidden' whileInView={'show'} viewport={{once:false ,amount:0.6}}
              className="h2">Car Service Simplified.</motion.h2>
              <motion.p
                 variants={fadIn('up',0.6)}
                 initial='hidden' whileInView={'show'} viewport={{once:false ,amount:0.6}}
               className="mb-[42px] max-x-md ">
                Rent, choose, and repair with ease. Our convenient locations, 
                diverse car types, and reliable repair points ensure a seamless
                car experience.
              </motion.p>
              <motion.div 
                 variants={fadIn('up',0.8)}
                 initial='hidden' whileInView={'show'} viewport={{once:false ,amount:0.2}}
              className="flex items-center gap-x-8 mb-12">
              {/* Car & Types */}
              <div className="flex flex-col w-[100px] ">
                <MdOutlineDirectionsCar className="text-5xl text-accent mb-2"/>
                <div className="text-3xl font-black mb-2">
                  {inView ? (
                    <CountUp start={0} end={50} duration={3} delay={1} />
                  ):null}
                  +
                </div>
                <div className="text-[13px] font-semibold text-secondary ">
                  Car <br /> Types
                </div>
              </div>
              {/* Rental outlets*/}
              <div className="flex flex-col w-[100px] ">
                <MdOutlineMapsHomeWork className="text-5xl text-accent mb-2"/>
                <div className="text-3xl font-black mb-2">
                  {inView ? (
                    <CountUp start={0} end={135} duration={3} delay={1} />
                  ):null}
                </div>
                <div className="text-[13px] font-semibold text-secondary ">
                  Rental <br /> Outlets
                </div>
              </div>
              {/*Repair points*/}
              <div className="flex flex-col w-[100px] ">
                <MdOutlineBuildCircle className="text-5xl text-accent mb-2"/>
                <div className="text-3xl font-black mb-2">
                  {inView ? (
                    <CountUp start={0} end={35} duration={3} delay={1} />
                  ):null}
                </div>
                <div className="text-[13px] font-semibold text-secondary ">
                Repair <br /> Points
                </div>
              </div>
            
              </motion.div> 
              {/* Btn  */}
              <motion.button 
                 variants={fadIn('up',1)}
                 initial='hidden' whileInView={'show'} viewport={{once:false ,amount:0.4}}
              className="hidden xl:block bg-accent hover:bg-accent-hover 
              rounded-[10px] w-full h-16 uppercase font-medium text-white tracking-[2px]
              text-[13px] max-w-[184px] ">Show All Cars</motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About