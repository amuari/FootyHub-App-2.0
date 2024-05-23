import anime from 'animejs'
import Login2 from './Login2'
import Navbar2 from './Navbar2'
import { AboutUs } from './AboutUs'

const WaterDropGrid = () => {
  return (
    <section>
      {/* <Navbar2 /> */}
      <div className='relative w-full flex justify-center bg-background px-8 py-12'>
        <DotGrid />
      </div>
      <AboutUs />
    </section>
  )
}

const GRID_WIDTH = 12
const GRID_HEIGHT = 20

const DotGrid = () => {
  const handleDotClick = (e) => {
    anime({
      targets: '.dot-point',
      scale: [
        { value: 1.35, easing: 'easeOutSine', duration: 250 },
        { value: 1, easing: 'easeInOutQuad', duration: 500 },
      ],
      translateY: [
        { value: -15, easing: 'easeOutSine', duration: 250 },
        { value: 0, easing: 'easeInOutQuad', duration: 500 },
      ],
      opacity: [
        { value: 1, easing: 'easeOutSine', duration: 250 },
        { value: 0.5, easing: 'easeInOutQuad', duration: 500 },
      ],
      delay: anime.stagger(100, {
        grid: [GRID_WIDTH, GRID_HEIGHT],
        from: e.target.dataset.index,
      }),
    })
  }

  const dots = []
  let index = 0

  for (let i = 0; i < GRID_WIDTH; i++) {
    for (let j = 0; j < GRID_HEIGHT; j++) {
      dots.push(
        <div
          className='group cursor-crosshair rounded-full p-2 transition-colors hover:bg-secondary'
          data-index={index}
          key={`${i}-${j}`}
        >
          <div
            className='dot-point h-2 w-2 rounded-full bg-gradient-to-b from-accent to-primary opacity-50 group-hover:from-indigo-600 group-hover:to-white'
            data-index={index}
          />
        </div>
      )
      index++
    }
  }

  return (
    <section className='flex w-full'>
      <div
        onClick={handleDotClick}
        style={{ gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)` }}
        className='grid gap-2 w-1/2'
      >
        {dots}
      </div>
      <div className='w-1/2'>
        <Login2 />
      </div>
    </section>
  )
}

export default WaterDropGrid
