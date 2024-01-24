/* eslint-disable react/prop-types */

export default function DetailSection({ detailName, detailDescription }) {
  return (
    <div className="md:flex">
      <h4 className="font-bold text-lg mt-2">{detailName}</h4>
      <span className="hidden text-lg mx-2 mt-2 md:inline-block">:</span>
      <p className="mt-1 md:mt-2 md:text-lg">{detailDescription}</p>
    </div>
  )
}
