/* eslint-disable react/prop-types */

export default function AnimeListSkeleton({ length }) {
  const animeLength = Array(length).fill(null);

  return (
    <div>
      <div className="flex flex-wrap justify-evenly mt-4">
        {animeLength.map((_, i) => (
          <div
            key={i}
            className="max-w-[47%] max-h-[275px] min-w-[47%] min-h-[275px] my-2 hover:scale-105 duration-500 cursor-pointer flex flex-col rounded-lg overflow-hidden sm:max-w-[32%] sm:max-h-[300px] sm:min-w-[32%] sm:min-h-[300px] md:max-w-[24%] md:max-h-[300px] md:min-w-[24%] md:min-h-[300px] lg:max-w-[18%] lg:max-h-[300px] lg:min-w-[18%] lg:min-h-[300px]"
          >
            <div className="bg-slate-400 w-full h-full overflow-hidden"></div>
            <div className="bg-grayDark h-[70px] flex justify-center items-center">
              <span className="font-poppins font-bold text-primary"></span>
            </div>
          </div>
        ))}
      </div>
      )
    </div>
  );
}
