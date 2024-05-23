// eslint-disable-next-line react/prop-types
const DottedButton = ({ name }) => {
  return (
    <a href='/login'>
      <button className=' hover:bg-accent rounded-2xl border-2 border-collapse border-black bg-secondary px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none'>
        {name}
      </button>
    </a>
  )
}

export default DottedButton
