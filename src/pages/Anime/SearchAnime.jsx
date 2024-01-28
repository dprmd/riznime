import { useEffect } from "react"
import { useParams } from "react-router-dom"

// Services
import { fetchJikanApi } from "../../services/JikanApi"

// Context
import { useSearchAnimeContext } from "../../context/SearchAnimeContext"

// Components
import AnimeList from "../../components/AnimeList"

export default function SearchAnime() {
  const { keyword } = useParams()
  const [state, dispatch] = useSearchAnimeContext()

  useEffect(() => {
    document.title = `RizNime - ${keyword}`
    async function fetchSearchAnime() {
      const response = await fetchJikanApi(`/anime?q=${keyword}`)
      dispatch({ type: "fetchNow", payload: response.data })
    }

    fetchSearchAnime()
  }, [keyword])

  return (
    <div className="py-5">
      {state?.page_1?.length > 0 && (
        <h2 className="text-xl font-bold text-center my-2 font-montserrat text-grayWhite">
          Hasil pencarian {keyword}
        </h2>
      )}
      {state?.page_1?.length === 0 && (
        <h2 className="text-xl font-bold text-center my-2 font-montserrat text-grayWhite">
          {keyword} Tidak Ditemukan
        </h2>
      )}
      <div>
        <AnimeList animeData={state.page_1} />
      </div>
    </div>
  )
}
