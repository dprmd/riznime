/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";

export default function AnimeOrMangaCard({ mal_id, image, title, rank }) {
  const navigate = useNavigate();
  return (
    <div
      className="max-w-[47%] max-h-[275px] min-w-[47%] min-h-[275px] my-2 hover:scale-105 duration-500 cursor-pointer flex flex-col rounded-lg overflow-hidden sm:max-w-[32%] sm:max-h-[300px] sm:min-w-[32%] sm:min-h-[300px] md:max-w-[24%] md:max-h-[300px] md:min-w-[24%] md:min-h-[300px] lg:max-w-[18%] lg:max-h-[300px] lg:min-w-[18%] lg:min-h-[300px]"
      onClick={() => navigate(`/detail/${mal_id}`)}
    >
      <div className="w-full h-full overflow-hidden relative">
        {rank && (
          <span className="bg-sky-300 font-bold bg-opacity-80 backdrop-blur-md absolute top-0 inline-block p-1 px-3 text-sm rounded-br-lg">
            <span>Rank </span>
            {rank}
          </span>
        )}
        <img src={image} alt="Anime Picture" />
      </div>
      <div className="bg-grayDark p-2 text-center grow flex justify-center items-center">
        <span className="font-poppins font-bold text-primary">{title}</span>
      </div>
    </div>
  );
}
