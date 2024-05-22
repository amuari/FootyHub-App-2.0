import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const PlayerDetails = () => {
  const { id } = useParams()
  const [player, setPlayer] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPlayerDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/players/${playerId}`
        )
        setPlayer(response.data)
        console.log(response)
      } catch (error) {
        console.error('Error fetching player details:', error.message)
        setError('Error fetching player details. Please try again.')
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      fetchPlayerDetails()
    }
  }, [id])

  if (loading) {
    return <p>Loading player details...</p>
  }

  if (error) {
    // Render the error message directly, not the function itself
    return <p>{error}</p>
  }

  if (!player) {
    return <p>No player found with the specified ID.</p>
  }

  // Render player details here
  return (
    <div>
      <h1>
        {player.firstName} {player.lastName}
      </h1>
      <p>Age: {player.age}</p>
      <p>Position: {player.position}</p>
      <p>Country: {player.country}</p>
      {/* Add other details as needed */}
    </div>
  )
}

export default PlayerDetails
