// eslint-disable-next-line react/prop-types
import { SignedOut, SignInButton } from '@clerk/clerk-react'

const DottedButton = () => {
  return (
    <div className=' w-1/4 hover:bg-accent rounded-2xl border-2 border-collapse border-black bg-secondary px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none'>
      <SignedOut>
        <SignInButton mode='modal' />
      </SignedOut>
    </div>
  )
}

export default DottedButton
