/* eslint-disable react/prop-types */
import { v4 } from "uuid";

// Components
import AnimeCard from "./AnimeCard";
import AnimeListSkeleton from "./Skeleton/AnimeListSkeleton";

export default function AnimeList({ animeData }) {
  return (
    <div>
      {!animeData?.length ? (
        <AnimeListSkeleton length={25} />
      ) : (
        <div className="flex flex-wrap justify-evenly mt-4">
          {animeData?.map((anime) => {
            const random = v4();
            const key = anime.mal_id.toString() + random;
            return (
              <AnimeCard
                key={key}
                mal_id={anime.mal_id}
                image={anime.images.webp.large_image_url}
                title={anime.title}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
