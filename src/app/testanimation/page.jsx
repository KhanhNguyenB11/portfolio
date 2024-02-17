"use client"
import React from 'react'
import { motion } from 'framer-motion'
function TestPage() {
    const variants = {
        variant1:{
            
        }
    }
  return (
    <div className='h-full flex justify-center items-center'>
        <motion.div className='w-96 h-96 bg bg-red-400 rounded' initial={{x:-100}} animate={{x:100}}>

        </motion.div>
    </div>
  )
}

export default TestPage