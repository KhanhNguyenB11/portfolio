"use client"
import React from 'react'
import { motion } from 'framer-motion'
function PortfolioPage() {
  return (
    <motion.div className="h-full w-full"initial={{y: "-200vh"}} animate={{y: "0%"}} transition={{duration: 1}}>
    <div>PortfolioPage</div>
    </motion.div>
    
  )
}

export default PortfolioPage