import Back from "../components/Back"

export default function NotFound() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div>
        <span className="font-bold text-xl text-white block">
          Halaman Tidak Ditemukan
        </span>
        <Back variant={"mx-auto block mt-4"} />
      </div>
    </div>
  )
}
