/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom"

export default function Back({ variant }) {
  const navigate = useNavigate()
  return (
    <button
      className={`text-2xl text-white hover:text-slate-300 duration-300 font-poppins outline-none border-none ${variant}`}
      onClick={() => navigate(-1)}
    >
      &laquo; Kembali
    </button>
  )
}
