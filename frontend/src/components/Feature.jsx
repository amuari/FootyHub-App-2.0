/* eslint-disable react/prop-types */
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

import one from '../img/f1.jpg'

export const Feature = () => {
  return (
    <div className='bg-white'>
      <TextParallaxContent
        imgUrl={one}
        subheading='Collaborate'
        heading='Shape your Future with us.'
      >
        <ExampleContent
          heading='Shape your future with us'
          text="Don't just dream about a successful football career—make it happen. By joining our platform, you're taking the first step towards being seen by top scouts and coaches, unlocking pathways to professional leagues, and making a name for yourself in the football world. Passion, talent, and opportunity converge here, creating an environment where every player's potential is recognized and nurtured."
        />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl='https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        subheading='Quality'
        heading='Never compromise.'
      >
        <ExampleContent
          heading='Never compromise.'
          text="Your journey to football greatness starts here. Sign up today and be part of a community that celebrates talent, fosters connections, and drives success. Together, we'll take your football career to new heights."
        />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl='https://images.unsplash.com/photo-1504610926078-a1611febcad3?q=80&w=2416&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        subheading='Growth'
        heading='Get ready for the best.'
      >
        <ExampleContent
          heading='Get ready for the best'
          text=' Our community is designed to support your growth, providing you with resources and connections that can transform your aspirations into reality'
        />
      </TextParallaxContent>
    </div>
  )
}

const IMG_PADDING = 12

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className='relative h-[150vh]'>
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  )
}

// eslint-disable-next-line react/prop-types
const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['end end', 'end start'],
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className='sticky z-0 overflow-hidden rounded-3xl'
    >
      <motion.div
        className='absolute inset-0 bg-neutral-950/70'
        style={{
          opacity,
        }}
      />
    </motion.div>
  )
}

// eslint-disable-next-line react/prop-types
const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [250, -250])
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0])

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className='absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white'
    >
      <p className='mb-2 text-primary text-center text-xl md:mb-4 md:text-3xl'>
        {subheading}
      </p>
      <p className='text-center text-accent text-4xl font-bold md:text-7xl'>
        {heading}
      </p>
    </motion.div>
  )
}

const ExampleContent = ({ heading, text }) => (
  <div className='mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12 bg-secondary shadow-lg mb-14 text-text '>
    <h2 className='col-span-1 text-3xl font-bold md:col-span-4'>{heading}</h2>
    <div className='col-span-1 md:col-span-8'>
      <p className='mb-4 text-xl text-neutral-600 md:text-2xl'>{text}</p>
      {/* <p className='mb-8 text-xl text-neutral-600 md:text-2xl'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        reiciendis blanditiis aliquam aut fugit sint.
      </p>
      <button className='w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit'>
        Learn more <FiArrowUpRight className='inline' />
      </button> */}
    </div>
  </div>
)
export default Feature
