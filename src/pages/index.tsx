// import '@/styles/globals.css'
import { Item, Nav } from "@/shared/components"


const Home = () => {
  const items = [
    {
      title: 'test-title',
      description: 'test description',
      price: 50000,
      alt: 'test alternate images',
      imageSrc: '/images/hampers.jpg'
    },
    {
      title: 'test-title 2',
      description: 'test description 2',
      price: 50000,
      alt: 'test alternate images 2',
      imageSrc: '/images/signature.jpg'
    }
  ]

  return (
    <div className='w-full'>
      <Nav />
      <div className='mt-20 max-w-5xl mx-auto'>
        {items.map((item) => <Item {...item} />)}
      </div>
      {/* <Item /> */}
      {/* <ModalNote /> */}
    </div>
  )
}

export default Home



