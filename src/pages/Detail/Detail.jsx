import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

// Services
import { fetchJikanApi } from "../../services/JikanApi"

// Components
import Back from "../../components/Back"
import DetailSection from "./DetailSection"

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
  }, [mal_id])

  document.title = `RizNime - ${detailAnime?.title}`

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

            <div className="mx-4 p-4 pt-0 text-grayWhite font-poppins mt-6 md:mt-0 text-center md:text-left">
              {detailAnime?.trailer.url !== null ? (
                <a
                  href={detailAnime.trailer.url}
                  target="_blank"
                  rel="noreferrer"
                  className="block w-max mx-auto px-4 py-2 bg-grayWhite text-black font-bold mb-4 rounded-md cursor-pointer hover:bg-slate-400 duration-300 md:mx-0"
                >
                  Watch Trailer
                </a>
              ) : (
                ""
              )}

              <h3 className="font-bold text-2xl mb-1">{detailAnime.title}</h3>

              <DetailSection
                detailName={"Genres"}
                detailDescription={
                  detailAnime.genres
                    ? detailAnime.genres.map((genre) => (
                        <span
                          key={genre.mal_id}
                          className="bg-gray-200 mx-1 text-black px-3 rounded-full text-sm"
                        >
                          {genre.name}
                        </span>
                      ))
                    : "Unknown"
                }
              />
              <DetailSection
                detailName={"Type"}
                detailDescription={
                  detailAnime.type ? detailAnime.type : "Unknown"
                }
              />
              <DetailSection
                detailName={"Release"}
                detailDescription={
                  detailAnime.year ? detailAnime.year : "Unknown"
                }
              />
              <DetailSection
                detailName={"Season"}
                detailDescription={
                  detailAnime.season ? detailAnime.season : "Unknown"
                }
              />
              <DetailSection
                detailName={"Rank"}
                detailDescription={
                  detailAnime.rank ? detailAnime.rank : "Unknown"
                }
              />
              <DetailSection
                detailName={"Score"}
                detailDescription={
                  detailAnime.score ? detailAnime.score : "Unknown"
                }
              />
              <DetailSection
                detailName={"Total Episode"}
                detailDescription={
                  detailAnime.episodes ? detailAnime.episodes : "Unknown"
                }
              />
            </div>
          </div>

          <div className="text-grayWhite font-poppins text-center md:text-left">
            <DetailSection
              detailName={"Background"}
              detailDescription={
                detailAnime.background ? detailAnime.background : "Unknown"
              }
            />
            <DetailSection
              detailName={"Synopsis"}
              detailDescription={
                detailAnime.synopsis ? detailAnime.synopsis : "Unknown"
              }
            />
          </div>
          <Back variant={"mx-auto block mt-10"} />
        </>
      )}
    </div>
  )
}
