/* eslint-disable react/prop-types */
import { v4 } from "uuid";

// Components
import AnimeOrMangaCard from "./AnimeOrMangaCard";
import AnimeOrMangaListSkeleton from "./Skeleton/AnimeOrMangaListSkeleton";

export default function AnimeOrMangaList({ animeOrMangaData }) {
  return (
    <div>
      {!animeOrMangaData?.length ? (
        <AnimeOrMangaListSkeleton length={25} />
      ) : (
        <div className="flex flex-wrap justify-evenly mt-4">
          {animeOrMangaData?.map((anime) => {
            const random = v4();
            const key = anime.mal_id.toString() + random;
            return (
              <AnimeOrMangaCard
                key={key}
                mal_id={anime.mal_id}
                image={anime.images.webp.large_image_url}
                title={anime.title}
                rank={anime.rank}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
