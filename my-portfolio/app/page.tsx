"use client"
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import {motion} from "framer-motion"
import LeftSide from '@/components/LeftSide'
import RightSide from '@/components/RightSide'
import Hero from '@/components/Hero'
import About from '@/components/About'
import EducationalBackground from "../components/EducationalBackground"
import Projects from '@/components/Projects'
import Archive from '@/components/Archive'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="w-full h-screen font-bodyFont bg-bodyColor text-textLight  overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-textDark/20 scrollbar-thumb-textDark/60">
      <Navbar />
    <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
    <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0"
          >
            <LeftSide/>
          </motion.div>

          <div className="h-[88vh] mx-auto p-4">
           <Hero/>
           <About/>
           <EducationalBackground />
           <Projects />
           <Archive />
           <Contact />
           <Footer />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0"
          >
            <RightSide />
          </motion.div>

    </div>
    </main>
  )
}
