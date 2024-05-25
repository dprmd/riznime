/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { v4 } from "uuid";

// Utils
import { generateArrayPagination } from "../utils/pagination";

const btnStyle =
  "w-3 h-8 rounded-full mx-auto md:mx-4 my-4 inline-block bg-sky-600 border-none px-4 py-1 text-white rounded active:bg-sky-800 md:hover:bg-sky-800 duration-300 mx-4 inline-flex justify-center items-center";

const pageStyle =
  "mx-1 px-3 py-1 text-grayWhite bg-blue-900 rounded-full cursor-pointer";

export default function Pagination({ onClick, currentPage, maxPage }) {
  const { whole, left, right } = generateArrayPagination({
    currentPage,
    maxPage,
    toLeft: 2,
    toRight: 2,
  });

  return (
    <div className="w-full md:w-max mx-auto my-8 flex flex-col md:flex-row md:justify-center md:items-center">
      <button className={btnStyle} onClick={() => onClick("prev")}>
      <i className="bi bi-arrow-left"></i>
      </button>

      <div className="w-full md:w-max inline-flex justify-center items-center my-2">
        {!whole.includes(1) && (
          <>
            <span onClick={() => onClick("jump", 1)} className={pageStyle}>
              1
            </span>
            <span className="font-bold text-xl text-white mx-1">|</span>
          </>
        )}
        {left.map((target, i) => {
          const random = v4();
          const key = i.toString() + random;
          return (
            <span
              onClick={() => onClick("jump", target)}
              className={pageStyle}
              key={key}
            >
              {target}
            </span>
          );
        })}

        <span className="border border-white mx-1 px-3 py-1 text-grayWhite bg-blue-600 rounded-full cursor-pointer">
          {currentPage}
        </span>

        {right.map((target, i) => {
          const random = v4();
          const key = i.toString() + random;
          return (
            <span
              onClick={() => onClick("jump", target)}
              className={pageStyle}
              key={key}
            >
              {target}
            </span>
          );
        })}
        {!whole.includes(maxPage) && (
          <>
            <span className="font-bold text-xl text-white mx-1">|</span>
            <span
              onClick={() => onClick("jump", maxPage)}
              className={pageStyle}
            >
              {maxPage}
            </span>
          </>
        )}
      </div>

      <button className={btnStyle} onClick={() => onClick("next")}>
      <i className="bi bi-arrow-right"></i>
      </button>
    </div>
  );
}
