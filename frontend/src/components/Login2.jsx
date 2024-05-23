import Label from '../ui/label'
import Input from '../ui/inputs'
import axios from 'axios'
import { cn } from '../utils/cn'
import { IconBrandGoogle, IconX, IconBrandFacebook } from '@tabler/icons-react'

export default function SignupFormDemo() {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted')
  }
  const handleGoogleLogin = async () => {
    try {
      // Redirect to the server endpoint that initiates Google OAuth
      const response = await axios.get('http://localhost:8080/auth/google')
      window.location.href = response.data.redirectUrl
    } catch (error) {
      console.error('Error initiating Google login:', error)
    }
  }
  return (
    <div className='max-w-md w-full h-fit  mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-background '>
      <h2 className='font-bold text-xl text-neutral-800 dark:text-neutral-200'>
        Welcome to Footyhub
      </h2>
      {/* <p className='text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300'>
        Login to aceternity if you can because we don&apos;t have a login flow
        yet
      </p> */}

      <form className='my-8' onSubmit={handleSubmit}>
        {/* <div className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4'>
          <LabelInputContainer>
            <Label htmlFor='firstname'>First name</Label>
            <Input id='firstname' placeholder='Tyler' type='text' />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor='lastname'>Last name</Label>
            <Input id='lastname' placeholder='Durden' type='text' />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className='mb-4'>
          <Label htmlFor='email'>Email Address</Label>
          <Input id='email' placeholder='projectmayhem@fc.com' type='email' />
        </LabelInputContainer>
        <LabelInputContainer className='mb-4'>
          <Label htmlFor='password'>Password</Label>
          <Input id='password' placeholder='••••••••' type='password' />
        </LabelInputContainer>
        <LabelInputContainer className='mb-8'>
          <Label htmlFor='twitterpassword'>Your twitter password</Label>
          <Input id='twitterpassword' placeholder='••••••••' type='password' />
        </LabelInputContainer> */}

        <button
          className='bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] 0px_-1px_0px_0px_var(--zinc-800)_inset]'
          type='submit'
        >
          Login &rarr;
          <BottomGradient />
        </button>

        <div className='bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full' />

        <div className='flex flex-col space-y-4'>
          <a href='http://localhost:8080/auth/google'>
            <button
              className='relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 '
              type='button'
              onClick={handleGoogleLogin}
            >
              <IconBrandGoogle className='h-4 w-4 text-neutral-800 dark:text-neutral-300' />
              <span className='text-neutral-700 dark:text-neutral-300 text-sm'>
                Google
              </span>
              <BottomGradient />
            </button>
          </a>
          <button
            className='bg-text relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 ]'
            type='button'
          >
            <IconX className='h-4 w-4 text-neutral-800 dark:text-neutral-300 bg-background' />
            <span className='text-background  dark:text-neutral-300 text-sm'>
              Twitter
            </span>
            <BottomGradient />
          </button>

          <button
            className=' bg-accent relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 '
            type='button'
          >
            <IconBrandFacebook className='h-4 w-4 text-neutral-800 dark:text-neutral-300' />
            <span className='text-neutral-700 dark:text-neutral-300 text-sm '>
              Facebook
            </span>
            <BottomGradient />
          </button>
        </div>
      </form>
    </div>
  )
}

const BottomGradient = () => {
  return (
    <>
      <span className='group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-secondary-to-r from-transparent via-primary to-transparent' />
      <span className='group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-accent -to-r from-transparent via-primary to-transparent' />
    </>
  )
}

// eslint-disable-next-line react/prop-types
const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn('flex flex-col space-y-2 w-full', className)}>
      {children}
    </div>
  )
}
