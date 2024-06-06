import { motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'
import { FiArrowRight, FiMail, FiMapPin } from 'react-icons/fi'
import { SiGithub, SiInstagram, SiX, SiYoutube } from 'react-icons/si'

export const AboutUs = () => {
  return (
    <div className='min-h-screen bg-zinc-900 px-4 py-12 text-zinc-50'>
      <Logo />
      <motion.div
        initial='initial'
        animate='animate'
        transition={{
          staggerChildren: 0.05,
        }}
        className='mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4'
      >
        <HeaderBlock />
        <SocialsBlock />
        <AboutBlock />
        <LocationBlock />
        <EmailListBlock />
      </motion.div>
      <Footer />
    </div>
  )
}

// eslint-disable-next-line react/prop-types
const Block = ({ className, ...rest }) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: 'spring',
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        'col-span-4 rounded-lg border border-zinc-700 bg-zinc-800 p-6',
        className
      )}
      {...rest}
    />
  )
}

const HeaderBlock = () => (
  <Block className='col-span-12 row-span-2 md:col-span-6 bg-accent '>
    <img
      src='https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=John'
      alt='avatar'
      className='mb-4 size-14 rounded-full '
    />
    <h1 className='mb-12 text-4xl font-medium leading-tight'>
      We are committed to providing a platform that meets your needs and look
      forward to hearing from you.
    </h1>
    <a
      href='#'
      className='flex items-center gap-1 text-red-300 hover:underline'
    >
      Contact us <FiArrowRight />
    </a>
  </Block>
)

const SocialsBlock = () => (
  <>
    <Block
      whileHover={{
        rotate: '2.5deg',
        scale: 1.1,
      }}
      className='col-span-6 bg-[#fa3d3b] md:col-span-3'
    >
      <a
        href='#'
        className='grid  h-full place-content-center text-3xl text-white'
      >
        <SiYoutube />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: '-2.5deg',
        scale: 1.1,
      }}
      className='col-span-6 bg-primary md:col-span-3'
    >
      <a
        href='#'
        className='grid h-full  place-content-center text-3xl text-white'
      >
        <SiGithub />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: '-2.5deg',
        scale: 1.1,
      }}
      className='col-span-6 bg-secondary md:col-span-3'
    >
      <a
        href='#'
        className='grid h-full place-content-center text-3xl text-black'
      >
        <SiInstagram />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: '2.5deg',
        scale: 1.1,
      }}
      className='col-span-6 bg-accent md:col-span-3'
    >
      <a
        href='#'
        className='grid h-full place-content-center text-3xl text-white'
      >
        <SiX />
      </a>
    </Block>
  </>
)

const AboutBlock = () => (
  <Block className='col-span-12 text-3xl leading-snug bg-primary'>
    <p>
      Our aim is to build a social network where football scouts and footballers
      can connect easily .{' '}
      <span className='text-zinc-400'>
        Whether you're a budding star or an established player, our platform
        offers a unique space to showcase your talent, gain visibility, and open
        doors to exciting opportunities
      </span>
    </p>
  </Block>
)

const LocationBlock = () => (
  <Block className='bg-accent col-span-12 flex flex-col items-center gap-4 md:col-span-3'>
    <FiMapPin className='text-3xl' />
    <p className='text-center text-lg text-zinc-400'>Ghana</p>
  </Block>
)

const EmailListBlock = () => (
  <Block className='col-span-12 md:col-span-9 bg-secondary'>
    <p className='mb-3 text-lg'>Talk to us</p>
    <form
      onSubmit={(e) => e.preventDefault()}
      className='flex items-center gap-2'
    >
      <input
        type='email'
        placeholder='Enter your email'
        className=' w-full rounded border border-zinc-700 bg-zinc-800 px-3 py-1.5 transition-colors focus:border-red-300 focus:outline-0'
      />
      <button
        type='submit'
        className='bg-primary   flex items-center gap-2 whitespace-nowrap rounded bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-300'
      >
        <FiMail /> Submit
      </button>
    </form>
  </Block>
)

const Logo = () => {
  // Temp logo from https://logoipsum.com/
  return (
    <svg
      width='40'
      height='auto'
      viewBox='0 0 50 39'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='mx-auto mb-12 fill-zinc-50'
    >
      <path
        d='M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z'
        stopColor='#000000'
      ></path>
      <path
        d='M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z'
        stopColor='#000000'
      ></path>
    </svg>
  )
}

const Footer = () => {
  return (
    <footer className='mt-12 text-accent'>
      <p className='text-center text-zinc-400'>
        Made with ❤️ by{' '}
        <a href='#' className='text-red-300 hover:underline'>
          Amuari
        </a>
      </p>
    </footer>
  )
}
