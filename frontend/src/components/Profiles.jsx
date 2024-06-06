import { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar2 from './Navbar2'
import { Link } from 'react-router-dom'
import DottedButton from './Button'

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
        {/* <span className='loading loading-ring loading-xs'></span>
        <span className='loading loading-ring loading-sm'></span>
        <span className='loading loading-ring loading-md'></span>
        <span className='loading loading-ring loading-lg'></span> */}
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
              <img
                src={player.image}
                alt={`Profile of ${player.firstName} ${player.lastName}`}
                className='w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square object-cover'
              />
              <div className='space-y-4 text-center divide-y dark:divide-gray-700'>
                <div className='my-2 space-y-1'>
                  <h2 className='text-xl font-semibold sm:text-2xl'>
                    <div className='flex'>
                      Name: {player.firstName} {player.lastName}
                    </div>
                  </h2>
                  <p className='px-5 text-xs sm:text-base dark:text-gray-400'>
                    Age: {player.age}
                  </p>
                  <p className='px-5 text-xs sm:text-base dark:text-gray-400'>
                    Position: {player.position}
                  </p>
                  <p className='px-5 text-xs sm:text-base dark:text-gray-400'>
                    Country: {player.country}
                  </p>
                  <p className='px-5 text-xs sm:text-base dark:text-gray-400'>
                    Traits: {player.traits}
                  </p>
                  {/* <p className='px-5 text-xs sm:text-base dark:text-gray-400'>
                  likes: {player.likes}
                </p> */}
                  {/* <div className='flex justify-between'>
                  <span></span>
                  <FaHeart onClick={() => handleLike(player._id)} color='red' />
                </div> */}
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
