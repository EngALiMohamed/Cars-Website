'use client'
import "swiper/css"
import "swiper/css/pagination"
import { Pagination } from "swiper/modules"
import { FaQuoteLeft } from "react-icons/fa"
import { motion } from "framer-motion"
import { fadIn } from "../../../variants"
import Image from "next/image"
import {Swiper , SwiperSlide } from "swiper/react"

const TestimonialData=[
  {
    message:'they truly exceeded my expectations and made my car retal exprience a delight',
    avatar:"/images/testimonial/avatar.png",
    name:'jane Doe',
    job:'Photographer'
  },
  {
    message:'they truly exceeded my expectations and made my car retal exprience a delight',
    avatar:"/images/testimonial/avatar.png",
    name:'jane Doe',
    job:'Photographer'
  },
  {
    message:'they truly exceeded my expectations and made my car retal exprience a delight',
    avatar:"/images/testimonial/avatar.png",
    name:'jane Doe',
    job:'Photographer'
  },
]
function TestimonialSlider() {

  return (<motion.div
    variants={fadIn('up',0.4)}
    initial='hidden' whileInView={'show'} viewport={{once:false ,amount:0.6}}
    className="container mx-auto"
  >
      <Swiper
      pagination={{
        clickable:true,
        dynamicBullets:true
      }}
      modules={[Pagination]}
      className="h-[450px] xl:h-[400px]"
      >
        {TestimonialData.map((person ,index)=>{  
          const{ message, avatar, name, job} = person
          return <SwiperSlide key={index}>
            <div className="flex flex-col justify-center items-center text-center">
              <FaQuoteLeft className="text-7xl  text-accent mb-6"/>
              <div className="text-2xl xl:text-4xl max-x-[874px] mb-12 font-medium ">
                {message}
              </div>
              <Image src={avatar}
              width={64} height={64} alt="" className="mb-4"/>
              <div className="text-lg font-medium">{name}</div>
              <div className="text-scondary">{job}</div>
            </div>
          </SwiperSlide>
        })}
      </Swiper>
    </motion.div>
  
)}

export default TestimonialSlider