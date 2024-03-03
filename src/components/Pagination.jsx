/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { v4 } from "uuid";

const btnStyle =
  "w-max mx-auto md:mx-4 my-4 inline-block bg-sky-600 border-none px-4 py-1 text-white rounded text-2xl active:bg-sky-800 md:hover:bg-sky-800 duration-300 mx-4 inline-flex justify-center items-center";

const pageStyle =
  "mx-1 px-4 py-2 text-xl font-bold text-grayWhite bg-blue-900 rounded-full cursor-pointer";

export default function Pagination({ onClick, currentPage, maxPage }) {
  const allPage = [...Array(maxPage).keys()].map((a) => a + 1);
  const wholePage =
    currentPage > 4
      ? allPage.slice(currentPage - 4, currentPage + 3)
      : allPage.slice(0, currentPage + 3);

  const left =
    currentPage === 1 ? [] : wholePage.slice(0, wholePage.indexOf(currentPage));
  const right = wholePage.slice(wholePage.indexOf(currentPage) + 1);

  return (
    <div className="w-full md:w-max mx-auto my-8 flex flex-col md:flex-row md:justify-center md:items-center">
      <button className={btnStyle} onClick={() => onClick("prev")}>
        &larr;
      </button>

      <div className="w-full md:w-max inline-flex justify-center items-center my-2">
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

        <span className="border border-white mx-1 px-4 py-2 text-xl font-bold text-grayWhite bg-blue-600 rounded-full cursor-pointer">
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
      </div>

      <button className={btnStyle} onClick={() => onClick("next")}>
        &rarr;
      </button>
    </div>
  );
}
