import Section2 from './Section2'

import Feature from './Feature'
import { AboutUs } from './AboutUs'
import Navbar2 from './Navbar2'

const Home = () => {
  return (
    <main className='bg-background max-h-full '>
      <Navbar2 />
      <Section2 />
      <Feature />
      <AboutUs />
    </main>
  )
}

export default Home
