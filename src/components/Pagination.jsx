/* eslint-disable react/prop-types */
const btnStyle =
  "inline-block bg-sky-600 border-none px-4 py-1 text-white rounded text-2xl active:bg-sky-800 md:hover:bg-sky-800 duration-300 mx-4 inline-flex justify-center items-center"

export default function Pagination({ onClick, currentPage }) {
  return (
    <div className="w-max mx-auto my-8">
      <button className={btnStyle} onClick={() => onClick("prev")}>
        &larr;
      </button>
      <span className="px-4 text-xl font-bold text-grayWhite">
        Page {currentPage}
      </span>
      <button className={btnStyle} onClick={() => onClick("next")}>
        &rarr;
      </button>
    </div>
  )
}
