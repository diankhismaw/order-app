import Image from "next/image"
import Link from "next/link"

export const DetailNav = () => {
  return (
    <>
      <div className='navbar-custom py-2 flex items-center justify-center shadow-md fixed top-0 w-full bg-white'>
        <div className='mt-20 max-w-5xl mx-auto pb-20 w-full'>
          <Link href='/'>
            Kembali
          </Link>
          <Image
            src="/images/logo.jpg"
            alt="Picture of the author"
            width={50}
            height={50}
          />
          <h2 className='font-sans font-semibold'>Enchantè Coffee</h2>
        </div>
      </div>
    </>
  )
}