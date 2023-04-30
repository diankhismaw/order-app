import Link from "next/link"

export const FloatingPrice = () => {
  return (
    <div className="flex justify-center item-center fixed w-full bottom-0 left-0">
      <div className="flex justify-between max-w-5xl mx-auto items-center shadow-lg w-full p-5 bg-white">
        <div className="flex flex-col">
          <p>
            Total Item <span>(2)</span>
          </p>
          <p>Rp.209009</p>
        </div>
        <div className="flex">
          <Link href="detail-order" className="rounded-full bg-black text-white px-4 py-2">Order</Link>
        </div>
      </div>
    </div>
  )
}