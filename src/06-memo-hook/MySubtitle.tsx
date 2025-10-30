interface Props {
  subtitle: string
}

export const MySubtitle = ( { subtitle }: Props ) => {

  console.log( 'MySubtitle Re-Render' )
  return (
    <>
      <h6
        className="text-xl font-bold"
      >
        { subtitle }
      </h6>
      <button className="bg-indigo-500 text-white px-4 py-2 rounded-md cursor-pointer">
        Call function
      </button>
    </>
  )
}
