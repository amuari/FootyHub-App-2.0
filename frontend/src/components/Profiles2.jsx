import { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar2 from './Navbar2'
import { Link } from 'react-router-dom'

// import { FaHeart } from 'react-icons/fa'

const Profiles = () => {
  const [players, setPlayers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // fetch players from database
  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await axios.get('http://localhost:8080/players/feed')
        setPlayers(response.data.players)
      } catch (error) {
        console.error('Error fetching players:', error.message)
        setError('Error fetching players. Please try again.')
      } finally {
        setLoading(false)
      }
    }

    fetchPlayers()
  }, [])
  // loading
  if (loading) {
    return (
      <div className='flex items-center align-middle'>
        <span className='loading loading-ring loading-xs'></span>
        <span className='loading loading-ring loading-sm'></span>
        <span className='loading loading-ring loading-md'></span>
        <span className='loading loading-ring loading-lg'></span>
      </div>
    )
  }

  if (error) {
    return <p>{error}</p>
  }

  const getSinglePlayer = async (playerId) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/players/${playerId}`
      )
      console.log(response.data)
    } catch (error) {
      console.error('Error fetching players:', error.message)
      setError('Error fetching players. Please try again.')
    }
  }

  return (
    <main className='bg-background'>
      <Navbar2 />
      <Link to='/dashboard'>
        <button className='group/button relative overflow-hidden rounded-md border border-red-500/20 bg-secondary px-4 py-1 text-base font-medium text-text transition-all duration-150 hover:border-red-500 active:scale-95'>
          <span className='absolute bottom-0 left-0 z-0 h-0 w-full bg-gradient-to-t from-primary to-accent transition-all duration-500 group-hover/button:h-full' />
          <span className='relative z-10 transition-all duration-500 group-hover/button:text-white'>
            Add profile
          </span>
        </button>
      </Link>

      {players.map((player) => (
        <div key={player._id}>
          <div className='flex flex-col align-middle  items-center justify-center max-w-xs p-6  shadow-md gap-14   bg-[#2a272727] mx-72  text-gray-700'>
            <Link
              to={`/player/${player._id}`}
              onClick={() => getSinglePlayer(player._id)}
            >
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 p-4 md:p-6 lg:p-8'>
                <div className='group relative overflow-hidden rounded-lg'>
                  <Link
                    href='#'
                    className='absolute inset-0 z-10'
                    prefetch={false}
                  >
                    <span className='sr-only'>View user profile</span>
                  </Link>
                  <div className='relative overflow-hidden rounded-lg'>
                    <img
                      src='/placeholder.svg'
                      alt='User Avatar'
                      width={300}
                      height={300}
                      className='aspect-square w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105'
                    />
                    <div className='absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100' />
                  </div>
                  <div className='absolute bottom-4 left-4 text-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100'>
                    <div className='text-sm font-medium'>
                      name:{player.firstName} {player.lastName}
                    </div>
                    <div className='text-xs'>Age: {player.age}</div>
                    <div className='text-xs text-gray-300'>
                      Position: {player.position}
                    </div>
                    <div className='text-xs text-gray-300'>
                      Country: {player.country}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </main>
  )
}

export default Profiles
