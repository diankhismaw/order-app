import Image from "next/image"

export const Nav = () => {
  return (
    <>
      <div className='navbar-custom py-2 flex items-center justify-center shadow-md fixed top-0 w-full'>
          <Image
            src="/images/logo.jpg"
            alt="Picture of the author"
            width={50}
            height={50}
          />
        <h2 className='font-sans font-semibold'>Enchantè Coffee</h2>
      </div>
    </>
  )
}