import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

// Services
import { fetchJikanApi } from "../services/JikanApi"

// Components
import Back from "../components/Back"

export default function Detail() {
  const { mal_id } = useParams()
  const [detailAnime, setDetailAnime] = useState({})
  const [loadingDetailAnime, setLoadingDetailAnime] = useState(true)

  useEffect(() => {
    async function fetchDetailAnime() {
      const response = await fetchJikanApi(`/anime/${mal_id}/full`)
      setDetailAnime(response.data)
      setLoadingDetailAnime(false)
    }

    fetchDetailAnime()
  }, [])

  return (
    <div className="m-4 p-4">
      {loadingDetailAnime ? (
        <div className="text-center font-bold text-xl text-grayWhite">
          Loading . . .
        </div>
      ) : (
        <>
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start md:items-start">
            <div className="min-w-[200px] max-w-[230px] overflow-hidden">
              <img src={detailAnime?.images?.webp.large_image_url} alt="" />
            </div>
            <div className="mx-4 p-4 pt-0 text-grayWhite font-poppins mt-6 md:mt-0">
              <h3 className="font-bold text-2xl mb-1">{detailAnime.title}</h3>
              <div>
                Genres :{" "}
                {detailAnime.genres.map((genre) => (
                  <span key={genre.mal_id} className="mx-1">
                    {genre.name}
                  </span>
                ))}
              </div>
              <div>Type : {detailAnime.type}</div>
              <div>
                Release : {detailAnime.year ? detailAnime.year : "Unknown"}
              </div>
              <div>
                Total Episode : {`${detailAnime.episodes} Eps`} ,{" "}
                {detailAnime.duration}
              </div>
            </div>
          </div>
          <Back variant={"mx-auto block mt-10"} />
        </>
      )}
    </div>
  )
}
