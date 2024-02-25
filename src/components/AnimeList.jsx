/* eslint-disable react/prop-types */

// Components
import AnimeCard from "./AnimeCard";
import AnimeListSkeleton from "./Skeleton/AnimeListSkeleton";

export default function AnimeList(props) {
  const { animeData } = props;

  return (
    <div>
      {!animeData?.length ? (
        <AnimeListSkeleton length={10} />
      ) : (
        <div className="flex flex-wrap justify-evenly mt-4">
          {animeData?.map((anime) => (
            <AnimeCard
              key={anime.mal_id}
              mal_id={anime.mal_id}
              image={anime.images.webp.large_image_url}
              title={anime.title}
            />
          ))}
        </div>
      )}
    </div>
  );
}
