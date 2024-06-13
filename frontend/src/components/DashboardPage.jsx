/* eslint-disable no-mixed-spaces-and-tabs */
// ... (imports and other code)
import { useState } from 'react'
import axios from 'axios'
import Navbar2 from '../components/Navbar2'
import { Link } from 'react-router-dom'

const DashboardPage = () => {
  const [firstName, setFirstname] = useState('')
  const [lastName, setLastname] = useState('')
  const [age, setAge] = useState('')
  const [country, setCountry] = useState('')
  const [position, setPosition] = useState('')
  const [image, setImage] = useState(null)

  const handleFirstnameChange = (event) => {
    setFirstname(event.target.value)
  }

  const handleLastNameChange = (event) => {
    setLastname(event.target.value)
  }

  const handleAgeChange = (event) => {
    setAge(event.target.value)
  }

  const handleCountryChange = (event) => {
    setCountry(event.target.value)
  }
  const handlePositionChange = (event) => {
    setPosition(event.target.value)
  }

  const handleImageChange = (event) => {
    setImage(event.target.files[0])
  }

  const handlesubmit = async (e) => {
    e.preventDefault()

    try {
      const formData = new FormData()
      formData.append('firstName', firstName)
      formData.append('lastName', lastName)
      formData.append('age', age)
      formData.append('country', country)
      formData.append('position', position)

      if (image) {
        formData.append('image', image)
      }

      await axios.post('http://localhost:8080/createplayer', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })

      // Optionally, reset the form fields after successful submission
      setFirstname('')
      setLastname('')
      setAge('')
      setCountry('')
      setPosition('')

      setImage(null)

      // Redirect to a certain route

      history.push('/profiles')

      // TODO: Handle success, show a success message, etc.
    } catch (error) {
      // Log the error to the console for debugging
      console.error(error)

      // TODO: Handle error, show an error message, etc.
    }
  }

  return (
    <main className='bg-accent text-text w-full'>
      <Navbar2 />
      <form
        action='/createplayer'
        method='POST'
        className='container flex flex-col mx-auto space-y-12'
        encType='multipart/form-data' // Make sure to include this for file uploads
      >
        <fieldset className='grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm'>
          <div className='space-y-2 col-span-full lg:col-span-1'>
            <p className='font-medium'>Personal Information</p>
            <p className='text-xs'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
              fuga autem eum!
            </p>
          </div>
          <div className='grid grid-cols-6 gap-4 col-span-full lg:col-span-3 text-text'>
            <div className='col-span-full sm:col-span-3 text-text'>
              <label htmlFor='firstName' className='text-sm'>
                First name
              </label>
              <input
                id='firstName'
                type='text'
                placeholder=''
                className='flex h-10  border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input  px-3 py-2 text-sm file:border-0 file:bg-transparent 
                file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
                focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600
                disabled:cursor-not-allowed disabled:opacity-50
                dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
                group-hover/input:shadow-none transition duration-400 w-full rounded-md focus:ring border-[#08243a] text-text'
                name='firstName'
                value={firstName}
                onChange={handleFirstnameChange}
              />
            </div>
            <div className='col-span-full sm:col-span-3'>
              <label htmlFor='lastName' className='text-sm'>
                Last name
              </label>
              <input
                id='lastName'
                type='text'
                placeholder=''
                className='flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm file:border-0 file:bg-transparent 
                file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
                focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600
                disabled:cursor-not-allowed disabled:opacity-50
                dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
                group-hover/input:shadow-none transition duration-400  focus:ring border-[#08243a] '
                name='lastName'
                value={lastName}
                onChange={handleLastNameChange}
              />
            </div>
            <div className='col-span-full sm:col-span-3'>
              <label htmlFor='age' className='text-sm'>
                Age
              </label>
              <input
                id='age'
                type='number'
                placeholder=''
                className='flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm file:border-0 file:bg-transparent 
                file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
                focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600
                disabled:cursor-not-allowed disabled:opacity-50
                dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
                group-hover/input:shadow-none transition duration-400 '
                name='age'
                value={age}
                onChange={handleAgeChange}
              />
            </div>
            <div className='col-span-full sm:col-span-3'>
              <label htmlFor='position' className='text-sm'>
                Position
              </label>
              <input
                id='position'
                type='text'
                placeholder=''
                className='flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm file:border-0 file:bg-transparent 
                file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
                focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600
                disabled:cursor-not-allowed disabled:opacity-50
                dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
                group-hover/input:shadow-none transition duration-400'
                name='position'
                value={position}
                onChange={handlePositionChange}
              />
            </div>
            <div className='col-span-full'>
              <label htmlFor='country' className='text-sm'>
                Country
              </label>
              <input
                id='country'
                type='text'
                placeholder=''
                className='flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm file:border-0 file:bg-transparent 
                file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
                focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600
                disabled:cursor-not-allowed disabled:opacity-50
                dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
                group-hover/input:shadow-none transition duration-400'
                name='country'
                value={country}
                onChange={handleCountryChange}
              />
            </div>
          </div>
        </fieldset>
        {/* ... (existing file input field) */}
        <fieldset className='w-full space-y-1 text-[#5d5d5d]'>
          <label htmlFor='image' className='block text-sm font-medium'>
            Upload Image
          </label>
          <div className='flex'>
            <input
              type='file'
              name='image'
              id='image'
              className='px-8 py-12 border-2 border-dashed  rounded-md'
              onChange={handleImageChange}
            />
          </div>
        </fieldset>
        <button
          onClick={handlesubmit}
          type='submit' // Change the button type to submit
          className='px-8 py-3 w-1/4 font-semibold rounded-full bg-primary'
        >
          Submit
        </button>
      </form>
      <div className='m-72'>
        <Link to='/profile' className='link'>
          Back to Feed
        </Link>
      </div>
      {/* ... (existing code) */}
    </main>
  )
}

export default DashboardPage
