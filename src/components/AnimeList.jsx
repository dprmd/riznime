/* eslint-disable react/prop-types */

// Components
import AnimeCard from "./AnimeCard"

export default function AnimeList(props) {
  const { animeData, loadingAnime } = props

  return (
    <div>
      {loadingAnime ? (
        <div className="text-center text-xl font-bold my-10 text-grayWhite">
          Loading . . .
        </div>
      ) : (
        <div className="flex flex-wrap justify-evenly mt-6">
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
  )
}
