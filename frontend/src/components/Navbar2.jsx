import { Link } from 'react-router-dom'
import { UserButton } from '@clerk/clerk-react'
const Navbar2 = () => {
  return (
    <nav className='bg-primary shadow text-text '>
      <div className='container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300'>
        <Link
          to='/'
          className='text-text transition-colors duration-300 transform dark:text-gray-200  border-blue-500 mx-1.5 sm:mx-6'
        >
          home
        </Link>

        <Link
          to='/profiles'
          className=' border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6'
        >
          profiles
        </Link>

        <Link
          to='/about'
          className=' border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6'
        >
          about
        </Link>

        <Link
          href='#'
          className=' border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6'
        >
          blog
        </Link>

        <Link
          href='#'
          className=' border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6'
        >
          <UserButton showName afterSignOutUrl='/' />
        </Link>

        <Link
          href='#'
          className='border-b-2 border-transparent hover:text-gray-800 hover:bg-primary transition-colors duration-300 transform  mx-1.5 sm:mx-6'
        ></Link>
      </div>
    </nav>
  )
}

export default Navbar2
