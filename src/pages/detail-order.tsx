import { Detail, DetailNav } from "@/shared/components"


const DetailOrder = () => {
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
    <>
      <DetailNav />
      <div className='mt-20 max-w-5xl mx-auto pb-20'>
        {items.map((item) => <Detail {...item} />)}
      </div>
    </>

  )
}

export default DetailOrder