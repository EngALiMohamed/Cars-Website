'use client'

import { useContext } from "react"
import Search from "./Search"
import { SearchContext } from "../context/search"
import Image from "next/image"
import {motion,easeInOut} from 'framer-motion'
import { fadIn } from "../../../variants"

function Hero() {
  const {searchActive}=useContext(SearchContext)
  return (
    <section className="h-screen xl:h-[90vh] bg-[#b2b7c2]/10" id="home">
      <div className="container mx-auto h-full xl:pt-10">
        <div
        
         className="flex flex-col xl:flex-row justify-center items-center xl:justify-start h-full ">
          <div className="text-center xl:max-w-xl xl:text-left mt-16 xl:mt-0">
            <motion.h1
             variants={fadIn('down',0.2)}
             initial='hidden' whileInView={'show'} viewport={{once:false ,amount:0.6}}
             className="h1">
              Explore The Finest <span className="text-accent">Globl</span>{''} Offers
            </motion.h1>
            <motion.p 
             variants={fadIn('down',0.4)}
             initial='hidden' whileInView={'show'} viewport={{once:false ,amount:0.6}}
            className="descripton max-w-[550px] mx-auto xl:mx-0 mb-6 xl:mb-10">
              Find your ideal ride for any adventure with our diverse range of affordable car rentals . 
            </motion.p>
            <motion.div
             variants={fadIn('down',0.6)}
             initial='hidden' whileInView={'show'} viewport={{once:false ,amount:0.8}}
             className="flex gap-x-3 justify-center xl:justify-start">
              <button className="btn-cta">
                <Image src={'/icons/buttons/google-play.svg'}
                width={132}
                height={36} alt=""/>
              </button>
              <button className="btn-cta">
                <Image src={'/icons/buttons/app-store.svg'}
                width={132}
                height={36} alt=""/>
              </button>
            </motion.div>
          </div>
          {/* Image */}
          <motion.div
           variants={fadIn('up',0.6)}
           initial='hidden' whileInView={'show'} viewport={{once:false ,amount:0.6}}
           className="relative w-full h-full max-w-[50vh] md:max-w-[70vw]
          xl:max-w-[860px] xl:max-h-[542px] xl:absolute xl:-right-[-100px] min-[1680px]
          :right-[120px] xl:top-48px">
            <Image src={'/images/hero/car.svg'}
              fill 
              alt="" 
              style={{obgectFit :'contain'}}
              priority
              // width={650}
              // height={542}
            />
          </motion.div>
        </div>
      </div>
      { searchActive ? (
        <motion.div 
        initial={{y:'-100%'}}
        animate={{y:0}}
        transition={{ease:easeInOut}}
        className="fixed top-[80px] z-10 w-full max-w-[1920px] ">
        <Search/>
        </motion.div>
        ):(
          <div  className="xl:mt-[-40px] w-full max-w-[1300px] mx-auto">
            <motion.div
              variants={fadIn('up',0.8)}
              initial='hidden' whileInView={'show'} viewport={{once:false ,amount:0.2}} 
              >
              <Search/>
            </motion.div>
          </div>
        
      )}
    </section>
  )
}

export default Hero