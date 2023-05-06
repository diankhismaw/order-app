import Link from "next/link"

export const FloatingPrice = () => {
  return (
    <div className="flex justify-center item-center fixed w-full bottom-0 shadow-lg left-0 bg-white">
      <div className="flex justify-between max-w-4xl mx-auto items-center w-full">
        <div className="flex flex-col p-3">
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