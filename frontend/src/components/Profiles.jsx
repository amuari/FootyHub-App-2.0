import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Navbar2 from './Navbar2'
import { useAuth } from '@clerk/clerk-react'

const Profiles = () => {
  const { isSignedIn } = useAuth()
  const [players, setPlayers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

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

    if (isSignedIn) {
      fetchPlayers()
    }
  }, [isSignedIn])

  if (loading) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <div className='loader'>Loading...</div>
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
      console.error('Error fetching player:', error.message)
      setError('Error fetching player. Please try again.')
    }
  }

  return (
    <main className='bg-background min-h-screen'>
      <Navbar2 />
      <div className='container mx-auto p-4'>
        <Link to='/addplayer'>
          <button className=' group/button relative overflow-hidden rounded-md border border-red-500/20 bg-secondary px-4 py-1 text-base font-medium text-text transition-all duration-150 hover:border-red-500 active:scale-95'>
            <span className='absolute bottom-0 left-0 z-0 h-0 w-full bg-gradient-to-t from-primary to-accent transition-all duration-500 group-hover/button:h-full' />
            <span className='relative z-10 transition-all duration-500 group-hover/button:text-white'>
              Add profile
            </span>
          </button>
        </Link>
        <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20'>
          {players.map((player) => (
            <div
              key={player._id}
              className='bg-background  text-text p-4 rounded-lg shadow-md hover:shadow-lg transition'
            >
              <Link
                to={`/player/${player._id}`}
                onClick={() => getSinglePlayer(player._id)}
              >
                <img
                  src={player.image}
                  alt={`Profile of ${player.firstName} ${player.lastName}`}
                  className='w-32 h-32 mx-auto rounded-full object-cover'
                />
                <div className='mt-4 text-center'>
                  <h2 className='text-lg font-semibold'>
                    {player.firstName} {player.lastName}
                  </h2>
                  <p className='text-gray-600'>Age: {player.age}</p>
                  <p className='text-gray-600'>Position: {player.position}</p>
                  <p className='text-gray-600'>Country: {player.country}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Profiles
