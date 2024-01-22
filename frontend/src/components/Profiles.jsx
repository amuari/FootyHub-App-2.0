import { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from "./Navbar";


const Profiles = () => {
  const [players,setPlayers]=useState({
    firstName:'',
    lastName:'',
    age: '',
    image:'',
    position:'',
    country:'',
  })
  const fetchMovies = async () => {
    try {
      const response = await axios.get('http://localhost:8080/dashboard/profiles')

      // setPlayers(response.data)
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchMovies()
  }, [])

  return (
    <main className="bg-[#f8f7f7]">
      <Navbar/>
  <div className="flex flex-col justify-center max-w-xs p-6 shadow-sm rounded-none sm:px-12 bg-[#f8f7f7] text-[#292828]">
	<img src="https://source.unsplash.com/150x150/?portrait?3" alt="" className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
	<div className=
  "space-y-4 text-center divide-y dark:divide-gray-700">
		<div className="my-2 space-y-1">
			<h2 className="text-xl font-semibold sm:text-2xl">Name:</h2>
			<p className="px-5 text-xs sm:text-base dark:text-gray-400">Age:</p>
      <p className="px-5 text-xs sm:text-base dark:text-gray-400">Position</p>
      <p className="px-5 text-xs sm:text-base dark:text-gray-400">Country:</p>
    
		</div>
		
	</div>
</div>

      
          </main>
  );
}

export default Profiles;
