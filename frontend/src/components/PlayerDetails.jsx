import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const PlayerDetails = () => {
  const { id } = useParams()
  const [player, setPlayer] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPlayerDetails = async (playerId) => {
      try {
        const response = await axios.get(
          `http://localhost:8080/players/${playerId}`
        )
        setPlayer(response.data)
      } catch (error) {
        console.error('Error fetching player details:', error.message)
        setError('Error fetching player details. Please try again.')
      } finally {
        setLoading(false)
      }
    }

    // Check if id is truthy before making the API request
    if (id) {
      fetchPlayerDetails(id)
    }
  }, [id])

  if (loading) {
    return <p>Loading player details...</p>
  }

  if (error) {
    return <p>{error}</p>
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
