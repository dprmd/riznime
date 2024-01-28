import Jikan from "../../assets/img/jikan.png"

export default function JikanLink() {
  return (
    <a
      href="https://jikan.moe/"
      rel="noreferrer"
      target="_blank"
      className="flex items-center px-4 py-3 max-w-[200px] rounded-md active:bg-grayWhite md:hover:bg-slate-600 duration-300 my-2"
    >
      <span className="text-[#06B6D4] fill-current mr-2 w-6">
        <img src={Jikan} alt="Jikan Images" />
      </span>
      <span>Jikan Api v4</span>
    </a>
  )
}
