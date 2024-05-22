import black from '../img/one.jpg'
import DottedButton from './Button'

const Section = () => {
  return (
    <section className=''>
      <div className='hero min-h-fit  '>
        {/* Use the next/image component for the background image */}
        <img
          src={black}
          alt='Soccer Player'
          className='object-cover sm:object-contain '
        />
        <div className='hero-overlay'></div>
        <div className='hero  text-center '>
          <div className='max-w-md'>
            {/* <h1 className="mb-5 text-5xl font-bold text-[#483b3b]">Hello there</h1> */}
            <p className='mb-5 text-[#f8f7f7] font-extralight'>
              {' '}
              Scouts worldwide can discover your talent, connect with you
              directly, and propel your football journey to new heights. Join
              our vibrant community where passion meets opportunity. Kickstart
              your dreams, one profile at a time!.
            </p>
            <div className=' space-x-1'>
              <DottedButton />

              {/* <a href='/signup'>
          
            <button className="btn-sm rounded-xl glass  bg-[#f98538] text-[#08243a]">Sign up</button>
    </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section
