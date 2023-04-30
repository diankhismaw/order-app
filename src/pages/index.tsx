// import '@/styles/globals.css'
import { FloatingPrice, Item, Nav } from "@/shared/components"


const Home = () => {
  const items = [
    {
      title: 'Echante Signature',
      description: 'Kopi susu dan gula aren racikan khas Echante Coffee',
      price: 25000,
      alt: 'Echante Signature',
      imageSrc: '/images/signature.jpg'
    },
    {
      title: 'Enchante Hampers',
      description: 'Hampers special edisi lebaran dari Echante Coffee',
      price: 225000,
      alt: 'Echante Hampers',
      imageSrc: '/images/hampers.jpg'
    },
    {
      title: 'Echante Signature',
      description: 'Kopi susu dan gula aren racikan khas Echante Coffee',
      price: 25000,
      alt: 'Echante Signature',
      imageSrc: '/images/signature.jpg'
    },
    {
      title: 'Enchante Hampers',
      description: 'Hampers special edisi lebaran dari Echante Coffee',
      price: 300000,
      alt: 'Echante Hampers',
      imageSrc: '/images/hampers.jpg'
    },
    {
      title: 'Echante Signature',
      description: 'Kopi susu dan gula aren racikan khas Echante Coffee',
      price: 25000,
      alt: 'Echante Signature',
      imageSrc: '/images/signature.jpg'
    },
    {
      title: 'Enchante Hampers',
      description: 'Hampers special edisi lebaran dari Echante Coffee',
      price: 225000,
      alt: 'Echante Hampers',
      imageSrc: '/images/hampers.jpg'
    },
    {
      title: 'Echante Signature',
      description: 'Kopi susu dan gula aren racikan khas Echante Coffee',
      price: 25000,
      alt: 'Echante Signature',
      imageSrc: '/images/signature.jpg'
    },
    {
      title: 'Enchante Hampers',
      description: 'Hampers special edisi lebaran dari Echante Coffee',
      price: 300000,
      alt: 'Echante Hampers',
      imageSrc: '/images/hampers.jpg'
    }
  ]

  return (
    <div className='w-full'>
      <Nav />
      <div className='mt-20 max-w-5xl mx-auto pb-20'>
        {items.map((item) => <Item {...item} />)}
      </div>
      <FloatingPrice />
    </div>
  )
}

export default Home



