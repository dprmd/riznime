import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

// Services
import { fetchJikanApi } from "../../services/JikanApi"

// Components
import AnimeList from "../../components/AnimeList"

export default function SearchAnime() {
  const { keyword } = useParams()
  const [searchAnime, setSearchAnime] = useState([])
  const [loadingSearchAnime, setLoadingSearchAnime] = useState(true)

  useEffect(() => {
    document.title = `RizNime - ${keyword}`
    setLoadingSearchAnime(true)
    async function fetchSearchAnime() {
      const response = await fetchJikanApi(`/anime?q=${keyword}`)
      setSearchAnime(response.data)
      setLoadingSearchAnime(false)
    }

    fetchSearchAnime()
  }, [keyword])

  return (
    <div className="py-5">
      {!loadingSearchAnime && searchAnime.length > 0 && (
        <h2 className="text-xl font-bold text-center my-2 font-montserrat text-grayWhite">
          Hasil pencarian {keyword}
        </h2>
      )}
      {!loadingSearchAnime && searchAnime.length === 0 && (
        <h2 className="text-xl font-bold text-center my-2 font-montserrat text-grayWhite">
          {keyword} Tidak Ditemukan
        </h2>
      )}
      <div>
        <AnimeList animeData={searchAnime} loadingAnime={loadingSearchAnime} />
      </div>
    </div>
  )
}
