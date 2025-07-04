"use client"

import React from 'react';
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion';
import { SparklesIcon } from '@heroicons/react/16/solid';
import Image from 'next/image';

const HeroContent: React.FC = () => {
    return (
        <motion.div
  id="aboutme"
  initial="Hidden"
  animate="visible"
  className='flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]'
>
      <motion.div
      initial="Hidden"
      animate="visible"
      className='flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]'
      >
        <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
            <motion.div
            variants={slideInFromTop}

            className='Welcome-box py-1 px-2 border border-[#7042f88b] opacity-[0.9] inline-flex items-center rounded-full'>
                < SparklesIcon className ='text-[#b49bff] mr-1 h-5 w-5' />
                <h1 className='Welcome-text text-[13px] text-white'>FullStack Developer Portfolio</h1>

            </motion.div>
            <motion.div
                variants={slideInFromLeft(0.5)}
                className='flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto'
                >
                    <span>
                    Providing
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'> the best </span>
                    Project experience</span>
            </motion.div>
            <motion.p 
            variants={slideInFromLeft(0.8)}
            className='text-lg text-gray-400 my-5 max-w-[600px]'>
                I&apos;m a Full stack software engineer with experience in website frontend and backend development and currently venturing into web3 tech.

            </motion.p>
           

        </div>
        <motion.div
        variants={slideInFromRight(0.8)}
        className='w-full h-full flex justify-center items-center'
        >
            <Image 
            src="/mainIconsdark.svg"
            alt="work icons"
            height={650}
            width={650}
            />
        </motion.div>

      </motion.div>
      </motion.div>
    );
};

export default HeroContent;